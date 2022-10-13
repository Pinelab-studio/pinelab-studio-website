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
      <p v-if="readMore">
        <slot name="more"/>
      </p>
      <a @click="readMore = !readMore"> {{ readMore ? 'Toon minder &#9650;' : 'Lees meer' }} </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ['icon', 'title'],
  data() {
    return {
      readMore: false
    }
  }
}

</script>