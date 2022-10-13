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
  -webkit-box-shadow: 0px 0px 100px 0px rgba(255, 255, 255, 0.2);
  -moz-box-shadow: 0px 0px 100px 0px rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 100px 0px rgba(255, 255, 255, 0.2);
}
</style>