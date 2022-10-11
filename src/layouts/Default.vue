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
          <template #start id="navigation">
            <li class="navbar-item">
              <g-link class="navbar-link" to="/">Services</g-link>
            </li>
            <li class="navbar-item">
              <g-link class="navbar-link" to="/">Over ons</g-link>
            </li>
            <li class="navbar-item">
              <g-link class="navbar-link" to="/">Tarieven</g-link>
            </li>

          </template>

          <template #end>
            <b-navbar-item tag="div">
              <Cta link="/contact/">CONTACT</Cta>
            </b-navbar-item>
          </template>
        </b-navbar>
      </div>
    </div>

    <slot></slot>
  </div>
</template>
<script>
</script>
<style>
</style>
