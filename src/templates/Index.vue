<template>
  <Layout>
    <section id="language">
      <div class="container mt-90">
        <div class="has-text-right pt-4">
          <g-link to="/en/" aria-label="English version">
            <img src="/images/gb-flag.svg" style="height: 30px;"/>
          </g-link>
        </div>
      </div>
    </section>
    <!-- Hero -->
    <section id="value-proposition" class="banner is-flex is-align-items-center pt-6">
      <div class="container">
        <div class="columns">
          <div class="column is-7-widescreen is-6-desktop pr-6">
            <div class="block">
              <span class="is-uppercase text-sm letter-spacing ">DE WEBSHOP EXPERTS</span>
              <h1 class="my-4">
                <span>E-commerce oplossingen</span>
                <br/>
                voor de gevorderde ondernemer
              </h1>
              <p class="mb-6">
                Wordt het niet eens tijd voor een professionele webshop? Met een open en eerlijke samenwerking bouwen we
                webshops waar je mee vooruit kan.
              </p>

              <Cta
                  form-message="Webshop check aanvragen - hero"
                  click-event-name="Hero contact"
                  form-display-message="Laat je emailadres achter en we doen zo snel mogelijk een check van je huidige webshop."
              >Gratis webshop advies aanvragen
              </Cta>

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
        <div class="columns">
          <div class="column is-4"
               data-aos="fade-up"
               :data-aos-delay="0"
          >
            <ReadMoreColumn
                icon="hand-heart"
                title="Open en eerlijk"
            >
              <template #preview>
                Wist je dat 64% van gebouwde functionaliteit zelden of nooit gebruikt wordt?
              </template>
              <template #more>
                Als we klakkeloos zouden bouwen wat je vraagt, betaal je dus 64% te veel. We denken met je mee en maken
                resultaten meetbaar, zo bouwen we alleen zaken waar je wat aan hebt.
              </template>
            </ReadMoreColumn>
          </div>

          <div class="column is-4"
               data-aos="fade-up"
               :data-aos-delay="100"
          >
            <ReadMoreColumn
                icon="speedometer"
                title="Bespaar tijd"
            >
              <template #preview>
                Wat is 2 keer zoveel omzet waard, als het je 4 keer zoveel tijd kost?
              </template>
              <template #more>
                We streven naar zo veel mogelijk automatisering. We zorgen dat je bezoekers foutloos door je webshop
                navigeren en koppelen met jouw favoriete verzendpartij. Zo zorgen we er samen
                voor dat je 2 keer zo veel doet in de helft van de tijd.
              </template>
            </ReadMoreColumn>
          </div>

          <div class="column is-4"
               data-aos="fade-up"
               :data-aos-delay="200"
          >
            <ReadMoreColumn
                icon="lifebuoy"
                title="Advies en ondersteuning"
            >
              <template #preview>
                Heb je vragen, of wil je gewoon advies? Dan staan we altijd klaar om je te helpen.
              </template>
              <template #more>
                Hoe zit het ook alweer met BTW buiten de EU? Kan ik een kortingscode aanmaken voor een specifieke groep
                klanten? We staan altijd klaar om je advies te geven. Geen zorgen, we vertellen je graag hoe je het
                vervolgens zelf kan!
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
            <div class="block" data-aos="fade-right">
              <h1 class="my-4">
                Webshop development
              </h1>
              <p class="mb-6">
                We bouwen <span>complete custom webshops</span> met Vendure, inclusief hosting, onderhoud en support.
                Voor een
                complete webshop kunnen we je vooraf vertellen wat het je gaat kosten.
              </p>
            </div>
            <Cta
                form-message="Vrijblijvend gesprek aanvragen - webshop development"
                click-event-name="Webshop development"
            >Vrijblijvend gesprek aanvragen
            </Cta>
          </div>
          <div class="column" data-aos="fade-left">
            <img
                src="/images/martijn.jpeg" alt="Martijn van Pinelab"
                class="rounded cover"/>
          </div>
        </div>

        <div class="columns">
          <div class="column mb-6" data-aos="fade-right">
            <img src="/images/vendure-silver-partner.jpg" alt="Officieel Silver Partner!"
                 class="rounded cover"/>
          </div>
          <div class="column pl-6 mb-6">
            <div class="block" data-aos="fade-left">
              <h1 class="my-4">
                Maatwerk development
              </h1>
              <p class="mb-6">
                Is je idee meer dan een webshop? Als <a href="https://www.vendure.io/cert-check/?JBLZUQFV"
                                                        target="blank">
                Vendure Silver Partner
              </a> kunnen we al jouw e-commerce wensen
                realiseren. Benieuwd naar hoe wij je kunnen helpen? We leggen het je graag uit.
              </p>
            </div>
            <Cta
                form-message="Vrijblijvend gesprek aanvragen - Maatwerk development"
                click-event-name="Custom development"
            >Vrijblijvend gesprek aanvragen
            </Cta>
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
            :data="reviews"
            :items-to-show="reviewsToShow"
            :arrow="true"
            :repeat="false"
            :arrow-hover="false"
            icon-prev="chevron-left"
            icon-next="chevron-right"
            v-on:change="logClick('testimonial change', 'testimonial change')"
        >
          <template #item="review">
            <div
                data-aos="fade-up"
                :data-aos-delay="review.index * 50"
                class="rounded bordered mb-4 mr-4 flex-grow">
              <div class="card-content" v-html="review.message"/>
            </div>
            <div class="client-info is-flex is-align-items-center m-4 stick-to-bottom">
              <div class="client-img image pr-4">
                <img :src="review.image" alt="" class="is-rounded">
              </div>
              <div class="info">
                <h6>{{ review.author }}</h6>
                {{ review.company }}
              </div>
            </div>
          </template>
        </b-carousel-list>
      </div>
    </section>

    <section id="cases" class="banner pt-0">
      <div class="container">
        <div class="block mb-6">
          <h1 class="mb-4">
            Cases
          </h1>
          <p> Een greep uit ons portfolio. Benieuwd naar meer? Neem
            <g-link to="/contact/">contact</g-link>
            met ons op!
          </p>
        </div>
        <div class="columns mb-6">
          <div class="column" data-aos="fade-right">
            <img src="/images/cantastic-mockup.png"/>
          </div>
          <div class="column content" data-aos="fade-left">
            <h2> Cantastic.nl </h2>
            <p> Voor art supply store Cantastic.nl hebben we een nieuw design gemaakt en de oude WooCommerce shop
              overgezet naar een razendsnelle Vendure shop.</p>
            <ul>
              <li><span>Meer conversie</span> door snellere laadtijd</li>
              <li><span>Meer bezoekers</span> doordat de nieuwe shop een betere SEO waarde heeft</li>
              <li><span>Meer omzet</span> door de maatwerk color-picker voor spuitbussen</li>
              <li><span>Tijdsbesparing</span> bij afhandeling, door de order-pick integratie met GoedGepickt</li>
            </ul>
          </div>
        </div>
        <div class="columns mb-6">
          <div class="column content" data-aos="fade-right">
            <h2> OpHetBoek.nl </h2>
            <p> Voor het e-book van Jet van Nieuwkerk maakten wij een webshop waar bezoekers het boek "Op!" konden
              bestellen.</p>
            <ul>
              <li><span>Bestand tegen piekbelasting</span>, dus geen gemiste bestellingen tijdens het drukke
                lanceermoment
              </li>
              <li><span>Hogere conversie</span> door een checkout op maat voor e-books</li>
              <li><span>Geen handmatige handelingen:</span> klanten ontvangen automatisch het boek in hun email</li>
            </ul>
          </div>
          <div class="column" data-aos="fade-left">
            <img src="/images/op-mockup.png"/>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="banner pt-0">
      <div class="pinetrees p-3 columns is-centered">
        <div class="container column is-8-desktop is-12-tablet">
          <div class=" about-mobile" data-aos="fade-up">
            <div class="rounded shadowed-dark has-text-left content mobile-padding">
              <h1 class="mb-4">
                Over ons
              </h1>
              <p>
                Pinelab is opgericht door mij, Martijn. Samen met mijn ervaring als software developer en mijn netwerk
                van
                designers, marketeers en SEO experts <span>doen we 1 ding, en dat doen we als de beste</span>: we bouwen
                professionele en moderne e-commerce oplossingen.
              </p>
              <p>
                Waarom zou je met ons samenwerken?
              </p>
              <ul>
                <li>Professionele oplossingen met meetbaar resultaat</li>
                <li>9 jaar ervaring met het bouwen van e-commerce platformen</li>
                <li><a href="https://www.vendure.io/cert-check/?JBLZUQFV"
                       target="blank">Vendure Silver Partner
                </a> (Vendure is ons framework of choice als het gaat om e-commerce)
                </li>
              </ul>
              <h2 class="mb-4 mt-6">
                Onze waarden
              </h2>
              <p>
                <span>Integriteit</span> staat hoog in het vaandel: We vertellen je vooraf wat iets gaat kosten, zodat je weet wat je
                kan verwachten. Geen stiekem gedoe of verstopte kosten.
              </p>
              <p>
                We zijn <span>anti dark patterns</span>: We gaan je niet helpen bezoekers te misleiden. Kwaliteit en echte waarde
                leveren op lange termijn toch veel meer op!
              </p>
              <p>
                <span>We werken samen</span>: Wij zijn niet je bouwer en jij bent niet onze klant. We werken samen om je onderneming
                succesvol te maken. Zo zorgen we dat je niet betaalt voor functionaliteit die toch niet gebruikt gaat
                worden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="pricing" class="banner pt-0">
      <div class="container">
        <div class="block mb-6">
          <h1 class="mb-4">
            Tarieven
          </h1>
          <p>
            Hieronder vind je een schatting van wat een webshop je gaat kosten. Exacte prijzen hangen af van jouw
            onderneming en je wensen.
          </p>
        </div>

        <div class="columns">
          <template v-for="(pricing, index) of pricings">
            <div class="column has-text-centered">
              <div class="pricing-block card has-text-centered rounded bordered flex-parent"
                   data-aos="fade-up"
                   :data-aos-delay="index === 1 ? 0 : (index + 1) * 100"
              >
                <div class="price-header">
                  <span class="is-uppercase letter-spacing h5">{{ pricing.name }}</span>
                  <h2><span>€{{ pricing.fixedPrice }}</span></h2>
                  <h6 class="text-muted">+ €{{ pricing.yearlyPrice }} jaarlijks</h6>
                </div>
                <div class="price-body flex-grow p-2">
                  <br/>
                  <ul class="list-unstyled mb-0">
                    <li v-for="feature of pricing.features">{{ feature }}</li>
                  </ul>
                </div>
              </div>
              <Cta
                  class="mt-5 is-fullwidth"
                  :form-message="`Vraag aan - Pricing: ${pricing.name} - ${pricing.fixedPrice}`"
                  :click-event-name="pricing.name"
              >Vraag aan
              </Cta>

            </div>
          </template>
        </div>

        <div class="has-text-centered">
          <g-link to="/contact/">Vraag op maat? Neem contact op</g-link>
        </div>

      </div>
    </section>

  </Layout>
