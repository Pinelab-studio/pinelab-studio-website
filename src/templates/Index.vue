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
                Wij bouwen een webshop die vlekkeloos werkt, zodat jij kan focussen op het strategisch runnen van je onderneming.
              </p>

              <Cta link="/webshop-check/">Gratis webshop check</Cta>

            </div>
          </div>
          <div class="column is-hidden-mobile is-hidden-tablet-only">
            <img id="intro-image" src="/images/martijn-square.jpeg" alt="Martijn van Pinelab" class="rounded shadowed"/>
          </div>
        </div>
      </div>
    </section>

    <section id="how" class="section about" style="padding-top: 50px;">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-4-widescreen is-6-tablet">
            <div class="about-item">
              <div class="icon">
                <b-icon
                    icon="shield-check"
                    size="is-large">
                </b-icon>
              </div>

              <div class="content">
                <h4 class="mt-3 mb-3">UX</h4>
                <p class="mb-5">
                  Een gebruikerservaring die aansluit bij jouw onderneming om je conversie te verhogen.
                </p>
                <a href="#"> Lees meer </a>
              </div>
            </div>
          </div>

          <div class="column is-4-widescreen is-6-tablet">
            <div class="about-item">
              <div class="icon">
                <b-icon
                    icon="brush"
                    size="is-large">
                </b-icon>
              </div>
              <div class="content">
                <h4 class="mt-3 mb-3">Customizable</h4>
                <p class="mb-5">
                  Met de Vendure e-commerce engine kunnen we alles koppelen, zodat je tijd bespaart tijdens het afhandelen van bestellingen.
                </p>
                <a href="#"> Lees meer </a>
              </div>
            </div>
          </div>

          <div class="column is-4-widescreen is-6-tablet">
            <div class="about-item">
              <div class="icon">
                <b-icon
                    icon="account-multiple-check"
                    size="is-large">
                </b-icon>
              </div>
              <div class="content">
                <h4 class="mt-3 mb-3">Support</h4>
                <p class="mb-5">
                  We zorgen pro-actief dat er niks mis gaat. Heb je toch vragen? Dan staat er altijd iemand voor je klaar om je te helpen.
                </p>
                <a href="#"> Lees meer </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
</template>

<script>

export default {
  components: {
  },
};
</script>
<style>
#intro-image {
  height: 100%;
  object-fit: cover;
}
</style>
