<script setup>
import { useAmericaEntTypeStore } from "@/stores/america-ent-type"

const store = useAmericaEntTypeStore();
</script>


<template>  
    <div class="h-8rem"></div>
    <div class="container">
        <RouterLink :to="`/country/america/${type.type}`" v-for="type in store.types" :key="type.id" style="text-decoration: none; color: inherit">
            <Button class="w-full p-5 flex align-items-center justify-content-between mb-5 bg-white border-2 border-gray-900 text-gray-900 hover:bg-red-400 hover:text-cyan-50">
                <div class="flex align-items-center gap-4">
                    <div>{{ type.name }}</div>
                    <img :src="type.image" width="40px" alt="">
                </div>
                <i class="pi pi-angle-right ml-2" style="font-size: 1rem"></i>
            </Button>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped> 
.container{
    padding: 0 13%;
}
</style>