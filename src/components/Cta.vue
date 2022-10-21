<template>
  <div>
    <b-modal v-model="isFormOpen">
      <div class="card rounded bordered p-4">
        <div class="columns is-multiline is-centered has-text-left">
          <div class="column is-8-desktop">
            <h2> Contact</h2>
            <p v-if="!formDisplayMessage">Laat je emailadres achter en we nemen zo snel mogelijk contact met je op!</p>
            <p v-else>{{ formDisplayMessage }}</p>
          </div>
          <div class="column is-8-desktop">
            <form id="contact-form" class="contact__form" method="post" action="https://formspree.io/f/xdopwkwl">
              <!-- form message -->
              <div class="columns is-multiline">
                <div class="column is-12">
                  <input name="email" class="input is-normal bordered" type="text" placeholder="Je emailadres">
                </div>
                <div class="column is-12">
                  <textarea class="textarea  bordered" name="message" :value="formMessage"
                            style="display:none"></textarea>
                  <input type="text" name="_gotcha" style="display:none"/>
                </div>
                <div class="column is-12 has-text-right">
                  <button class="button cta is-primary shiny" name="submit" type="submit">Verstuur</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </b-modal>
    <template v-if="formMessage">
      <a @click="click()" class="button cta is-primary shiny">
        <strong>
          <slot/>
        </strong>
      </a>
    </template>
    <template v-else>
      <g-link :to="link" class="button cta is-primary shiny">
        <strong>
          <slot/>
        </strong>
      </g-link>
    </template>
  </div>
</template>
<script>
export default {
  props: ['link', 'formMessage', 'clickEventName', 'formDisplayMessage'],
  methods: {
    click() {
      this.isFormOpen = true;
      this.logClick(this.clickEventName, this.clickEventName);
    }
  },
  data() {
    return {
      isFormOpen: false
    }
  }
}
</script>
<style>
.button.cta:hover {
  background-color: #60d79b;
  -webkit-box-shadow: 0px 0px 100px 0px rgba(255, 255, 255, 0.2);
  -moz-box-shadow: 0px 0px 100px 0px rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 100px 0px rgba(255, 255, 255, 0.2);
}
</style>