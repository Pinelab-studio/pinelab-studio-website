<template>
  <Layout>
    <section id="contact" class="banner is-flex">
      <div class="container">

        <div class="block">
          <h1 class="my-4">
            Contact
          </h1>
        </div>
        <p class="mb-6">
          Stuur ons een bericht en we nemen zo snel mogelijk contact met je op.
        </p>

        <div class="columns is-multiline">
          <div class="column is-6-desktop">
            <form id="contact-form" class="contact__form" method="post" action="https://formspree.io/f/xdopwkwl">
              <!-- form message -->
              <div class="columns is-multiline">
                <div class="column is-12">
                  <input name="email" class="input is-normal bordered" type="text" placeholder="Je emailadres">
                </div>
                <div class="column is-12">
                  <textarea class="textarea  bordered" name="message" placeholder="Je bericht"></textarea>
                  <input type="text" name="_gotcha" style="display:none" />
                </div>
                <div class="column is-12 has-text-right">
                  <button class="button cta is-primary shiny" name="submit" type="submit">Verstuur</button>
                </div>
              </div>
            </form>
          </div>

          <div class="column is-4-desktop">
            <div class="short-info bordered rounded">
              <ul class="list-unstyled">
                <li>
                  <h5>Telefoon</h5>
                  <a :href="`tel: ${$context.phone}`">{{ $context.phone }}</a>
                </li>
                <li>
                  <h5>Email</h5>
                  <a :href="`mailto: ${$context.email}`">{{ $context.email }}</a>
                </li>
                <li>
                  <h5>Adres</h5>
                  Cornelis Trooststraat 48<br/>
                  8932 BR<br/>
                  Leeuwarden
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  </Layout>
</template>
<script>

export default {
}
</script>
<style>
</style>