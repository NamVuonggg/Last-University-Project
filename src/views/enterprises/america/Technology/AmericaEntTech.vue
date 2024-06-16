<script setup>
import { useEntDataStore } from "@/stores/america-ent-data";

const store = useEntDataStore(); 
</script>

<template>
    <div class="h-6rem"></div>
    <div class="container">
        <RouterLink :to="`/country/america/Technology/${data.id}`" v-for="data in store.datas" :key="data.id" style="text-decoration: none; color:inherit;">
            <div class="w-full">
                <Button class="p-4 w-full mb-3 bg-gray-900 hover:bg-red-500 flex align-items-center justify-content-between border-none">
                    <div>{{ data.name }}</div>
                    <i class="pi pi-angle-right ml-2" style="font-size: 1rem;"></i>
                </Button>
            </div>
        </RouterLink>
    </div>
    <ScrollTop />
</template>

<style lang="scss" scoped> 
.container{
    padding: 0 10%;
}
</style>