</template>

<script>
import CountUp from "../components/CountUp";
import AOS from "aos";

export default {
  components: { CountUp },
  mounted() {
    this.width = window.innerWidth;
    this.$nextTick(() => {
      window.addEventListener('resize', () => this.width = window.innerWidth);
    });
    AOS.init({
      duration: 400,
      easing: "ease-out-quad",
      anchorPlacement: 'top',
      startEvent: 'load',
    });
  },
  metaInfo() {
    const title = 'Pinelab e-commerce experts';
    const description = 'Professionele webshops en e-commerce oplossingen voor de gevorderde ondernemer';
    return {
      title,
      meta: [
        { key: 'title', name: 'title', content: title },
        { key: 'description', name: 'description', content: description },
        { key: 'og:title', name: 'og:title', content: title },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        { key: 'og:image', name: 'og:image', content: 'https://pinelab.studio/images/vendure-silver-partner.jpg' },
        { key: 'og:type', name: 'og:type', content: 'website' },
        { key: 'og:url', name: 'og:url', content: 'https://pinelab.studio/' },
      ],
    };
  },
  computed: {
    reviewsToShow() {
      if (this.width < 768) {
        return 1;
      } else if (this.width < 1024) {
        return 1.5
      }
      return 2.5;
    }
  },
  data() {
    return {
      width: 1200,
      reviews: [
        {
          author: 'Frank Wasse',
          company: 'Wormenkwekerij Wasse',
          image: '/images/review/frank-wasse.jpg',
          message: `Uiteindelijk de knoop doorgehakt en een nieuwe website laten maken door Pinelab. De nieuwe website is <span>10 keer sneller en stabieler</span> dan mijn oude WooCommerce website! Dat had ik veel eerder moeten doen.`
        },
        {
          author: 'Amadeus',
          company: 'Torwell GmbH',
          image: '/images/review/amadeus.jpeg',
          message: `Martijn from Pinelab is a very skilled and professional software developer with <span>tremendous experience in both architecture and implementation</span> level which makes him a perfect match being an external consultant.`
        },
        {
          author: 'Frank Masselink',
          company: 'Cantastic.nl',
          image: '/images/review/frank-masselink.jpg',
          message: `Samen met Martijn van Pinelab hebben we de nieuwe Cantastic.nl webshop ontwikkeld. We zijn erg blij met het eindresultaat. De nieuwe webshop is mooi en werkt erg fijn!`
        },
        {
          author: 'Timur Dogan',
          company: 'Keeb.supply',
          image: '/images/review/keeb.png',
          message: `We've been using Pinelab's plugins for about a month now and they are <span>the real deal</span>. They are some of the most useful and advanced extensions for the Vendure ecosystem yet.`
        },
      ],
      pricings: [
        {
          name: 'Starter',
          fixedPrice: 2000,
          yearlyPrice: 300,
          features: ['Altijd advies en ondersteuning', '100 bestellingen per maand', 'Onbeperkt aantal producten', 'Geen integraties']
        },
        {
          name: 'Retailer',
          fixedPrice: 3500,
          yearlyPrice: 500,
          features: ['Altijd advies en ondersteuning', '300 bestellingen per maand', 'Onbeperkt aantal producten', '1 integratie']
        },
        {
          name: 'Deluxe',
          fixedPrice: 5000,
          yearlyPrice: 700,
          features: ['Altijd advies en ondersteuning', '> 500 bestellingen per maand', 'Onbeperkt aantal producten', '3 integraties']
        }
      ]
    }
  }
};
</script>
<style>
.cover {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.client-img img {
  height: 70px;
  width: 70px;
}

.carousel-slide {
  display: flex;
  flex-direction: column;
}

.flex-parent {
  display: flex;
  flex-direction: column;
  /*  height: 100%;*/
}

.flex-grow {
  flex-grow: 1;
}

.pinetrees {
  background-image: url("/images/pinetrees.jpg");
  object-fit: cover;
  height: 100%;
}
</style>
