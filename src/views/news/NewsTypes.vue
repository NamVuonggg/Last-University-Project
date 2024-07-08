<script setup>
import { useNewsLinkStore } from "@/stores/news-link";

const store = useNewsLinkStore();
</script>

<template>
    <div class="container grid">
        <div class="col-12 md:col-6 xl:col-6" v-for="link in store.links" :key="link.id">
            <a :href="link.link" style="text-decoration: none; color: inherit;">
                <Button class="w-full p-4 flex align-items-center justify-content-between border-2 border-gray-900 text-gray-900 bg-white hover:bg-red-400 hover:text-cyan-50">
                    <div class="flex align-items-center gap-3">
                        <span>
                            {{ link.name }}
                        </span>
                        <img :src="link.img" width="30px"> 
                    </div>
                    <i class="pi pi-angle-right" style="font-size: 1rem"></i>
                </Button>
            </a>  
             
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container{
    padding: 0 20%;
}
</style>