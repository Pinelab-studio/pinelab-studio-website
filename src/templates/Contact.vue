<template>
  <Layout>
    <section id="contact" class="banner is-flex">
      <div class="container">

        <div class="block">
          <h1 class="my-4">
            Contact
          </h1>
        </div>
        <p class="mb-6">
          Send us a message and we'll reach out to you as soon as possible.
        </p>

        <div class="columns is-multiline">
          <div class="column is-6-desktop">
            <form id="contact-form" class="contact__form" method="post" action="https://formspree.io/f/xdopwkwl">
              <!-- form message -->
              <div class="columns is-multiline">
                <div class="column is-12">
                  <input name="email" class="input is-normal bordered" type="email" placeholder="Your emailaddress" required>
                </div>
                <div class="column is-12 form-message-bots">
                  <textarea type="text" name="_gotcha" placeholder="Message"/>
                </div>
                <div class="column is-12">
                  <textarea class="textarea bordered" name="real-message" placeholder="Additional message"></textarea>
                </div>
                <div class="column is-12 has-text-right">
                  <button class="button cta is-primary shiny" name="submit" type="submit">Send</button>
                </div>
              </div>
            </form>
          </div>

          <div class="column is-4-desktop">
            <div class="short-info bordered rounded">
              <ul class="list-unstyled">
                <li>
                  <h5>Let's meet</h5>
                  <a :href="$context.calendly">Schedule a call</a>
                </li>
                <li>
                  <h5>Emailaddress</h5>
                  <a :href="`mailto: ${$context.email}`">{{ $context.email }}</a>
                </li>
                <li>
                  <h5>Address</h5>
                  Cornelis Trooststraat 48<br/>
                  8932 BR<br/>
                  Leeuwarden <br/>
                  The Netherlands
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  </Layout>
</template>
<script>

export default {
}
</script>
<style>
</style>