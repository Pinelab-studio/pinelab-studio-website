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
              <a class="navbar-link" href="#services">Services</a>
            </li>
            <li class="navbar-item">
              <a class="navbar-link" href="#about">Over ons</a>
            </li>
            <li class="navbar-item">
              <a class="navbar-link" href="#pricing">Tarieven</a>
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
