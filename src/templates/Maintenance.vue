<template>
  <Layout>
    <!-- Hero -->
    <section
      id="maintenance-pricing"
      class="banner is-flex is-align-items-center pt-6 mt-90"
    >
      <div class="container">
        <div class="columns">
          <div class="column content">
            <h1 class="my-4">
              Maintenance plans
            </h1>

            <p>
              As you might have experienced before, an e-commerce platform is
              never finished, you learn about your customers as you go. That’s
              why we have the following maintenance plans available. We host
              your Vendure instance on Google Cloud’s autoscaling Cloud Run
              environment (together with other Google Cloud tools).
            </p>
            <p v-if="discount">
              ⭐
              <i
                >These prices already include a personal discount for you,
                please don't share this url with anyone</i
              >
            </p>
            <p v-else>
              ⭐ You get an <strong>8% discount every month, forever</strong>,
              if you let us publish part of your project as an open source
              plugin.
            </p>

            <br />
            <br />
            <div class="columns is-centered">
              <div class="column is-half has-text-centered">
                <p>
                  Up to 
                  <strong>{{ nrOfOrders * 100 }} orders / month </strong>
                </p>
                <b-slider
                  size="is-large"
                  :min=".50"
                  :max="15"
                  v-model="nrOfOrders"
                  :tooltip="false"
                  :change="setHostingPrice()"
                >
                  <b-slider-tick :value="0.5"></b-slider-tick>
                  <b-slider-tick :value="1"></b-slider-tick>
                  <b-slider-tick :value="2"></b-slider-tick>
                  <b-slider-tick :value="5"></b-slider-tick>
                  <b-slider-tick :value="10"></b-slider-tick>
                  <b-slider-tick :value="15"></b-slider-tick>
                </b-slider>

                <br />

                <b-field>
                  <b-radio-button
                    expanded
                    v-model="payPerNrOfMonths"
                    :native-value="1"
                    type="is-success"
                  >
                    <span>Pay monthly</span>
                  </b-radio-button>

                  <b-radio-button
                    expanded
                    v-model="payPerNrOfMonths"
                    :native-value="12"
                    type="is-success"
                  >
                    <span>Pay yearly</span>
                  </b-radio-button>
                </b-field>
              </div>
            </div>

            <br />

            <table class="table is-bordered is-hoverable">
              <thead>
                <tr>
                  <th></th>
                  <th><h3>Basic</h3></th>
                  <th><h3>Intermediate</h3></th>
                  <th><h3>Pro</h3></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    Price per {{ billingLabel }}
                    <Tooltip
                      >You pay <b>€{{ hostingPrice * payPerNrOfMonths }}</b> for hosting, 
                      <br> + the included hours for intermediate and pro</Tooltip
                    >
                  </th>
                  <td>
                    <del v-if="discount"><br></del>
                    <h2>€{{ basicPrice }}</h2> /
                    {{ billingLabel }}
                  </td>
                  <td>
                    <del v-if="discount">€{{ originalIntermediatePrice }}<br></del>
                    <h2>€{{ intermediatePrice }}</h2>  / {{ billingLabel }}
                  </td>
                  <td>
                    <del v-if="discount">€{{ originalProPrice }}<br></del>
                    <h2>€{{ proPrice }}</h2>/ {{ billingLabel }}
                  </td>
                </tr>
                <tr>
                  <th>
                    Included hours/month
                    <Tooltip
                      >Fixed amount of hours included each month against a<br>
                      reduced hourly rate</Tooltip
                    >
                  </th>
                  <td>❌</td>
                  <td><strong>8 hours</strong></td>
                  <td><strong>16 hours</strong></td>
                </tr>
                <tr>
                  <th>
                    Additional hours
                    <Tooltip
                      >The hourly rate we charge when you <br> need more hours than
                      the ones included</Tooltip
                    >
                  </th>
                  <td>
                    <del v-if="discount">€ {{ originalRates.basic }}</del>
                    €{{ hourlyRates.basic }}/hour
                  </td>
                  <td>
                    <del v-if="discount">€ {{ originalRates.intermediate }}</del>
                    €{{ hourlyRates.intermediate }}/hour
                  </td>
                  <td>
                    <del v-if="discount">€ {{ originalRates.pro }}</del>
                    €{{ hourlyRates.pro }}/hour
                  </td>
                </tr>
                <tr>
                  <th>
                    Vendure minor version upgrades
                    <Tooltip
                      >We don't track time for minor upgrades, <br> so you don't pay
                      anything extra</Tooltip
                    >
                  </th>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <th>Scalable hosting</th>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <th>Uptime monitoring</th>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <th>
                    Dedicated test environment
                    <Tooltip
                      >You can test out new features on a dedicated test
                      environment<br> before using them on your live site</Tooltip
                    >
                  </th>
                  <td>❌</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <th>
                    Automated nightly checkout test
                    <Tooltip
                      >Every night we automatically check if products<br> can still
                      be ordered on your site</Tooltip
                    >
                  </th>
                  <td>❌</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <th>
                    Automated nightly 404 checks
                    <Tooltip
                      >Every night we automatically check <br> if you link to any pages
                      that don't exist</Tooltip
                    >
                  </th>
                  <td>❌</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
              </tbody>
            </table>

            <div class="has-text-centered">
              <Cta link="/contact/">Get in touch</Cta>
            </div>
            <br />
            <p>
              Asking support questions is always free. When changes need to be
              made, either in code, Vendure configuration or any other action
              needs to be taken, we track time spent per 15 minutes.
            </p>
            <p>
              We don’t guarantee any uptime, but the uptime of
              <strong>all shops combined</strong>
              in the past 30 days is
              <strong>99.97%</strong>
            </p>
            <h3>Continuity</h3>
            <p>
              Projects always include documentation, and you always have full
              ownership of the code and environment of your project. This way
              you are not locked in at Pinelab and always free to take your
              project elsewhere. (We want you to stay because we do a good job,
              not because you have to)
            </p>
            <br />
            <br />
            <p>
              Our general
              <a href="/toc.pdf" target="_blank">Terms and Conditions</a> apply
              to these plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>
