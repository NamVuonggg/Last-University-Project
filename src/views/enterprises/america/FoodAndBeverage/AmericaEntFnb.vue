<script setup>
import { useEntFnbDataStore } from "@/stores/america-ent-fnb-data"

const store = useEntFnbDataStore();
</script>

<template>
    <div class="h-6rem"></div>
    <div class="container">
        <RouterLink :to="`/country/america/Tech/${data.id}`" v-for="data in store.datas" :key="data.id" style="text-decoration: none; color:inherit;">
            <div class="w-full">
                <Button class="p-4 w-full mb-3 bg-white hover:bg-red-400 border-2 text-gray-900 hover:text-cyan-50 border-gray-900 flex align-items-center justify-content-between border-none">
                    <div class="flex align-items-center gap-4">
                        <div class="text-xl font-bold">{{ data.name }}</div>
                    </div>
                    <img :src="data.companyLogo" width="30px" alt="">
                    <!-- <i class="pi pi-angle-right ml-2" style="font-size: 1rem;"></i> -->
                </Button>
            </div>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped> 
.container{
    padding: 0 10%;
}
</style>