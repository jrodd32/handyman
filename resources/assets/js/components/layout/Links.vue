<template>
  <a :href="link.url" class="navbar-item">{{ link.name }}</a>
</template>

<script>
  export default {
    props: ['link']
  }
</script>

<style scoped>

</style>