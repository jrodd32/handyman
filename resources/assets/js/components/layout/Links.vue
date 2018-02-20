<template>
  <router-link :to="link.url" class="navbar-item">{{ link.name }}</router-link>
</template>

<script>
  export default {
    props: ['link']
  }
</script>

<style scoped>

</style>