<template>
  <Layout>
    <!-- Hero -->
    <section id="value-proposition" class="banner is-flex is-align-items-center mt-90">
      <div class="container">
        <div class="columns">
          <div class="column is-7-widescreen is-6-desktop">
            <div class="block">
              <span class="is-uppercase text-sm letter-spacing ">DE WEBSHOP EXPERTS</span>
              <h1 class="my-4">
                Doeltreffend ondernemen met een <span class="highlight">professionele webshop</span>
              </h1>
              <p class="mb-6">
                Wij bouwen een webshop die vlekkeloos werkt, zodat jij kan focussen op het strategisch runnen van je
                onderneming.
              </p>

              <Cta link="/webshop-check/">Gratis webshop check</Cta>

            </div>
          </div>
          <div class="column is-hidden-mobile is-hidden-tablet-only">
            <img src="/images/martijn-square.jpeg" alt="Martijn van Pinelab"
                 class="rounded cover"/>
          </div>
        </div>
      </div>
    </section>

    <section id="how" class="section about" style="padding-top: 50px;">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-4-widescreen is-6-tablet">
            <ReadMoreColumn
                icon="shield-check"
                title="UX"
            >
              <template #preview>
                Verhoog je conversie met een gebruikerservaring die aansluit bij jouw onderneming.
              </template>
              <template #more>
                Met onze best practices navigeren bezoekers vloeiend door een webshop in de stijl van jouw
                onderneming. Dit verhoogt de conversie en voorkomt vragen bij je bezoekers.
              </template>
            </ReadMoreColumn>
          </div>

          <div class="column is-4-widescreen is-6-tablet">
            <ReadMoreColumn
                icon="brush"
                title="Customizable"
            >
              <template #preview>
                Bespaar tijd op handmatige handelingen door te koppelen met externe fulfilment platformen.
              </template>
              <template #more>
                Met het Vendure e-commerce framework kunnen we alles bouwen en koppelen, zodat je tijd bespaart tijdens
                het afhandelen
                van bestellingen.
              </template>
            </ReadMoreColumn>
          </div>

          <div class="column is-4-widescreen is-6-tablet">
            <ReadMoreColumn
                icon="account-multiple-check"
                title="Support"
            >
              <template #preview>
                Vragen over je webshop? Er staat altijd iemand klaar om je te helpen.
              </template>
              <template #more>
                We zorgen pro-actief dat er niks mis gaat, maar soms heb je vragen, of wil je gewoon advies hebben wat
                de best practices zijn. In dat geval is er altijd iemand om je te helpen.
              </template>
            </ReadMoreColumn>
          </div>
        </div>
      </div>
    </section>

    <section class="section counter">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="counter-item has-text-centered">
              <h2 class="mb-0">
                <span class="counter-stat font-weight-bold">
                € <CountUp value="830"/>k +
              </span>
              </h2>
              <p>Gerealiseerde omzet voor onze klanten</p>
            </div>
          </div>
          <div class="column">
            <div class="counter-item has-text-centered">
              <h2 class="mb-0">
                <span class="counter-stat font-weight-bold">
                <CountUp value="220"/>k +
              </span>
              </h2>
              <p>Wereldewijde gebruikers</p>
            </div>
          </div>
          <div class="column">
            <div class="counter-item has-text-centered">
              <h2 class="mb-0">
                <span class="counter-stat font-weight-bold">
                <CountUp value="9"/> +
              </span>
              </h2>
              <p>Jaren ervaring</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="banner">
      <div class="container">

        <div class="columns mb-6">
          <div class="column pr-6 mb-6">
            <div class="block">
              <h1 class="my-4">
                Webshop development
              </h1>
              <p class="mb-6">
                We bouwen complete custom webshops met Vendure, inclusief hosting, onderhoud en support. Voor een
                complete webshop kunnen we je <span
                  class="highlight">vooraf kosteloos vertellen wat het je gaat kosten.</span>
              </p>
              <Cta link="/webshop-check/">Gratis gesprek aanvragen</Cta>
            </div>
          </div>
          <div class="column ">
            <img src="/images/martijn.jpeg" alt="Martijn van Pinelab"
                 class="rounded cover"/>
          </div>
        </div>

        <div class="columns">
          <div class="column mb-6">
            <a href="https://www.vendure.io/cert-check/?JBLZUQFV"
               _target="blank">
              <img src="/images/vendure-silver-partner.jpg" alt="Officieel Silver Partner!"
                   class="rounded cover"/>
            </a>
          </div>
          <div class="column has-text-right has-text-left-mobile pl-6 mb-6">
            <div class="block">
              <h1 class="my-4">
                Maatwerk development
              </h1>
              <p class="mb-6">
                Is je idee meer dan een webshop? Als <a href="https://www.vendure.io/cert-check/?JBLZUQFV"
                                                        _target="blank">
                <span class="highlight is-underlined">Vendure Silver Partner</span>
              </a> kunnen we al jouw e-commerce wensen
                realiseren. Benieuwd naar hoe wij je kunnen helpen? Vraag kosteloos een gesprek aan.
              </p>
              <Cta link="/webshop-check/">Gratis gesprek aanvragen</Cta>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section id="testimonials" class="banner pt-0">
      <div class="container">
        <div class="block mb-6">
          <h1 class="mb-4">
            De mening van onze klanten
          </h1>
        </div>
        <b-carousel-list
            v-model="test"
            :data="reviews"
            :items-to-show="reviewsToShow"
            :arrow="true"
            :repeat="false"
            :arrow-hover="false"
            icon-prev="chevron-left"
            icon-next="chevron-right"
        >
          <template #item="list">
            <div class="rounded bordered m-4 p-4">
              <div class="card-content">
                De nieuwe website is <span class="highlight">10 keer sneller en stabieler</span> dan mijn oude WooCommerce website!
              </div>
            </div>
            <div class="client-info is-flex is-align-items-center m-4">
              <div class="client-img image pr-4">
                <img src="https://demo.themefisher.com/orbitor-bulma/images/team/testimonial1.jpg" alt="" class="w-100 is-rounded">
              </div>
              <div class="info">
                <h6>Frank Wasse</h6>
                <span>Wormenkwekerij Wasse</span>
              </div>
            </div>
          </template>
        </b-carousel-list>
      </div>
    </section>


  </Layout>
</template>

<script>

import CountUp from "../components/CountUp";

export default {
  components: { CountUp },
  mounted() {
    this.width = window.innerWidth;
    this.$nextTick(() => {
      window.addEventListener('resize', () => this.width=window.innerWidth);
    })
  },
  computed: {
    reviewsToShow() {
      if (this.width < 1024) {
        return 1.5;
      }
      return 2.5;
    }
  },
  data() {
    return {
      width: 1200,
      test: 0,
      reviews: [
        {
          title: 'Slide 1',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          rating: 4.4
        },
        {
          title: 'Slide 1',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          rating: 4.4
        },
        {
          title: 'Slide 1',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          rating: 4.4
        },
      ]
    }
  }
};
</script>
<style>
.cover {
  height: 100%;
  object-fit: cover;
}
</style>
