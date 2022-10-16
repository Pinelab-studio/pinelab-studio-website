<template>
  <div>
    <div id="navbar" class="navigation py-4">
      <div class="container">
        <b-navbar
            :active.sync="active"
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
              <a class="navbar-link" @click="active=false" href="/#services">Services</a>
            </li>
            <li class="navbar-item">
              <a class="navbar-link" @click="active=false" href="#cases">Cases</a>
            </li>
            <li class="navbar-item">
              <a class="navbar-link" @click="active=false" href="#about">Over ons</a>
            </li>
            <li class="navbar-item">
              <a class="navbar-link" @click="active=false" href="#pricing">Tarieven</a>
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

    <footer class="footer">
      <div class="container content has-text-centered  pb-6">
        <p>
          Pinelab •
          <a :href="`mailto: ${$context.email}`">{{ $context.email }}</a> •
          <a :href="`tel: ${$context.phone}`">{{ $context.phone }}</a> •
          BTW {{ $context.vat }} •
          KVK {{ $context.coc }} •
          <a :href="$context.github" target="_blank">
            <b-icon
                icon="github"
                size="is-small">
            </b-icon>
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: false
    }
  },
}
</script>
<style>
.footer {
  box-shadow: 0 -1px 2px #a9a9a9;
}
</style>
