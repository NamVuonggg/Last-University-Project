<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="container">
    <NavBar />
    <SubNavBar />
    <RouterView/>
    <div class="h-30rem"></div>
    <Footer />
  </div>
</template>

<style lang="scss">
body{
  margin: 0;
}
.container{
    width: 100%;
    margin: 0 auto;
}
</style>