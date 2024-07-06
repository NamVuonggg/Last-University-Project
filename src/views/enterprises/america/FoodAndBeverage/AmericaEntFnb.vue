<script setup>
import { useEntFnbDataStore } from "@/stores/america-ent-fnb-data"

const store = useEntFnbDataStore();
</script>

<template>
    <div class="container grid">
        <RouterLink :to="`/country/america/Tech/${data.id}`" class="col-12 md:col-6 xl:col-6" v-for="data in store.datas" :key="data.id" style="text-decoration: none; color:inherit;">
            <div class="w-full">
                <Button class="p-4 w-full bg-white hover:bg-red-400 border-2 text-gray-900 hover:text-cyan-50 border-gray-900 flex align-items-center justify-content-between border-none">
                    <div class="flex align-items-center gap-4">
                        <div class="text-xl">{{ data.name }}</div>
                    </div>
                    <div class="flex align-items-center"> 
                        <img :src="data.companyLogo" width="30px" alt="">
                        <i class="pi pi-angle-right ml-2" style="font-size: 1rem;"></i>
                    </div>
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