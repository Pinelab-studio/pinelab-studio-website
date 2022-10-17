<template>
  <ClientOnly>
    <div v-if="!consentSet" class="footer consent-block pt-6 p-3 px-6">
      <div class="container">
        <slot/>
        <div class="has-text-right">
          <b-button @click="decline()" class="is-dark">{{
              declineText
            }}
          </b-button>
          <b-button @click="accept()" class="is-success">{{
              acceptText
            }}
          </b-button>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
<script>
import { bootstrap } from "vue-gtag";

export default {
  props: ['acceptText', 'declineText', 'thankYouMessage'],
  data() {
    return {
      consentSet: false,
    };
  },
  methods: {
    decline() {
      window.localStorage.setItem('consent_given', 'false');
      this.consentSet = true;
    },
    async accept() {
      window.localStorage.setItem('consent_given', new Date().toISOString());
      this.consentSet = true;
      await bootstrap();
    },
  },
  mounted() {
    const consent = window.localStorage.getItem('consent_given');
    if (consent === 'false') {
      this.consentSet = true;
    } else if (consent) {
      this.consentSet = true;
    } else if (!consent) {
      this.consentSet = false;
    }
  },
};
</script>
<style>
.consent-block {
  z-index: 99;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
