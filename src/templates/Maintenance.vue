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
            <p>
              ⭐ You get an <strong>8% discount every month, forever</strong>,
              if you let us publish part of your project as an open source
              plugin.
            </p>

            <br />
            <br />
            <p>
              Show prices for
              <strong>{{ nrOfOrders * 100 }} orders / month </strong>
            </p>
            <b-slider
              size="is-large"
              :min="0"
              :max="15"
              v-model="nrOfOrders"
              :tooltip="false"
              :change="setHostingPrice()"
              style="max-width: 300px;"
            >
              <b-slider-tick :value="1"></b-slider-tick>
              <b-slider-tick :value="2"></b-slider-tick>
              <b-slider-tick :value="5"></b-slider-tick>
              <b-slider-tick :value="10"></b-slider-tick>
              <b-slider-tick :value="15"></b-slider-tick>
            </b-slider>
            <br />

            <table class="table is-bordered is-hoverable">
              <thead>
                <tr>
                  <th></th>
                  <th><h3>Basic</h3></th>
                  <th><h3>Intermediate</h3></th>
                  <th><h3>Advanced</h3></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th></th>
                  <td>€{{ hostingPrice }} / month</td>
                  <td>€{{ hostingPrice }} + €800 / month</td>
                  <td>€{{ hostingPrice }} + €1440 / month</td>
                </tr>
                <tr>
                  <th>Included hours/month</th>
                  <td>❌</td>
                  <td><strong>8 hours</strong></td>
                  <td><strong>16 hours</strong></td>
                </tr>
                <tr>
                  <th>
                    Additional hours
                    <Tooltip
                      >The hourly rate we charge when you need more hours than
                      the ones included</Tooltip
                    >
                  </th>
                  <td>€110/hour</td>
                  <td>€100/hour</td>
                  <td>€90/hour</td>
                </tr>
                <tr>
                  <th>Vendure minor version upgrades</th>
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
                  <th>Dedicated test environment</th>
                  <td>❌</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <th>
                    Automated nightly checkout test
                    <Tooltip
                      >Every night we automatically check if products can still
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
                      >Every night we automatically if you link to any pages that don't exist</Tooltip
                    >
                  </th>
                  <td>❌</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
              </tbody>
            </table>

            <div class="has-text-centered"><Cta link="/contact/">Get in touch</Cta></div>
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
      nrOfOrders: 1,
      hostingPrice: 0,
    };
  },
  created() {
    this.setHostingPrice();
  },
  methods: {
    setHostingPrice() {
      if (this.nrOfOrders <= 1) {
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
