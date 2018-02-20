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