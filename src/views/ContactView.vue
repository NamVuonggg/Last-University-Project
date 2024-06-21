<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const showPhone = () => {
    return router.push(`/contact/phone`)
}
</script>

<template>

  <div class="h-10rem"></div>
  <p class="txt text-center font-bold text-8xl">My phone number:</p>
  <p class="txt text-center font-bold text-xl"><img src="https://cdn-icons-png.flaticon.com/128/10048/10048325.png"><Button @click="showPhone" class="bg-black-alpha-90 border-none hover:bg-red-600"> Show phone number</Button></p>
  <RouterView />
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Playwrite+NL:wght@100..400&family=Shadows+Into+Light&display=swap');
.txt{
    font-family: "Shadows Into Light";
}

</style>