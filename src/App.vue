<script setup>
import { RouterView } from 'vue-router';
import HeaderBarVue from '@/components/HeaderBar.vue';
</script>

<template>
  <div class="container">
    <HeaderBarVue/>
    <div class="h-10rem"></div>
    <RouterView/>
    <ScrollTop />
    <div class="h-20rem"></div>
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