<template>
  <div class="about-item">
    <div class="icon">
      <b-icon
          :icon="icon"
          size="is-large">
      </b-icon>
    </div>

    <div class="content">
      <h4 class="mt-3 mb-3">{{ title }}</h4>
      <p class="mb-5">
        <slot name="preview"/>
      </p>
      <transition>
        <p v-if="readMore">
          <slot name="more"/>
        </p>
      </transition>
      <a v-if="$slots.more"  @click="click()"> {{ readMore ? 'Show less &#9650;' : 'Read more' }} </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ['icon', 'title'],
  methods: {
    click() {
      this.readMore = !this.readMore;
      const eventName = `Read more ${this.title}`;
      this.logClick(eventName, eventName);
    }
  },
  data() {
    return {
      readMore: false
    }
  }
}
</script>
<style>
.v-enter-active {
  transition: opacity 0.5s ease-out;
}
.v-leave-active {
  transition: opacity 0.2s ease-in;
}

.v-enter,
.v-enter-from,
.v-leave,
.v-leave-to {
  opacity: 0;
}
</style>