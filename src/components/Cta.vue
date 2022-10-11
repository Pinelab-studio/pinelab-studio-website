<template>
  <g-link :to="link" class="button cta is-primary shiny">
    <strong><slot/></strong>
  </g-link>
</template>
<script>
export default {
  props: ['link']
}
</script>
<style>
.button.cta:hover {
  background-color: #60d79b;
}
</style>