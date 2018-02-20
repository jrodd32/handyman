<template>
  <main>
    <hm-nav></hm-nav>
    
    <div class="container"></div>
    
    <hm-footer></hm-footer>
  </main>
</template>

<script>
  import Nav from './layout/Nav.vue';
  import Footer from './layout/Footer.vue';
  
  export default {
    components: {
      hmNav: Nav,
      hmFooter: Footer
    },
    mounted() {
        console.log('Component mounted.')
    }
  }
</script>
