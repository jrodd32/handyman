<template>
<main>
  <nav class="navbar has-shadow">
    <div class="container">
        <div class="navbar-brand">
            <a href="/" class="navbar-item">Handyman</a>

            <div class="navbar-burger burger" data-target="navMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div class="navbar-menu" id="navMenu">
            <div class="navbar-start"></div>

            <div class="navbar-end">
                
            </div>
        </div>
    </div>
  </nav>
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
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
