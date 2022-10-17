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
                Doeltreffend ondernemen met een <span>professionele webshop</span>
              </h1>
              <p class="mb-6">
                Wij bouwen een webshop die vlekkeloos werkt, zodat jij kan focussen op het strategisch runnen van je
                onderneming.
              </p>

              <Cta form-message="Gratis gesprek aanvragen - hero">Gratis gesprek aanvragen</Cta>

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
          <div class="column is-4">
            <ReadMoreColumn
                data-aos="fade-up"
                :data-aos-delay="0"
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

          <div class="column is-4">
            <ReadMoreColumn
                data-aos="fade-up"
                :data-aos-delay="100"
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

          <div class="column is-4">
            <ReadMoreColumn
                data-aos="fade-up"
                :data-aos-delay="200"
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
            <div class="block" data-aos="fade-right">
              <h1 class="my-4">
                Webshop development
              </h1>
              <p class="mb-6">
                We bouwen complete custom webshops met Vendure, inclusief hosting, onderhoud en support. Voor een
                complete webshop kunnen we je vooraf <span>kosteloos</span> vertellen wat het je gaat kosten.
              </p>
            </div>
            <Cta form-message="Gratis gesprek aanvragen - webshop development">Gratis gesprek aanvragen</Cta>
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
          <div class="column has-text-right has-text-left-mobile pl-6 mb-6">
            <div class="block" data-aos="fade-left">
              <h1 class="my-4">
                Maatwerk development
              </h1>
              <p class="mb-6">
                Is je idee meer dan een webshop? Als <a href="https://www.vendure.io/cert-check/?JBLZUQFV"
                                                        _target="blank">
                <span class="is-underlined">Vendure Silver Partner</span>
              </a> kunnen we al jouw e-commerce wensen
                realiseren. Benieuwd naar hoe wij je kunnen helpen? We leggen het je graag uit.
              </p>
            </div>
            <Cta form-message="Gratis gesprek aanvragen - Maatwerk development">Gratis gesprek aanvragen</Cta>
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
            <p> Een vernieuwde webshop voor art supply winkel Cantastic.nl</p>
            <ul>
              <li><span>Geen klachten</span> over een langzame site meer van bezoekers.</li>
              <li>Snelle en <span>SEO vriendelijke webshop</span> met Vendure en Vue.js</li>
              <li>Verbeterde gebruiksvriendelijkheid met de color-picker voor spuitbussen</li>
              <li><span>Order-pick integratie</span> met GoedGepickt, om sneller bestellingen af te handelen</li>
            </ul>
          </div>
        </div>
        <div class="columns">
          <div class="column content" data-aos="fade-right">
            <h2> OpHetBoek.nl </h2>
            <p> Voor het e-book van Jet van Nieuwkerk maakten wij een webshop waar bezoekers het boek "Op!" konden
              bestellen.</p>
            <ul>
              <li><span>Bestand tegen piekbelasting</span> door onze Google Cloud expertise</li>
              <li>Een design dat overeenkomt met het design van het e-book</li>
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
      <div class="pinetrees p-3">
        <div class="container">
          <div class=" about-mobile" data-aos="fade-up">
            <div class="rounded shadowed-dark has-text-left content mobile-padding">
              <h1 class="mb-4">
                Over ons
              </h1>
              <p>
                Pinelab is opgericht door mij, Martijn. Samen met mijn ervaring als software developer en mijn netwerk
                van
                designers, marketeers en SEO experts bouwen wij moderne webshops met de technieken van 2022.
              </p>
              <p>
                Je krijgt bij ons altijd <span>eerlijk advies</span>: We zullen niet zomaar iets maken als je daar niets
                aan hebt. Wij
                hebben er net zo veel baat bij dat jouw onderneming een success is als jij zelf.
              </p>
              <p>
                Waarom zou je met ons samenwerken?
              </p>
              <ul>
                <li>Professionele oplossingen. Geen templates, themes of WooCommerce</li>
                <li>9 jaar ervaring als software developer</li>
                <li><a href="https://www.vendure.io/cert-check/?JBLZUQFV"
                       _target="blank">
                  <span class="is-underlined">Vendure Silver Partner</span>
                </a></li>
              </ul>
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
              <Cta class="mt-5 is-fullwidth" :form-message="`Vraag aan - Pricing: ${pricing.name} - ${pricing.fixedPrice}`">Vraag aan</Cta>

            </div>
          </template>
        </div>

      </div>
    </section>

  </Layout>
</template>

<script>
import CountUp from "../components/CountUp";
import ThugLifeComponent from "../components/ThugLifeComponent";
import AOS from "aos";

export default {
  components: { ThugLifeComponent, CountUp },
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
      test: 0,
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
          features: ['Persoonlijke support', '100 bestellingen per maand', 'Onbeperkt aantal producten', 'Geen integraties']
        },
        {
          name: 'Retailer',
          fixedPrice: 3500,
          yearlyPrice: 500,
          features: ['Persoonlijke support', '300 bestellingen per maand', 'Onbeperkt aantal producten', '1 integratie']
        },
        {
          name: 'Deluxe',
          fixedPrice: 5000,
          yearlyPrice: 700,
          features: ['Persoonlijke support', '> 500 bestellingen per maand', 'Onbeperkt aantal producten', '3 integraties']
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
