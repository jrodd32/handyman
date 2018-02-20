<template>
  <nav class="navbar has-shadow">
    <div class="container">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">Handyman</router-link>

            <div class="navbar-burger burger" data-target="navMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div class="navbar-menu" id="navMenu">
          <div class="navbar-start">
            <hm-links v-for="link in links" :link="link" :key="link.name"></hm-links>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                    <span class="icon">
                      <i class="fas fa-question-circle"></i>
                    </span>
                    <span>
                      Ask a question
                    </span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
                    <span class="icon">
                      <i class="fas fa-calculator"></i>
                    </span>
                    <span>Request a quote</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  </nav>
</template>

<script>
  import Links from './Links.vue';

  export default {
    components: {
      hmLinks: Links
    },
    data () {
      return {
        links: [
          {
            url: '/services',
            name: 'Services'
          },
          {
            url: '/testimonials',
            name: 'Testimonials'
          },
          {
            url: '/gallery',
            name: 'Gallery'
          }
        ]
      }
    },
    mounted() {
      console.log('Nav mounted.')
    }
  }
</script>

<style scoped>

</style>