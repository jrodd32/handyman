<template>
<main>
  <hm-nav></hm-nav>
  <div class="container">
      
  </div>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2018 Handyman.</p>
    </div>
  </footer>
</main>
</template>

<script>
  import Nav from './layout/Nav.vue';
  
  export default {
    components: {
      hmNav: Nav
    },
    mounted() {
        console.log('Component mounted.')
    }
  }
</script>
