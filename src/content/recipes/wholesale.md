---
title: Wholesale
pubDate: 2024-04-09
description: "
This recipe will help you set up a dedicated wholesale channel in your Vendure shop, where products can be bought in bulk for dedicated wholesale prices. Only pre configured customers will be able to buy products from your Wholesale channel."
author: "Martijn"
image:
  url: "/images/martijn-profile.png"
  alt: "Martijn from Pinelab"
tags: ["wholesale", "business2business"]
---

## Features
1. The wholesale storefront will be a copy of your retail site, where products and product prices can differ
2. Customers can register and login
3. Wholesale customers can be identified by being placed in a Customer Group
4. You can configure some products to only be bought in bulk. For example, only per 4 units
5. Wholesale product prices can differ from your consumer prices
6. Shipping and payment methods for wholesale can be managed separate from your consumer methods

## Contents

## Create a Wholesale channel

This guide assumes you already have a retail channel setup, with product, collections and shipping methods.
First, we create a new channel that will hold all the wholesale products, collections, shipping methods and payment methods.
For a wholesale channel, we will reuse most of the entities in the retail channel.
* Create a new channel via the admin UI
* Assign all products from from the retail channel to the new wholesale channel using the `Assign all products to channel` script, which can be found [here](https://pinelab-plugins.com/plugin/vendure-scripts/).
  * By assigning the same products to the wholesale channel, the prices can differ, but the slugs, names and descriptions will be shared between the two channels.
* Assign all facets to the new channel. You can do this via the admin UI by selecting all facets and assigning them to your new channel.
* In our setup, the wholesale channel will have the same taxonomy as the retail storefront, so we also assign all collections to the new wholesale channel. This can also be done via the admin UI

## Wholesale storefront

Now that we have a dedicated wholesale channel, we need to render a storefront with products and collections from the new channel. At Pinelab we use the static site builder [Astro](https://astro.build/). Our Astro project has a .env file that tells our code what Vendure instance and what channel to use. We want to reuse our existing storefront code, but fetch data from a different Vendure channel, so we change the channel token:

```diff
  PUBLIC_VENDURE_HOST=https://vendure.io/shop-api
- PUBLIC_VENDURE_CHANNEL_TOKEN=retail-channel
+ PUBLIC_VENDURE_CHANNEL_TOKEN=wholesale-channel
```
We run `yarn dev`, and we have a storefront that displays our wholesale products and prices!

Your implementation may differ, depending on what frontend framework you use, but the concept stays the same. In reality we have 2 different env files, and during deploy we decide if we are building the retail or the wholesale website.

## SEO

Your wholesale storefront's products and collections will have the same descriptions as your retail site, so search engines will see this as duplicate content. Which is not good! You should prevent your wholesale site from being indexed by pointing the canonical urls of each page to your retail website.

For example, on a product page of your wholesale site: `<link rel="canonical" href="https://my-retail-site.com/product/t-shirt" />`. This tells search engines that the original version of this page can be found at `https://my-retail-site.com/product/t-shirt`.

## Only allow wholesale customers

Our setup only allows specific wholesale customers to use the wholesale storefront. For that, we use Vendure's Customer Groups feature.

### Wholesale customer group

In the Vendure admin UI, create a customer group `Wholesale`. Customers added to this group will have access to the wholesale site.
Customer have to pre-exist to be able to add them to a group. If they don't exist yet, you can create an account for them via the admin UI.

### Allow registration and login on your storefront

To determine if a customer is allowed on your wholesale site, we need to allow them to login. [The Vendure docs have a good and clear explanation](https://docs.vendure.io/guides/storefront/customer-accounts/#logging-in-and-out) on how to implement that in your storefront.

### Protect access to your wholesale site

Customer groups are not exposed in the Shop API by default, so we use the [Public Customer Groups Plugin](https://pinelab-plugins.com/plugin/vendure-plugin-public-customer-groups/) for that.

1. Install the plugin
2. Go to the `Wholesale` customer group in Vendure, and check the box `isPublic`
3. In your storefront, you should now check if the [active customer](https://docs.vendure.io/reference/graphql-api/shop/queries/#activecustomer) is in the Wholesale group, by checking if `activeCustomer.customerGroups` contains `Wholesale`.
4. If not, you should redirect the user to the login page.

Again, this differs depending on your storefront framework.

Now that you have secured your frontend, you should also use the `isCustomerInGroupPaymentChecker` from the [Payment Extensions Plugin](https://pinelab-plugins.com/plugin/vendure-plugin-payment-extensions/) to secure your backend. This checker only allows adding payments to the order when a customer is in a specific group.

## Only allow bulk purchases

A common use case for wholesale is to only allow products to be bough in bulk, for example, 'Spray can' can only be bought per 4 items, because they come in boxes of 4. To enable this, you can install the [Limited Products Plugin](https://pinelab-plugins.com/plugin/vendure-plugin-limited-products/):

1. Install the plugin
2. Go to the product you want to restrict, and set 4 in the field `Multiple of per order`. The product can now only be bought in multiples of 4
3. The field is available in the shop api under `product.limitPurchasePerMultipleOf`. You should use this field on your storefront to limit any quantity input to use multiples of 4. The Vendure backend will throw an error if your storefront will try to add 5 to cart for example.

## Revers tax charge

Our example wholesale shop is based in the Netherlands, selling to other business in the EU. In this case, customers outside of the Netherlands, but inside the EU region, do not have to pay taxes. 

* When a valid VAT ID is given, and the customer is based outside of the NL inside the EU, no tax should be added to the order
* We should use the [TaxLineCalculationStrategy](https://docs.vendure.io/reference/typescript-api/tax/tax-line-calculation-strategy/) for this.
* If you are using the [Invoices Plugin](https://pinelab-plugins.com/plugin/vendure-plugin-invoices/), you should state on your invoice that no tax is calculated. Something in the lines of "Tax free under intra-community supply." should be on your invoice.


## Deferred payments invoice

It's common for wholesale shops to allow their customers to purchase an order, and pay for the order on a later point in time by invoice. For example, a school teacher orders art supplies and hands over the invoice to a manager to be paid. In this case, the order should be placed in Vendure, but needs to be tracked in an accountant platform for payment.

We can create a dedicated payment method for this:
* Create a [Payment Eligibility Checker](https://docs.vendure.io/user-guide/settings/shipping-methods/#shipping-eligibility-checker) that checks if the logged in customer is in the Wholesale group.
* Create a [Payment Handler](https://docs.vendure.io/user-guide/settings/payment-methods/#payment-handler) named `Pay later`, that always transitions to `Settled`
* Create a payment method in the Vendure admin UI, with the eligibility checker and handler mentioned above.

On your storefront, you can use the following flow:
* Get eligible payment methods
* Whenever a customer is in the Wholesale group, the method `Pay later` will show up
* When a customer selects that method, the storefront should call the [addPaymentToOrder](https://docs.vendure.io/guides/core-concepts/payment/#add-payment-to-order) mutation with the method `Pay later`, and the order will transition to Payment Settled.

Keep in mind that if you push transactions to an external accounting platform, you might need to create a transaction as `Invoice sent` instead of `paid`, to keep track of what invoices are still open.