<script>
import Tooltip from "../components/Tooltip.vue";
import CalendlyCta from "../components/CalendlyCta.vue";
export default {
  components: { Tooltip, CalendlyCta },
  data() {
    return {
      discount: false,
      payPerNrOfMonths: 12,
      nrOfOrders: 0.5,
      hostingPrice: 50,
      originalRates: {
        basic: 110,
        intermediate: 100,
        pro: 90,
      },
      hourlyRates: {
        basic: 110,
        intermediate: 100,
        pro: 90,
      },
    };
  },
  created() {
    this.setHostingPrice();
  },
  mounted() {
    const discount = this.$route.query.dsc;
    if (discount) {
      const [basic, intermediate, pro] = discount.split(",");
      this.hourlyRates.basic = basic;
      this.hourlyRates.intermediate = intermediate;
      this.hourlyRates.pro = pro;
      this.discount = true;
    }
    this.nrOfOrders = Number(this.$route.query.orders || 0.5);
  },
  computed: {
    billingLabel() {
      return this.payPerNrOfMonths === 1 ? "month" : "year";
    },
    basicPrice() {
      return this.hostingPrice * this.payPerNrOfMonths;
    },
    intermediatePrice() {
      return (
        (this.hostingPrice + this.hourlyRates.intermediate * 8) *
        this.payPerNrOfMonths
      );
    },
        originalIntermediatePrice() {
      return (
        (this.hostingPrice + this.originalRates.intermediate * 8) *
        this.payPerNrOfMonths
      );
    },
    proPrice() {
      return (
        (this.hostingPrice + this.hourlyRates.pro * 16) * this.payPerNrOfMonths
      );
    },
        originalProPrice() {
      return (
        (this.hostingPrice + this.originalRates.pro * 16) * this.payPerNrOfMonths
      );
    },
  },
  methods: {
    setHostingPrice() {
      if (this.nrOfOrders <= 0.5) {
        this.hostingPrice = 25;
      } else if (this.nrOfOrders <= 2) {
        this.hostingPrice = 50;
      } else if (this.nrOfOrders <= 5) {
        this.hostingPrice = 100;
      } else if (this.nrOfOrders <= 10) {
        this.hostingPrice = 150;
      } else if (this.nrOfOrders <= 12) {
        this.hostingPrice = 250;
      } else {
        this.hostingPrice = 300;
      }
    },
  },
};
</script>
<style scoped>
del {
  color: darkgray;
  padding-right: 5px;
}
h2 {
  display: inline;
}
small {
  color: darkgray;
}
</style>
