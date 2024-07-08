<script setup>
import { useRoute } from "vue-router";
import { useEntTechDataStore } from "@/stores/america-ent-tech-data";
const TechStore = useEntTechDataStore();

import { useNoteStore } from '@/stores/noteview';
import AddNoteModal from "@/components/AddNote/AddNoteModal.vue";
const store = useNoteStore();
const route = useRoute();
const data = TechStore.datas.find(d => d.id === parseInt(route.params.id));
store.$subscribe((mutation, state) => {
  localStorage.setItem('notes', JSON.stringify(state.notes))
});

</script>

<template>
    <Toast class="mt-6" />
    <AddNoteModal v-if="store.modalIsActive"/>
    <Button @click="store.activeNoteModal" class="fixed bottom-0 left-0 p-3">Take Note</Button>
    <div class="container m-auto">
        
        <div class="text-center text-7xl font-bold">{{ data.name }}</div>
            <div class="h-4rem"></div>
        <div>
            <img :src="data.companyImg" class="w-full m-auto border-round-xl">
        </div>
            <div class="h-3rem"></div>
        <div class="text-center text-4xl font-bold mb-4">Introduce</div>

        <p class="text-xl">{{ data.companyIntro1 }}</p>
        <p class="text-xl">{{ data.companyIntro2 }}</p>
        <p class="text-xl">{{ data.companyIntro3 }}</p>
        <p class="text-xl">{{ data.companyIntro4 }}</p>
        <p class="text-xl">{{ data.companyIntro4 }}</p>
        <p class="text-xl">{{ data.companyIntro5 }}</p>
        <p class="text-xl">{{ data.companyIntro6 }}</p>
        <p class="text-xl">{{ data.companyIntro7 }}</p>
        <p class="text-xl">{{ data.companyIntro8 }}</p>
        <p class="text-xl">{{ data.companyIntro9 }}</p>
        <p class="text-xl">{{ data.companyIntro10 }}</p>


        <div class="m-auto"> 
            <p class=" text-center text-4xl font-bold mb-5">Company Headquarter</p>
            <img :src="data.companyHQ" class="w-full m-auto border-round-xl mb-7">
        </div>
            
        <div class="text-center text-4xl font-bold mb-5">History</div>
        <div class="text-3xl font-bold mb-4">{{ data.companyHistoryTransation1 }}</div>
        <img :src="data.companyHistoryImg1" class="w-full m-auto border-round-xl">
        <p class="text-xl mt-5">{{ data.companyHistory1 }}</p>
        <p class="text-xl">{{ data.companyHistory12 }}</p>
        <p class="text-xl">{{ data.companyHistory13 }}</p>
        <p class="text-xl">{{ data.companyHistory14 }}</p>
        <p class="text-xl">{{ data.companyHistory15 }}</p>
        <p class="text-xl">{{ data.companyHistory16 }}</p>
        <p class="text-xl">{{ data.companyHistory17 }}</p>
        <p class="text-xl">{{ data.companyHistory18 }}</p>
        <p class="text-xl">{{ data.companyHistory19 }}</p>
        <p class="text-xl">{{ data.companyHistory110 }}</p>
        <p class="text-xl">{{ data.companyHistory111 }}</p>
        <p class="text-xl">{{ data.companyHistory112 }}</p>


        <div class="text-3xl font-bold mb-4">{{ data.companyHistoryTransation2 }}</div>
        <img :src="data.companyHistoryImg2" class="w-full m-auto border-round-xl">
        <p class="text-xl mt-5">{{ data.companyHistory2 }}</p>
        <p class="text-xl">{{ data.companyHistory22 }}</p>
        <p class="text-xl">{{ data.companyHistory23 }}</p>
        <p class="text-xl">{{ data.companyHistory24 }}</p>
        <p class="text-xl">{{ data.companyHistory25 }}</p>
        <p class="text-xl">{{ data.companyHistory26 }}</p>
        <p class="text-xl">{{ data.companyHistory27 }}</p>
        <p class="text-xl">{{ data.companyHistory28 }}</p>
        <p class="text-xl">{{ data.companyHistory29 }}</p>
        <p class="text-xl">{{ data.companyHistory210 }}</p>
        <p class="text-xl">{{ data.companyHistory211 }}</p>
        <p class="text-xl">{{ data.companyHistory212 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyHistoryTransation3 }}</div>
        <img :src="data.companyHistoryImg3" class="w-full m-auto border-round-xl">
        <p class="text-xl mt-5">{{ data.companyHistory3 }}</p>
        <p class="text-xl">{{ data.companyHistory32 }}</p>
        <p class="text-xl">{{ data.companyHistory33 }}</p>
        <p class="text-xl">{{ data.companyHistory34 }}</p>
        <p class="text-xl">{{ data.companyHistory35 }}</p>
        <p class="text-xl">{{ data.companyHistory36 }}</p>
        <p class="text-xl">{{ data.companyHistory37 }}</p>
        <p class="text-xl">{{ data.companyHistory38 }}</p>
        <p class="text-xl">{{ data.companyHistory39 }}</p>
        <p class="text-xl">{{ data.companyHistory310 }}</p>
        <p class="text-xl">{{ data.companyHistory311 }}</p>
        <p class="text-xl">{{ data.companyHistory312 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyHistoryTransation4 }}</div>
        <img :src="data.companyHistoryImg4" class="w-full m-auto border-round-xl">
        <p class="text-xl mt-5">{{ data.companyHistory4 }}</p>
        <p class="text-xl">{{ data.companyHistory42 }}</p>
        <p class="text-xl">{{ data.companyHistory43 }}</p>
        <p class="text-xl">{{ data.companyHistory44 }}</p>
        <p class="text-xl">{{ data.companyHistory45 }}</p>
        <p class="text-xl">{{ data.companyHistory46 }}</p>
        <p class="text-xl">{{ data.companyHistory47 }}</p>
        <p class="text-xl">{{ data.companyHistory48 }}</p>
        <p class="text-xl">{{ data.companyHistory49 }}</p>
        <p class="text-xl">{{ data.companyHistory410 }}</p>
        <p class="text-xl">{{ data.companyHistory411 }}</p>
        <p class="text-xl">{{ data.companyHistory412 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyHistoryTransation5 }}</div>
        <img :src="data.companyHistoryImg5" class="w-full m-auto border-round-xl">
        <p class="text-xl mt-5">{{ data.companyHistory5 }}</p>
        <p class="text-xl">{{ data.companyHistory52 }}</p>
        <p class="text-xl">{{ data.companyHistory53 }}</p>
        <p class="text-xl">{{ data.companyHistory54 }}</p>
        <p class="text-xl">{{ data.companyHistory55 }}</p>
        <p class="text-xl">{{ data.companyHistory56 }}</p>
        <p class="text-xl">{{ data.companyHistory57 }}</p>
        <p class="text-xl">{{ data.companyHistory58 }}</p>
        <p class="text-xl">{{ data.companyHistory59 }}</p>
        <p class="text-xl">{{ data.companyHistory510 }}</p>
        <p class="text-xl">{{ data.companyHistory511 }}</p>
        <p class="text-xl">{{ data.companyHistory512 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyHistoryTransation6 }}</div>
        <img :src="data.companyHistoryImg6" class="w-full m-auto border-round-xl">
        <p class="text-xl mt-5">{{ data.companyHistory6 }}</p>
        <p class="text-xl">{{ data.companyHistory62 }}</p>
        <p class="text-xl">{{ data.companyHistory63 }}</p>
        <p class="text-xl">{{ data.companyHistory64 }}</p>
        <p class="text-xl">{{ data.companyHistory65 }}</p>
        <p class="text-xl">{{ data.companyHistory66 }}</p>
        <p class="text-xl">{{ data.companyHistory67 }}</p>
        <p class="text-xl">{{ data.companyHistory68 }}</p>
        <p class="text-xl">{{ data.companyHistory69 }}</p>
        <p class="text-xl">{{ data.companyHistory610 }}</p>
        <p class="text-xl">{{ data.companyHistory611 }}</p>
        <p class="text-xl">{{ data.companyHistory612 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyHistoryTransation7 }}</div>
        <img :src="data.companyHistoryImg7" class="w-full m-auto border-round-xl">
        <p class="text-xl mt-5">{{ data.companyHistory7 }}</p>
        <p class="text-xl">{{ data.companyHistory72 }}</p>
        <p class="text-xl">{{ data.companyHistory73 }}</p>
        <p class="text-xl">{{ data.companyHistory74 }}</p>
        <p class="text-xl">{{ data.companyHistory75 }}</p>
        <p class="text-xl">{{ data.companyHistory76 }}</p>
        <p class="text-xl">{{ data.companyHistory77 }}</p>
        <p class="text-xl">{{ data.companyHistory78 }}</p>
        <p class="text-xl">{{ data.companyHistory79 }}</p>
        <p class="text-xl">{{ data.companyHistory710 }}</p>
        <p class="text-xl">{{ data.companyHistory711 }}</p>
        <p class="text-xl">{{ data.companyHistory712 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyHistoryTransation8 }}</div>
        <img :src="data.companyHistoryImg8" class="w-full m-auto border-round-xl">
        <p class="text-xl mt-5">{{ data.companyHistory8 }}</p>
        <p class="text-xl">{{ data.companyHistory82 }}</p>
        <p class="text-xl">{{ data.companyHistory83 }}</p>
        <p class="text-xl">{{ data.companyHistory84 }}</p>
        <p class="text-xl">{{ data.companyHistory85 }}</p>
        <p class="text-xl">{{ data.companyHistory86 }}</p>
        <p class="text-xl">{{ data.companyHistory87 }}</p>
        <p class="text-xl">{{ data.companyHistory88 }}</p>
        <p class="text-xl">{{ data.companyHistory89 }}</p>
        <p class="text-xl">{{ data.companyHistory810 }}</p>
        <p class="text-xl">{{ data.companyHistory811 }}</p>
        <p class="text-xl">{{ data.companyHistory812 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyHistoryTransation9 }}</div>
        <img :src="data.companyHistoryImg9" class="w-full m-auto border-round-xl">
        <p class="text-xl mt-5">{{ data.companyHistory9 }}</p>
        <p class="text-xl">{{ data.companyHistory92 }}</p>
        <p class="text-xl">{{ data.companyHistory93 }}</p>
        <p class="text-xl">{{ data.companyHistory94 }}</p>
        <p class="text-xl">{{ data.companyHistory95 }}</p>
        <p class="text-xl">{{ data.companyHistory96 }}</p>
        <p class="text-xl">{{ data.companyHistory97 }}</p>
        <p class="text-xl">{{ data.companyHistory98 }}</p>
        <p class="text-xl">{{ data.companyHistory99 }}</p>
        <p class="text-xl">{{ data.companyHistory910 }}</p>
        <p class="text-xl">{{ data.companyHistory911 }}</p>
        <p class="text-xl">{{ data.companyHistory912 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyHistoryTransation10 }}</div>
        <img :src="data.companyHistoryImg10" class="w-full m-auto border-round-xl">
        <p class="text-xl mt-5">{{ data.companyHistory10 }}</p>
        <p class="text-xl">{{ data.companyHistory101 }}</p>
        <p class="text-xl">{{ data.companyHistory102 }}</p>
        <p class="text-xl">{{ data.companyHistory103 }}</p>
        <p class="text-xl">{{ data.companyHistory104 }}</p>
        <p class="text-xl">{{ data.companyHistory105 }}</p>
        <p class="text-xl">{{ data.companyHistory106 }}</p>
        <p class="text-xl">{{ data.companyHistory107 }}</p>
        <p class="text-xl">{{ data.companyHistory108 }}</p>
        <p class="text-xl">{{ data.companyHistory109 }}</p>
        <p class="text-xl">{{ data.companyHistory1010 }}</p>
        <p class="text-xl">{{ data.companyHistory1011 }}</p>
            
        <div class="m-auto" v-if="data.companyProduct1Name" > 
            <p class=" text-center text-4xl font-bold mb-4">Company Products</p>
            <img :src="data.companyProductOverAllImage" class="w-full m-auto border-round-xl mb-4">

            <div class="text-3xl font-bold mb-4">{{ data.companyProduct1Name }}</div>
            <img :src="data.companyProductImg1" class="w-full m-auto border-round-xl"> 
            <p class="text-xl mt-5">{{ data.companyProduct1Info1 }}</p> 
            <p class="text-xl">{{ data.companyProduct1Info2 }}</p>
            <p class="text-xl">{{ data.companyProduct1Info3 }}</p>
            <p class="text-xl">{{ data.companyProduct1Info4 }}</p>
            <p class="text-xl">{{ data.companyProduct1Info5 }}</p>
            <p class="text-xl">{{ data.companyProduct1Info6 }}</p>
                
            <div class="text-3xl font-bold mb-4">{{ data.companyProduct2Name }}</div>
            <img :src="data.companyProductImg2" class="w-full m-auto border-round-xl"> 
            <p class="text-xl mt-5">{{ data.companyProduct2Info1 }}</p>
            <p class="text-xl">{{ data.companyProduct2Info2 }}</p>
            <p class="text-xl">{{ data.companyProduct2Info3 }}</p>
            <p class="text-xl">{{ data.companyProduct2Info4 }}</p>
            <p class="text-xl">{{ data.companyProduct2Info5 }}</p>
            <p class="text-xl">{{ data.companyProduct2Info6 }}</p> 

            <div class="text-3xl font-bold mb-4">{{ data.companyProduct3Name }}</div>
            <img :src="data.companyProductImg3" class="w-full m-auto border-round-xl"> 
            <p class="text-xl mt-5">{{ data.companyProduct3Info1 }}</p>
            <p class="text-xl">{{ data.companyProduct3Info2 }}</p>
            <p class="text-xl">{{ data.companyProduct3Info3 }}</p>
            <p class="text-xl">{{ data.companyProduct3Info4 }}</p>
            <p class="text-xl">{{ data.companyProduct3Info5 }}</p>
            <p class="text-xl">{{ data.companyProduct3Info6 }}</p>

            <div class="text-3xl font-bold mb-4">{{ data.companyProduct4Name }}</div>
            <img :src="data.companyProductImg4" class="w-full m-auto border-round-xl"> 
            <p class="text-xl mt-5">{{ data.companyProduct4Info1 }}</p>
            <p class="text-xl">{{ data.companyProduct4Info2 }}</p>
            <p class="text-xl">{{ data.companyProduct4Info3 }}</p>
            <p class="text-xl">{{ data.companyProduct4Info4 }}</p>
            <p class="text-xl">{{ data.companyProduct4Info5 }}</p>
            <p class="text-xl">{{ data.companyProduct4Info6 }}</p> 

            <div class="text-3xl font-bold mb-4">{{ data.companyProduct5Name }}</div>
            <img :src="data.companyProductImg5" class="w-full m-auto border-round-xl"> 
            <p class="text-xl mt-5">{{ data.companyProduct5Info1 }}</p>
            <p class="text-xl">{{ data.companyProduct5Info2 }}</p>
            <p class="text-xl">{{ data.companyProduct5Info3 }}</p>
            <p class="text-xl">{{ data.companyProduct5Info4 }}</p>
            <p class="text-xl">{{ data.companyProduct5Info5 }}</p>
            <p class="text-xl">{{ data.companyProduct5Info6 }}</p>

            <div class="text-3xl font-bold mb-4">{{ data.companyProduct6Name }}</div>
            <img :src="data.companyProductImg6" class="w-full m-auto border-round-xl"> 
            <p class="text-xl mt-5">{{ data.companyProduct6Info1 }}</p> 
            <p class="text-xl">{{ data.companyProduct6Info2 }}</p>
            <p class="text-xl">{{ data.companyProduct6Info3 }}</p> 
            <p class="text-xl">{{ data.companyProduct6Info4 }}</p> 
            <p class="text-xl">{{ data.companyProduct6Info5 }}</p> 
            <p class="text-xl">{{ data.companyProduct6Info6 }}</p> 

        </div>

        

        <div class="m-auto" v-if="data.companyMarketingTransation1"> 
            <p class=" text-center text-4xl font-bold mb-4">Company Marketing</p>
            <img :src="data.companyMarketingOverAllImage" class="w-full m-auto border-round-xl mb-4">

            <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation1 }}</div>
            <p class="text-xl">{{ data.companyMarketing1 }}</p>
            <p class="text-xl">{{ data.companyMarketing12 }}</p>
            <p class="text-xl">{{ data.companyMarketing13 }}</p>
            <p class="text-xl">{{ data.companyMarketing14 }}</p>
            <p class="text-xl">{{ data.companyMarketing15 }}</p>
            <p class="text-xl">{{ data.companyMarketing16 }}</p>
            <p class="text-xl">{{ data.companyMarketing17 }}</p>
            <p class="text-xl">{{ data.companyMarketing18 }}</p>
            <p class="text-xl">{{ data.companyMarketing19 }}</p>
            <p class="text-xl">{{ data.companyMarketing110 }}</p>
            <p class="text-xl">{{ data.companyMarketing111 }}</p>
            <p class="text-xl">{{ data.companyMarketing112 }}</p>

            <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation2 }}</div>
            <p class="text-xl">{{ data.companyMarketing2 }}</p>
            <p class="text-xl">{{ data.companyMarketing22 }}</p>
            <p class="text-xl">{{ data.companyMarketing23 }}</p>
            <p class="text-xl">{{ data.companyMarketing24 }}</p>
            <p class="text-xl">{{ data.companyMarketing25 }}</p>
            <p class="text-xl">{{ data.companyMarketing26 }}</p>
            <p class="text-xl">{{ data.companyMarketing27 }}</p>
            <p class="text-xl">{{ data.companyMarketing28 }}</p>
            <p class="text-xl">{{ data.companyMarketing29 }}</p>
            <p class="text-xl">{{ data.companyMarketing210 }}</p>
            <p class="text-xl">{{ data.companyMarketing211 }}</p>
            <p class="text-xl">{{ data.companyMarketing212 }}</p>

            <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation3 }}</div>
            <p class="text-xl">{{ data.companyMarketing3 }}</p>
            <p class="text-xl">{{ data.companyMarketing32 }}</p>
            <p class="text-xl">{{ data.companyMarketing33 }}</p>
            <p class="text-xl">{{ data.companyMarketing34 }}</p>
            <p class="text-xl">{{ data.companyMarketing35 }}</p>
            <p class="text-xl">{{ data.companyMarketing36 }}</p>
            <p class="text-xl">{{ data.companyMarketing37 }}</p>
            <p class="text-xl">{{ data.companyMarketing38 }}</p>
            <p class="text-xl">{{ data.companyMarketing39 }}</p>
            <p class="text-xl">{{ data.companyMarketing310 }}</p>
            <p class="text-xl">{{ data.companyMarketing311 }}</p>
            <p class="text-xl">{{ data.companyMarketing312 }}</p>

            <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation4 }}</div>
            <p class="text-xl">{{ data.companyMarketing4 }}</p>
            <p class="text-xl">{{ data.companyMarketing42 }}</p>
            <p class="text-xl">{{ data.companyMarketing43 }}</p>
            <p class="text-xl">{{ data.companyMarketing44 }}</p>
            <p class="text-xl">{{ data.companyMarketing45 }}</p>
            <p class="text-xl">{{ data.companyMarketing46 }}</p>
            <p class="text-xl">{{ data.companyMarketing47 }}</p>
            <p class="text-xl">{{ data.companyMarketing48 }}</p>
            <p class="text-xl">{{ data.companyMarketing49 }}</p>
            <p class="text-xl">{{ data.companyMarketing410 }}</p>
            <p class="text-xl">{{ data.companyMarketing411 }}</p>
            <p class="text-xl">{{ data.companyMarketing412 }}</p>

            <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation4 }}</div>
            <p class="text-xl">{{ data.companyMarketing4 }}</p>
            <p class="text-xl">{{ data.companyMarketing42 }}</p>
            <p class="text-xl">{{ data.companyMarketing43 }}</p>
            <p class="text-xl">{{ data.companyMarketing44 }}</p>
            <p class="text-xl">{{ data.companyMarketing45 }}</p>
            <p class="text-xl">{{ data.companyMarketing46 }}</p>
            <p class="text-xl">{{ data.companyMarketing47 }}</p>
            <p class="text-xl">{{ data.companyMarketing48 }}</p>
            <p class="text-xl">{{ data.companyMarketing49 }}</p>
            <p class="text-xl">{{ data.companyMarketing410 }}</p>
            <p class="text-xl">{{ data.companyMarketing411 }}</p>
            <p class="text-xl">{{ data.companyMarketing412 }}</p>

            <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation4 }}</div>
            <p class="text-xl">{{ data.companyMarketing4 }}</p>
            <p class="text-xl">{{ data.companyMarketing42 }}</p>
            <p class="text-xl">{{ data.companyMarketing43 }}</p>
            <p class="text-xl">{{ data.companyMarketing44 }}</p>
            <p class="text-xl">{{ data.companyMarketing45 }}</p>
            <p class="text-xl">{{ data.companyMarketing46 }}</p>
            <p class="text-xl">{{ data.companyMarketing47 }}</p>
            <p class="text-xl">{{ data.companyMarketing48 }}</p>
            <p class="text-xl">{{ data.companyMarketing49 }}</p>
            <p class="text-xl">{{ data.companyMarketing410 }}</p>
            <p class="text-xl">{{ data.companyMarketing411 }}</p>
            <p class="text-xl">{{ data.companyMarketing412 }}</p>

            <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation4 }}</div>
            <p class="text-xl">{{ data.companyMarketing4 }}</p>
            <p class="text-xl">{{ data.companyMarketing42 }}</p>
            <p class="text-xl">{{ data.companyMarketing43 }}</p>
            <p class="text-xl">{{ data.companyMarketing44 }}</p>
            <p class="text-xl">{{ data.companyMarketing45 }}</p>
            <p class="text-xl">{{ data.companyMarketing46 }}</p>
            <p class="text-xl">{{ data.companyMarketing47 }}</p>
            <p class="text-xl">{{ data.companyMarketing48 }}</p>
            <p class="text-xl">{{ data.companyMarketing49 }}</p>
            <p class="text-xl">{{ data.companyMarketing410 }}</p>
            <p class="text-xl">{{ data.companyMarketing411 }}</p>
            <p class="text-xl">{{ data.companyMarketing412 }}</p>

            <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation4 }}</div>
            <p class="text-xl">{{ data.companyMarketing4 }}</p>
            <p class="text-xl">{{ data.companyMarketing42 }}</p>
            <p class="text-xl">{{ data.companyMarketing43 }}</p>
            <p class="text-xl">{{ data.companyMarketing44 }}</p>
            <p class="text-xl">{{ data.companyMarketing45 }}</p>
            <p class="text-xl">{{ data.companyMarketing46 }}</p>
            <p class="text-xl">{{ data.companyMarketing47 }}</p>
            <p class="text-xl">{{ data.companyMarketing48 }}</p>
            <p class="text-xl">{{ data.companyMarketing49 }}</p>
            <p class="text-xl">{{ data.companyMarketing410 }}</p>
            <p class="text-xl">{{ data.companyMarketing411 }}</p>
            <p class="text-xl">{{ data.companyMarketing412 }}</p>

            <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation4 }}</div>
            <p class="text-xl">{{ data.companyMarketing4 }}</p>
            <p class="text-xl">{{ data.companyMarketing42 }}</p>
            <p class="text-xl">{{ data.companyMarketing43 }}</p>
            <p class="text-xl">{{ data.companyMarketing44 }}</p>
            <p class="text-xl">{{ data.companyMarketing45 }}</p>
            <p class="text-xl">{{ data.companyMarketing46 }}</p>
            <p class="text-xl">{{ data.companyMarketing47 }}</p>
            <p class="text-xl">{{ data.companyMarketing48 }}</p>
            <p class="text-xl">{{ data.companyMarketing49 }}</p>
            <p class="text-xl">{{ data.companyMarketing410 }}</p>
            <p class="text-xl">{{ data.companyMarketing411 }}</p>
            <p class="text-xl">{{ data.companyMarketing412 }}</p>

            <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation4 }}</div>
            <p class="text-xl">{{ data.companyMarketing4 }}</p>
            <p class="text-xl">{{ data.companyMarketing42 }}</p>
            <p class="text-xl">{{ data.companyMarketing43 }}</p>
            <p class="text-xl">{{ data.companyMarketing44 }}</p>
            <p class="text-xl">{{ data.companyMarketing45 }}</p>
            <p class="text-xl">{{ data.companyMarketing46 }}</p>
            <p class="text-xl">{{ data.companyMarketing47 }}</p>
            <p class="text-xl">{{ data.companyMarketing48 }}</p>
            <p class="text-xl">{{ data.companyMarketing49 }}</p>
            <p class="text-xl">{{ data.companyMarketing410 }}</p>
            <p class="text-xl">{{ data.companyMarketing411 }}</p>
            <p class="text-xl">{{ data.companyMarketing412 }}</p>

            <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation4 }}</div>
            <p class="text-xl">{{ data.companyMarketing4 }}</p>
            <p class="text-xl">{{ data.companyMarketing42 }}</p>
            <p class="text-xl">{{ data.companyMarketing43 }}</p>
            <p class="text-xl">{{ data.companyMarketing44 }}</p>
            <p class="text-xl">{{ data.companyMarketing45 }}</p>
            <p class="text-xl">{{ data.companyMarketing46 }}</p>
            <p class="text-xl">{{ data.companyMarketing47 }}</p>
            <p class="text-xl">{{ data.companyMarketing48 }}</p>
            <p class="text-xl">{{ data.companyMarketing49 }}</p>
            <p class="text-xl">{{ data.companyMarketing410 }}</p>
            <p class="text-xl">{{ data.companyMarketing411 }}</p>
            <p class="text-xl">{{ data.companyMarketing412 }}</p>

            <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation4 }}</div>
            <p class="text-xl">{{ data.companyMarketing4 }}</p>
            <p class="text-xl">{{ data.companyMarketing42 }}</p>
            <p class="text-xl">{{ data.companyMarketing43 }}</p>
            <p class="text-xl">{{ data.companyMarketing44 }}</p>
            <p class="text-xl">{{ data.companyMarketing45 }}</p>
            <p class="text-xl">{{ data.companyMarketing46 }}</p>
            <p class="text-xl">{{ data.companyMarketing47 }}</p>
            <p class="text-xl">{{ data.companyMarketing48 }}</p>
            <p class="text-xl">{{ data.companyMarketing49 }}</p>
            <p class="text-xl">{{ data.companyMarketing410 }}</p>
            <p class="text-xl">{{ data.companyMarketing411 }}</p>
            <p class="text-xl">{{ data.companyMarketing412 }}</p>

            <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation5 }}</div>
            <p class="text-xl">{{ data.companyMarketing5 }}</p>
            <p class="text-xl">{{ data.companyMarketing52 }}</p>
            <p class="text-xl">{{ data.companyMarketing53 }}</p>
            <p class="text-xl">{{ data.companyMarketing54 }}</p>
            <p class="text-xl">{{ data.companyMarketing55 }}</p>
            <p class="text-xl">{{ data.companyMarketing56 }}</p>
            <p class="text-xl">{{ data.companyMarketing57 }}</p>
            <p class="text-xl">{{ data.companyMarketing58 }}</p>
            <p class="text-xl">{{ data.companyMarketing59 }}</p>
            <p class="text-xl">{{ data.companyMarketing510 }}</p>
            <p class="text-xl">{{ data.companyMarketing511 }}</p>
            <p class="text-xl">{{ data.companyMarketing512 }}</p>

            <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation5 }}</div>
            <p class="text-xl">{{ data.companyMarketing5 }}</p>
            <p class="text-xl">{{ data.companyMarketing52 }}</p>
            <p class="text-xl">{{ data.companyMarketing53 }}</p>
            <p class="text-xl">{{ data.companyMarketing54 }}</p>
            <p class="text-xl">{{ data.companyMarketing55 }}</p>
            <p class="text-xl">{{ data.companyMarketing56 }}</p>
            <p class="text-xl">{{ data.companyMarketing57 }}</p>
            <p class="text-xl">{{ data.companyMarketing58 }}</p>
            <p class="text-xl">{{ data.companyMarketing59 }}</p>
            <p class="text-xl">{{ data.companyMarketing510 }}</p>
            <p class="text-xl">{{ data.companyMarketing511 }}</p>
            <p class="text-xl">{{ data.companyMarketing512 }}</p>

            <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation6 }}</div>
            <p class="text-xl">{{ data.companyMarketing6 }}</p>
            <p class="text-xl">{{ data.companyMarketing62 }}</p>
            <p class="text-xl">{{ data.companyMarketing63 }}</p>
            <p class="text-xl">{{ data.companyMarketing64 }}</p>
            <p class="text-xl">{{ data.companyMarketing65 }}</p>
            <p class="text-xl">{{ data.companyMarketing66 }}</p>
            <p class="text-xl">{{ data.companyMarketing67 }}</p>
            <p class="text-xl">{{ data.companyMarketing68 }}</p>
            <p class="text-xl">{{ data.companyMarketing69 }}</p>
            <p class="text-xl">{{ data.companyMarketing610 }}</p>
            <p class="text-xl">{{ data.companyMarketing611 }}</p>
            <p class="text-xl">{{ data.companyMarketing612 }}</p>

            <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation7 }}</div>
            <p class="text-xl">{{ data.companyMarketing7 }}</p>
            <p class="text-xl">{{ data.companyMarketing72 }}</p>
            <p class="text-xl">{{ data.companyMarketing73 }}</p>
            <p class="text-xl">{{ data.companyMarketing74 }}</p>
            <p class="text-xl">{{ data.companyMarketing75 }}</p>
            <p class="text-xl">{{ data.companyMarketing76 }}</p>
            <p class="text-xl">{{ data.companyMarketing77 }}</p>
            <p class="text-xl">{{ data.companyMarketing78 }}</p>
            <p class="text-xl">{{ data.companyMarketing79 }}</p>
            <p class="text-xl">{{ data.companyMarketing710 }}</p>
            <p class="text-xl">{{ data.companyMarketing711 }}</p>
            <p class="text-xl">{{ data.companyMarketing712 }}</p>

            <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation8 }}</div>
            <p class="text-xl">{{ data.companyMarketing8 }}</p>
            <p class="text-xl">{{ data.companyMarketing82 }}</p>
            <p class="text-xl">{{ data.companyMarketing83 }}</p>
            <p class="text-xl">{{ data.companyMarketing84 }}</p>
            <p class="text-xl">{{ data.companyMarketing85 }}</p>
            <p class="text-xl">{{ data.companyMarketing86 }}</p>
            <p class="text-xl">{{ data.companyMarketing87 }}</p>
            <p class="text-xl">{{ data.companyMarketing88 }}</p>
            <p class="text-xl">{{ data.companyMarketing89 }}</p>
            <p class="text-xl">{{ data.companyMarketing810 }}</p>
            <p class="text-xl">{{ data.companyMarketing811 }}</p>
            <p class="text-xl">{{ data.companyMarketing812 }}</p>

            <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation9 }}</div>
            <p class="text-xl">{{ data.companyMarketing9 }}</p>
            <p class="text-xl">{{ data.companyMarketing92 }}</p>
            <p class="text-xl">{{ data.companyMarketing93 }}</p>
            <p class="text-xl">{{ data.companyMarketing94 }}</p>
            <p class="text-xl">{{ data.companyMarketing95 }}</p>
            <p class="text-xl">{{ data.companyMarketing96 }}</p>
            <p class="text-xl">{{ data.companyMarketing97 }}</p>
            <p class="text-xl">{{ data.companyMarketing98 }}</p>
            <p class="text-xl">{{ data.companyMarketing99 }}</p>
            <p class="text-xl">{{ data.companyMarketing910 }}</p>
            <p class="text-xl">{{ data.companyMarketing911 }}</p>
            <p class="text-xl">{{ data.companyMarketing912 }}</p>

            <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation10 }}</div>
            <p class="text-xl">{{ data.companyMarketing10 }}</p>
            <p class="text-xl">{{ data.companyMarketing101 }}</p>
            <p class="text-xl">{{ data.companyMarketing102 }}</p>
            <p class="text-xl">{{ data.companyMarketing103 }}</p>
            <p class="text-xl">{{ data.companyMarketing104 }}</p>
            <p class="text-xl">{{ data.companyMarketing105 }}</p>
            <p class="text-xl">{{ data.companyMarketing106 }}</p>
            <p class="text-xl">{{ data.companyMarketing107 }}</p>
            <p class="text-xl">{{ data.companyMarketing108 }}</p>
            <p class="text-xl">{{ data.companyMarketing109 }}</p>
            <p class="text-xl">{{ data.companyMarketing1010 }}</p>
            <p class="text-xl">{{ data.companyMarketing1011 }}</p>
        </div>


        <div class="m-auto" v-if="data.companyCorporateTransation1"> 
            <p class=" text-center text-4xl font-bold mb-4">Company Corporate affairs</p>
            <img :src="data.companyCorporateOverAllImage" class="w-full m-auto border-round-xl mb-4">

            <div class="text-3xl font-bold mb-4">{{ data.companyCorporateTransation1 }}</div>
        <p class="text-xl">{{ data.companyCorporate1 }}</p>
        <p class="text-xl">{{ data.companyCorporate12 }}</p>
        <p class="text-xl">{{ data.companyCorporate13 }}</p>
        <p class="text-xl">{{ data.companyCorporate14 }}</p>
        <p class="text-xl">{{ data.companyCorporate15 }}</p>
        <p class="text-xl">{{ data.companyCorporate16 }}</p>
        <p class="text-xl">{{ data.companyCorporate17 }}</p>
        <p class="text-xl">{{ data.companyCorporate18 }}</p>
        <p class="text-xl">{{ data.companyCorporate19 }}</p>
        <p class="text-xl">{{ data.companyCorporate110 }}</p>
        <p class="text-xl">{{ data.companyCorporate111 }}</p>
        <p class="text-xl">{{ data.companyCorporate112 }}</p>


        <div class="text-3xl font-bold mb-4">{{ data.companyCorporateTransation2 }}</div>
        <p class="text-xl">{{ data.companyCorporate2 }}</p>
        <p class="text-xl">{{ data.companyCorporate22 }}</p>
        <p class="text-xl">{{ data.companyCorporate23 }}</p>
        <p class="text-xl">{{ data.companyCorporate24 }}</p>
        <p class="text-xl">{{ data.companyCorporate25 }}</p>
        <p class="text-xl">{{ data.companyCorporate26 }}</p>
        <p class="text-xl">{{ data.companyCorporate27 }}</p>
        <p class="text-xl">{{ data.companyCorporate28 }}</p>
        <p class="text-xl">{{ data.companyCorporate29 }}</p>
        <p class="text-xl">{{ data.companyCorporate210 }}</p>
        <p class="text-xl">{{ data.companyCorporate211 }}</p>
        <p class="text-xl">{{ data.companyCorporate212 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyCorporateTransation3 }}</div>
        <p class="text-xl">{{ data.companyCorporate3 }}</p>
        <p class="text-xl">{{ data.companyCorporate32 }}</p>
        <p class="text-xl">{{ data.companyCorporate33 }}</p>
        <p class="text-xl">{{ data.companyCorporate34 }}</p>
        <p class="text-xl">{{ data.companyCorporate35 }}</p>
        <p class="text-xl">{{ data.companyCorporate36 }}</p>
        <p class="text-xl">{{ data.companyCorporate37 }}</p>
        <p class="text-xl">{{ data.companyCorporate38 }}</p>
        <p class="text-xl">{{ data.companyCorporate39 }}</p>
        <p class="text-xl">{{ data.companyCorporate310 }}</p>
        <p class="text-xl">{{ data.companyCorporate311 }}</p>
        <p class="text-xl">{{ data.companyCorporate312 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyCorporateTransation4 }}</div>
        <p class="text-xl">{{ data.companyCorporate4 }}</p>
        <p class="text-xl">{{ data.companyCorporate42 }}</p>
        <p class="text-xl">{{ data.companyCorporate43 }}</p>
        <p class="text-xl">{{ data.companyCorporate44 }}</p>
        <p class="text-xl">{{ data.companyCorporate45 }}</p>
        <p class="text-xl">{{ data.companyCorporate46 }}</p>
        <p class="text-xl">{{ data.companyCorporate47 }}</p>
        <p class="text-xl">{{ data.companyCorporate48 }}</p>
        <p class="text-xl">{{ data.companyCorporate49 }}</p>
        <p class="text-xl">{{ data.companyCorporate410 }}</p>
        <p class="text-xl">{{ data.companyCorporate411 }}</p>
        <p class="text-xl">{{ data.companyCorporate412 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyCorporateTransation5 }}</div>
        <p class="text-xl">{{ data.companyCorporate5 }}</p>
        <p class="text-xl">{{ data.companyCorporate52 }}</p>
        <p class="text-xl">{{ data.companyCorporate53 }}</p>
        <p class="text-xl">{{ data.companyCorporate54 }}</p>
        <p class="text-xl">{{ data.companyCorporate55 }}</p>
        <p class="text-xl">{{ data.companyCorporate56 }}</p>
        <p class="text-xl">{{ data.companyCorporate57 }}</p>
        <p class="text-xl">{{ data.companyCorporate58 }}</p>
        <p class="text-xl">{{ data.companyCorporate59 }}</p>
        <p class="text-xl">{{ data.companyCorporate510 }}</p>
        <p class="text-xl">{{ data.companyCorporate511 }}</p>
        <p class="text-xl">{{ data.companyCorporate512 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyCorporateTransation6 }}</div>
        <p class="text-xl">{{ data.companyCorporate6 }}</p>
        <p class="text-xl">{{ data.companyCorporate62 }}</p>
        <p class="text-xl">{{ data.companyCorporate63 }}</p>
        <p class="text-xl">{{ data.companyCorporate64 }}</p>
        <p class="text-xl">{{ data.companyCorporate65 }}</p>
        <p class="text-xl">{{ data.companyCorporate66 }}</p>
        <p class="text-xl">{{ data.companyCorporate67 }}</p>
        <p class="text-xl">{{ data.companyCorporate68 }}</p>
        <p class="text-xl">{{ data.companyCorporate69 }}</p>
        <p class="text-xl">{{ data.companyCorporate610 }}</p>
        <p class="text-xl">{{ data.companyCorporate611 }}</p>
        <p class="text-xl">{{ data.companyCorporate612 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyCorporateTransation7 }}</div>
        <p class="text-xl">{{ data.companyCorporate7 }}</p>
        <p class="text-xl">{{ data.companyCorporate72 }}</p>
        <p class="text-xl">{{ data.companyCorporate73 }}</p>
        <p class="text-xl">{{ data.companyCorporate74 }}</p>
        <p class="text-xl">{{ data.companyCorporate75 }}</p>
        <p class="text-xl">{{ data.companyCorporate76 }}</p>
        <p class="text-xl">{{ data.companyCorporate77 }}</p>
        <p class="text-xl">{{ data.companyCorporate78 }}</p>
        <p class="text-xl">{{ data.companyCorporate79 }}</p>
        <p class="text-xl">{{ data.companyCorporate710 }}</p>
        <p class="text-xl">{{ data.companyCorporate711 }}</p>
        <p class="text-xl">{{ data.companyCorporate712 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyCorporateTransation8 }}</div>
        <p class="text-xl">{{ data.companyCorporate8 }}</p>
        <p class="text-xl">{{ data.companyCorporate82 }}</p>
        <p class="text-xl">{{ data.companyCorporate83 }}</p>
        <p class="text-xl">{{ data.companyCorporate84 }}</p>
        <p class="text-xl">{{ data.companyCorporate85 }}</p>
        <p class="text-xl">{{ data.companyCorporate86 }}</p>
        <p class="text-xl">{{ data.companyCorporate87 }}</p>
        <p class="text-xl">{{ data.companyCorporate88 }}</p>
        <p class="text-xl">{{ data.companyCorporate89 }}</p>
        <p class="text-xl">{{ data.companyCorporate810 }}</p>
        <p class="text-xl">{{ data.companyCorporate811 }}</p>
        <p class="text-xl">{{ data.companyCorporate812 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyCorporateTransation9 }}</div>
        <p class="text-xl">{{ data.companyCorporate9 }}</p>
        <p class="text-xl">{{ data.companyCorporate92 }}</p>
        <p class="text-xl">{{ data.companyCorporate93 }}</p>
        <p class="text-xl">{{ data.companyCorporate94 }}</p>
        <p class="text-xl">{{ data.companyCorporate95 }}</p>
        <p class="text-xl">{{ data.companyCorporate96 }}</p>
        <p class="text-xl">{{ data.companyCorporate97 }}</p>
        <p class="text-xl">{{ data.companyCorporate98 }}</p>
        <p class="text-xl">{{ data.companyCorporate99 }}</p>
        <p class="text-xl">{{ data.companyCorporate910 }}</p>
        <p class="text-xl">{{ data.companyCorporate911 }}</p>
        <p class="text-xl">{{ data.companyCorporate912 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyCorporateTransation10 }}</div>
        <p class="text-xl">{{ data.companyCorporate10 }}</p>
        <p class="text-xl">{{ data.companyCorporate101 }}</p>
        <p class="text-xl">{{ data.companyCorporate102 }}</p>
        <p class="text-xl">{{ data.companyCorporate103 }}</p>
        <p class="text-xl">{{ data.companyCorporate104 }}</p>
        <p class="text-xl">{{ data.companyCorporate105 }}</p>
        <p class="text-xl">{{ data.companyCorporate106 }}</p>
        <p class="text-xl">{{ data.companyCorporate107 }}</p>
        <p class="text-xl">{{ data.companyCorporate108 }}</p>
        <p class="text-xl">{{ data.companyCorporate109 }}</p>
        <p class="text-xl">{{ data.companyCorporate1010 }}</p>
        <p class="text-xl">{{ data.companyCorporate1011 }}</p>

        </div>

        

        <div class="m-auto"> 
            <p class=" text-center text-4xl font-bold mb-4">Company Finance</p>
            <img :src="data.companyFinanceOverAllImage" class="w-full m-auto border-round-xl mb-4">
            <div class="text-xl mb-4">{{ data.companyFinanceIntro }}</div>
        </div>

        <div class="text-3xl font-bold mb-4">{{ data.companyFinanceTransation1 }}</div>
        <p class="text-xl">{{ data.companyFinance1 }}</p>
        <p class="text-xl">{{ data.companyFinance12 }}</p>
        <p class="text-xl">{{ data.companyFinance13 }}</p>
        <p class="text-xl">{{ data.companyFinance14 }}</p>
        <p class="text-xl">{{ data.companyFinance15 }}</p>
        <p class="text-xl">{{ data.companyFinance16 }}</p>
        <p class="text-xl">{{ data.companyFinance17 }}</p>
        <p class="text-xl">{{ data.companyFinance18 }}</p>
        <p class="text-xl">{{ data.companyFinance19 }}</p>
        <p class="text-xl">{{ data.companyFinance110 }}</p>
        <p class="text-xl">{{ data.companyFinance111 }}</p>
        <p class="text-xl">{{ data.companyFinance112 }}</p>


        <div class="text-3xl font-bold mb-4">{{ data.companyFinanceTransation2 }}</div>
        <p class="text-xl">{{ data.companyFinance2 }}</p>
        <p class="text-xl">{{ data.companyFinance22 }}</p>
        <p class="text-xl">{{ data.companyFinance23 }}</p>
        <p class="text-xl">{{ data.companyFinance24 }}</p>
        <p class="text-xl">{{ data.companyFinance25 }}</p>
        <p class="text-xl">{{ data.companyFinance26 }}</p>
        <p class="text-xl">{{ data.companyFinance27 }}</p>
        <p class="text-xl">{{ data.companyFinance28 }}</p>
        <p class="text-xl">{{ data.companyFinance29 }}</p>
        <p class="text-xl">{{ data.companyFinance210 }}</p>
        <p class="text-xl">{{ data.companyFinance211 }}</p>
        <p class="text-xl">{{ data.companyFinance212 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyFinanceTransation3 }}</div>
        <p class="text-xl">{{ data.companyFinance3 }}</p>
        <p class="text-xl">{{ data.companyFinance32 }}</p>
        <p class="text-xl">{{ data.companyFinance33 }}</p>
        <p class="text-xl">{{ data.companyFinance34 }}</p>
        <p class="text-xl">{{ data.companyFinance35 }}</p>
        <p class="text-xl">{{ data.companyFinance36 }}</p>
        <p class="text-xl">{{ data.companyFinance37 }}</p>
        <p class="text-xl">{{ data.companyFinance38 }}</p>
        <p class="text-xl">{{ data.companyFinance39 }}</p>
        <p class="text-xl">{{ data.companyFinance310 }}</p>
        <p class="text-xl">{{ data.companyFinance311 }}</p>
        <p class="text-xl">{{ data.companyFinance312 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyFinanceTransation4 }}</div>
        <p class="text-xl">{{ data.companyFinance4 }}</p>
        <p class="text-xl">{{ data.companyFinance42 }}</p>
        <p class="text-xl">{{ data.companyFinance43 }}</p>
        <p class="text-xl">{{ data.companyFinance44 }}</p>
        <p class="text-xl">{{ data.companyFinance45 }}</p>
        <p class="text-xl">{{ data.companyFinance46 }}</p>
        <p class="text-xl">{{ data.companyFinance47 }}</p>
        <p class="text-xl">{{ data.companyFinance48 }}</p>
        <p class="text-xl">{{ data.companyFinance49 }}</p>
        <p class="text-xl">{{ data.companyFinance410 }}</p>
        <p class="text-xl">{{ data.companyFinance411 }}</p>
        <p class="text-xl">{{ data.companyFinance412 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyFinanceTransation5 }}</div>
        <p class="text-xl">{{ data.companyFinance5 }}</p>
        <p class="text-xl">{{ data.companyFinance52 }}</p>
        <p class="text-xl">{{ data.companyFinance53 }}</p>
        <p class="text-xl">{{ data.companyFinance54 }}</p>
        <p class="text-xl">{{ data.companyFinance55 }}</p>
        <p class="text-xl">{{ data.companyFinance56 }}</p>
        <p class="text-xl">{{ data.companyFinance57 }}</p>
        <p class="text-xl">{{ data.companyFinance58 }}</p>
        <p class="text-xl">{{ data.companyFinance59 }}</p>
        <p class="text-xl">{{ data.companyFinance510 }}</p>
        <p class="text-xl">{{ data.companyFinance511 }}</p>
        <p class="text-xl">{{ data.companyFinance512 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyFinanceTransation6 }}</div>
        <p class="text-xl">{{ data.companyFinance6 }}</p>
        <p class="text-xl">{{ data.companyFinance62 }}</p>
        <p class="text-xl">{{ data.companyFinance63 }}</p>
        <p class="text-xl">{{ data.companyFinance64 }}</p>
        <p class="text-xl">{{ data.companyFinance65 }}</p>
        <p class="text-xl">{{ data.companyFinance66 }}</p>
        <p class="text-xl">{{ data.companyFinance67 }}</p>
        <p class="text-xl">{{ data.companyFinance68 }}</p>
        <p class="text-xl">{{ data.companyFinance69 }}</p>
        <p class="text-xl">{{ data.companyFinance610 }}</p>
        <p class="text-xl">{{ data.companyFinance611 }}</p>
        <p class="text-xl">{{ data.companyFinance612 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyFinanceTransation7 }}</div>
        <p class="text-xl">{{ data.companyFinance7 }}</p>
        <p class="text-xl">{{ data.companyFinance72 }}</p>
        <p class="text-xl">{{ data.companyFinance73 }}</p>
        <p class="text-xl">{{ data.companyFinance74 }}</p>
        <p class="text-xl">{{ data.companyFinance75 }}</p>
        <p class="text-xl">{{ data.companyFinance76 }}</p>
        <p class="text-xl">{{ data.companyFinance77 }}</p>
        <p class="text-xl">{{ data.companyFinance78 }}</p>
        <p class="text-xl">{{ data.companyFinance79 }}</p>
        <p class="text-xl">{{ data.companyFinance710 }}</p>
        <p class="text-xl">{{ data.companyFinance711 }}</p>
        <p class="text-xl">{{ data.companyFinance712 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyFinanceTransation8 }}</div>
        <p class="text-xl">{{ data.companyFinance8 }}</p>
        <p class="text-xl">{{ data.companyFinance82 }}</p>
        <p class="text-xl">{{ data.companyFinance83 }}</p>
        <p class="text-xl">{{ data.companyFinance84 }}</p>
        <p class="text-xl">{{ data.companyFinance85 }}</p>
        <p class="text-xl">{{ data.companyFinance86 }}</p>
        <p class="text-xl">{{ data.companyFinance87 }}</p>
        <p class="text-xl">{{ data.companyFinance88 }}</p>
        <p class="text-xl">{{ data.companyFinance89 }}</p>
        <p class="text-xl">{{ data.companyFinance810 }}</p>
        <p class="text-xl">{{ data.companyFinance811 }}</p>
        <p class="text-xl">{{ data.companyFinance812 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyFinanceTransation9 }}</div>
        <p class="text-xl">{{ data.companyFinance9 }}</p>
        <p class="text-xl">{{ data.companyFinance92 }}</p>
        <p class="text-xl">{{ data.companyFinance93 }}</p>
        <p class="text-xl">{{ data.companyFinance94 }}</p>
        <p class="text-xl">{{ data.companyFinance95 }}</p>
        <p class="text-xl">{{ data.companyFinance96 }}</p>
        <p class="text-xl">{{ data.companyFinance97 }}</p>
        <p class="text-xl">{{ data.companyFinance98 }}</p>
        <p class="text-xl">{{ data.companyFinance99 }}</p>
        <p class="text-xl">{{ data.companyFinance910 }}</p>
        <p class="text-xl">{{ data.companyFinance911 }}</p>
        <p class="text-xl">{{ data.companyFinance912 }}</p>

        <div class="text-3xl font-bold mb-4">{{ data.companyFinanceTransation10 }}</div>
        <p class="text-xl">{{ data.companyFinance10 }}</p>
        <p class="text-xl">{{ data.companyFinance101 }}</p>
        <p class="text-xl">{{ data.companyFinance102 }}</p>
        <p class="text-xl">{{ data.companyFinance103 }}</p>
        <p class="text-xl">{{ data.companyFinance104 }}</p>
        <p class="text-xl">{{ data.companyFinance105 }}</p>
        <p class="text-xl">{{ data.companyFinance106 }}</p>
        <p class="text-xl">{{ data.companyFinance107 }}</p>
        <p class="text-xl">{{ data.companyFinance108 }}</p>
        <p class="text-xl">{{ data.companyFinance109 }}</p>
        <p class="text-xl">{{ data.companyFinance1010 }}</p>
        <p class="text-xl">{{ data.companyFinance1011 }}</p>
    </div>
</template>

<style lang="scss" scoped>
.container{
    padding: 0 15%;
}

</style>