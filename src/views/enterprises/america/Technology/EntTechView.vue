<script setup>
import { useRoute } from "vue-router";
import { useEntDataStore } from "@/stores/america-ent-data";
const store = useEntDataStore();

import { useNoteStore } from '@/stores/noteview';
import AddNoteModal from "@/components/AddNote/AddNoteModal.vue";
const notestore = useNoteStore();
const route = useRoute();
const data = store.datas.find(d => d.id === parseInt(route.params.id));
</script>

<template>
    <NavBar/>
    <SubNavBar/>
    <div class="h-5rem"></div>
    <Toast />
    <AddNoteModal v-if="notestore.modalIsActive"/>
    <Button @click="notestore.activeNoteModal" class="fixed bottom-0 left-0 p-3">Take Note</Button>
    <div class="container m-auto">
        
        <div class="text-center text-6xl font-bold">{{ data.name }}</div>
            <div class="h-4rem"></div>
        <div>
            <img :src="data.companyImg" class="w-full m-auto border-round-xl">
        </div>
            <div class="h-3rem"></div>
        <div class="text-center text-4xl font-bold mb-4">Introduce</div>
        <div class="text-2xl">{{ data.companyIntro }}</div>
            <div class="h-2rem"></div>
        <div class="text-2xl">{{ data.companyIntro2 }}</div>
            <div class="h-2rem"></div>
        <div class="m-auto"> 
            <p class=" text-center text-4xl font-bold mb-4">Company Headquarter</p>
            <img :src="data.companyHQ" class="w-full m-auto border-round-xl">
        </div>
            <div class="h-2rem"></div>
        <div class="text-center text-4xl font-bold mb-4">History</div>
        <div class="text-2xl">{{ data.companyHistory }}</div>
            <div class="h-2rem"></div>
        <div class="m-auto"> 
            <p class=" text-center text-4xl font-bold mb-4">Company Products</p>
            <img :src="data.companyProductImg" class="w-full m-auto border-round-xl">
            <div class="h-2rem"></div>
            <div class="text-2xl">{{ data.companyProduct1 }}</div>
        </div>
            <div class="h-2rem"></div>
        <div class="m-auto"> 
            <p class=" text-center text-4xl font-bold mb-4">{{ data.companyProduct2name }}</p>
            <img :src="data.companyProduct2Img" class="w-full m-auto border-round-xl">
            <div class="h-2rem"></div>
            <div class="text-2xl">{{ data.companyProduct2 }}</div>
        </div>
            <div class="h-2rem"></div>
        <div class="m-auto"> 
            <p class=" text-center text-4xl font-bold mb-4">{{ data.companyProduct3name }}</p>
            <img :src="data.companyProduct3Img" class="w-full m-auto border-round-xl">
            <div class="h-2rem"></div>
            <div class="text-2xl">{{ data.companyProduct3 }}</div>
        </div>
            <div class="h-2rem"></div>
        <div class="m-auto"> 
            <p class=" text-center text-4xl font-bold mb-4">{{ data.companyProduct4name }}</p>
            <img :src="data.companyProduct4Img" class="w-full m-auto border-round-xl">
            <div class="h-2rem"></div>
            <div class="text-2xl">{{ data.companyProduct4 }}</div>
        </div>
            <div class="h-2rem"></div>
        <div class="m-auto"> 
            <p class=" text-center text-4xl font-bold mb-4">{{ data.companyProduct5name }}</p>
            <img :src="data.companyProduct5Img" class="w-full m-auto border-round-xl">
            <div class="h-2rem"></div>
            <div class="text-2xl">{{ data.companyProduct5 }}</div>
        </div>
        <div class="h-2rem"></div>
        <div class="m-auto"> 
            <p class=" text-center text-4xl font-bold mb-4">{{ data.companyMarketingName }}</p>
            <img :src="data.companyMarketingImg" class="w-full m-auto border-round-xl">
            <div class="h-2rem"></div>
            <div class="text-2xl">{{ data.companyMarketing }}</div>
        </div>
        
    <ScrollTop />
    </div>
    <div class="h-8rem"></div>
    <Footer />
</template>

<style lang="scss" scoped>
.container{
    padding: 0 13%;
}

</style>