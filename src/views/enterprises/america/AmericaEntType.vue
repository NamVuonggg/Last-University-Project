<script setup>
import { reactive } from "vue";
const types = reactive([

    {
        id: 1,
        type: "Technology",
        image: "https://cdn-icons-png.flaticon.com/128/9626/9626716.png"
    },
    {
        id: 2,
        type: "Food and Beverage",
        image: "https://cdn-icons-png.flaticon.com/128/1037/1037855.png"
    },
    {
        id: 3,
        type: "Financial",
        image: "https://cdn-icons-png.flaticon.com/128/7892/7892621.png"
    },
    {
        id: 4,
        type: "Agriculture",
        image: "https://cdn-icons-png.flaticon.com/128/4284/4284772.png"
    }
]);

</script>


<template>  
    <NavBar/>
    <SubNavBar/>
    <div class="h-8rem"></div>
    <div class="container">
        <RouterLink :to="`/country/america/${type.type}`" v-for="type in types" :key="type.id" style="text-decoration: none; color: inherit">
            <Button class="w-full p-5 flex align-items-center justify-content-between mb-5">
                <div class="flex align-items-center gap-4">
                    <div>{{ type.type }}</div>
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