<script setup>
import { useEntDataStore } from "@/stores/america-ent-data";

const store = useEntDataStore(); 
</script>

<template>
    <NavBar/>
    <SubNavBar/>
    <div class="h-6rem"></div>
    <div class="container">
        <RouterLink :to="`/country/america/${data.id}`" v-for="data in store.datas" :key="data.id">
            <div class="w-full">
                <Button class="p-4 w-full mb-3">{{ data.name }}</Button>
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