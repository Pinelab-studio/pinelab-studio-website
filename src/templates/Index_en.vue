<template>
  <div>

    <div id="navbar" class="navigation py-4">
      <div class="container">
        <b-navbar
            type="is-dark"
        >
          <template #brand>
            <a class="navbar-item" href="/">
              <img
                  src="/images/pinelab-logo-white-small.png"
                  alt="Pinelab logo"
                  style="width: 150px;"
              >
            </a>
          </template>

          <template #end>
            <b-navbar-item tag="div">
              <CtaEn
                  form-message="Get in touch - footer"
                  click-event-name="EN - Bottom contact"
              >Get in touch
              </CtaEn>
            </b-navbar-item>
          </template>
        </b-navbar>
      </div>
    </div>

    <section id="language">
      <div class="container mt-90">
        <div class="has-text-right pt-4">
          <g-link to="/" aria-label="Nederlands">
            <img src="/images/nl-flag.svg" style="height: 30px;"/>
          </g-link>
        </div>
      </div>
    </section>
    <!-- Hero -->
    <section id="value-proposition" class="banner is-flex is-align-items-center pt-6">
      <div class="container">
        <div class="columns">
          <div class="column is-7-widescreen is-6-desktop">
            <div class="block">
              <span class="is-uppercase text-sm letter-spacing ">ECOMMERCE EXPERTS</span>
              <h1 class="my-4">
                Hire a certified <span>Vendure developer</span>
              </h1>
              <p class="mb-6">
                Hi, I'm Martijn and I build e-commerce solutions with <span>Vendure</span>. For smaller projects, as
                <span>plugins</span> or <span>architecture guidelines</span> for your solution, we can
                agree on a fixed price. For larger projects, you can hire me on an hourly basis. My hourly rate is
                <span>€95,-</span> an hour, ex. tax.
              </p>

              <CtaEn
                  form-message="Hire a vendure developer - hero"
                  click-event-name="EN - Hero contact"
              >Book a free consultation
              </CtaEn>

            </div>
          </div>
          <div class="column is-hidden-mobile is-hidden-tablet-only">
            <img src="/images/martijn.jpeg" alt="Vendure Silver Partner"
                 class="rounded cover"/>
          </div>
        </div>
      </div>
    </section>

    <section id="how" class="section about" style="padding-top: 50px;">
      <div class="container">
        <div class="columns">
          <div class="column is-6">
            <div
                data-aos="fade-up"
                :data-aos-delay="0"
                class="about-item">
              <div class="icon">
                <b-icon
                    icon="file-certificate"
                    size="is-large">
                </b-icon>
              </div>
              <div class="content">
                <h4 class="mt-3 mb-3">Certified</h4>
                <ul>
                  <li>Pinelab is certified <a href="https://www.vendure.io/cert-check/?JBLZUQFV" target="_blank"><span>Vendure Silver Partner</span></a>
                  </li>
                  <li>Martijn is certified <a href="https://www.vendure.io/cert-check/?XHKFLQGG" target="_blank"><span>Vendure developer</span></a>
                  </li>
                </ul>
                <p class="mb-5">
                </p>
              </div>
            </div>
          </div>

          <div class="column is-6">
            <div
                data-aos="fade-up"
                :data-aos-delay="0"
                class="about-item">
              <div class="icon">
                <b-icon
                    icon="account-star"
                    size="is-large">
                </b-icon>
              </div>

              <div class="content">
                <h4 class="mt-3 mb-3">Experience</h4>
                <ul>
                  <li>Experienced <a href="https://pinelab-plugins.com/" target="_blank"><span>plugin</span></a> builder
                  </li>
                  <li>Experienced <a
                      href="https://github.com/vendure-ecommerce/vendure/pulls?q=is%3Apr+author%3Amartijnvdbrug"
                      target="_blank"><span>Vendure core contributor</span></a></li>
                  <li>Experience <a
                      href="https://www.vendure.io/blog/2021/11/serverless-e-commerce-vendure-on-google-cloud-run/"
                      target="_blank"><span>deploying Vendure on cloud environments</span></a></li>
                </ul>
                <p class="mb-5">
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="testimonials" class="banner pt-0 pb-6">
      <div class="container">
        <div class="block mb-6">
          <h1 class="mb-4">
            People we've worked with
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

    <div class="has-text-centered mb-6">
      <CtaEn
          form-message="Get in touch - footer"
          click-event-name="EN - Bottom contact"
      >Get in touch
      </CtaEn>
    </div>

    <Consent
        thank-you-message="Thank you"
        decline-text="No"
        accept-text="Yes"
    >
      <h3 class="has-text-white"> Cookies </h3>
      We use cookies to analyze our website's usage, is that ok?
    </Consent>

    <footer class="footer">
      <div class="container content has-text-centered  pb-6">
        <p>
          Pinelab •
          <a :href="`mailto: ${$context.email}`">{{ $context.email }}</a> •
          <a :href="`tel: ${$context.phone}`">{{ $context.phone }}</a> •
          BTW {{ $context.vat }} •
          KVK {{ $context.coc }} •
          <a :href="$context.github" target="_blank">
            <b-icon
                icon="github"
                size="is-small">
            </b-icon>
          </a>
        </p>
      </div>
    </footer>

  </div>
</template>

<script>
import CtaEn from "../components/Cta_en";
import AOS from "aos";

export default {
  components: { CtaEn },
  metaInfo: {
    htmlAttrs: {
      lang: 'en',
    },
  },
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
      return 2;
    }
  },
  data() {
    return {
      width: 1200,
      reviews: [
        {
          author: 'Amadeus',
          company: 'Torwell GmbH',
          image: '/images/review/amadeus.jpeg',
          message: `Martijn from Pinelab is a very skilled and professional software developer with <span>tremendous experience in both architecture and implementation</span> level which makes him a perfect match being an external consultant.`
        },
        {
          author: 'Timur Dogan',
          company: 'Keeb.supply',
          image: '/images/review/keeb.png',
          message: `We've been using Pinelab's plugins for about a month now and they are <span>the real deal</span>. They are some of the most useful and advanced extensions for the Vendure ecosystem yet.`
        },
      ],
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
</style>
