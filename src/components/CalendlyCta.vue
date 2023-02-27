<template>
  <div>
      <a :href="$context.calendly" target="_blank" class="button cta is-primary shiny">
        <strong>
          <slot/>
        </strong>
      </a>
  </div>
</template>
<style>
.button.cta:hover {
  background-color: #60d79b;
  -webkit-box-shadow: 0px 0px 100px 0px rgba(255, 255, 255, 0.2);
  -moz-box-shadow: 0px 0px 100px 0px rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 100px 0px rgba(255, 255, 255, 0.2);
}
</style>