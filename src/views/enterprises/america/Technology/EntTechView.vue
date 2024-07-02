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

        <div class="text-2xl mb-4">{{ data.companyIntro1 }}</div>
        <div class="text-2xl mb-4">{{ data.companyIntro2 }}</div>
        <div class="text-2xl mb-4">{{ data.companyIntro3 }}</div>
        <div class="text-2xl mb-4">{{ data.companyIntro4 }}</div>
        <div class="text-2xl mb-4">{{ data.companyIntro4 }}</div>
        <div class="text-2xl mb-4">{{ data.companyIntro5 }}</div>
        <div class="text-2xl mb-4">{{ data.companyIntro6 }}</div>
        <div class="text-2xl mb-4">{{ data.companyIntro7 }}</div>
        <div class="text-2xl mb-4">{{ data.companyIntro8 }}</div>
        <div class="text-2xl mb-4">{{ data.companyIntro9 }}</div>
        <div class="text-2xl mb-4">{{ data.companyIntro10 }}</div>


        <div class="m-auto"> 
            <p class=" text-center text-4xl font-bold mb-5">Company Headquarter</p>
            <img :src="data.companyHQ" class="w-full m-auto border-round-xl mb-7">
        </div>
            
        <div class="text-center text-4xl font-bold mb-5">History</div>
        <div class="text-3xl font-bold mb-4">{{ data.companyHistoryTransation1 }}</div>
        <img :src="data.companyHistoryImg1" class="w-full m-auto border-round-xl">
        <div class="text-2xl mb-4 mt-5">{{ data.companyHistory1 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory12 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory13 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory14 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory15 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory16 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory17 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory18 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory19 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory110 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory111 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory112 }}</div>


        <div class="text-3xl font-bold mb-4">{{ data.companyHistoryTransation2 }}</div>
        <img :src="data.companyHistoryImg2" class="w-full m-auto border-round-xl">
        <div class="text-2xl mb-4 mt-5">{{ data.companyHistory2 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory22 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory23 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory24 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory25 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory26 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory27 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory28 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory29 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory210 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory211 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory212 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyHistoryTransation3 }}</div>
        <img :src="data.companyHistoryImg3" class="w-full m-auto border-round-xl">
        <div class="text-2xl mb-4 mt-5">{{ data.companyHistory3 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory32 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory33 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory34 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory35 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory36 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory37 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory38 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory39 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory310 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory311 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory312 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyHistoryTransation4 }}</div>
        <img :src="data.companyHistoryImg4" class="w-full m-auto border-round-xl">
        <div class="text-2xl mb-4 mt-5">{{ data.companyHistory4 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory42 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory43 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory44 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory45 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory46 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory47 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory48 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory49 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory410 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory411 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory412 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyHistoryTransation5 }}</div>
        <img :src="data.companyHistoryImg5" class="w-full m-auto border-round-xl">
        <div class="text-2xl mb-4 mt-5">{{ data.companyHistory5 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory52 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory53 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory54 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory55 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory56 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory57 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory58 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory59 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory510 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory511 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory512 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyHistoryTransation6 }}</div>
        <img :src="data.companyHistoryImg6" class="w-full m-auto border-round-xl">
        <div class="text-2xl mb-4 mt-5">{{ data.companyHistory6 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory62 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory63 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory64 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory65 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory66 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory67 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory68 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory69 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory610 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory611 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory612 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyHistoryTransation7 }}</div>
        <img :src="data.companyHistoryImg7" class="w-full m-auto border-round-xl">
        <div class="text-2xl mb-4 mt-5">{{ data.companyHistory7 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory72 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory73 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory74 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory75 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory76 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory77 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory78 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory79 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory710 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory711 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory712 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyHistoryTransation8 }}</div>
        <img :src="data.companyHistoryImg8" class="w-full m-auto border-round-xl">
        <div class="text-2xl mb-4 mt-5">{{ data.companyHistory8 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory82 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory83 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory84 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory85 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory86 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory87 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory88 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory89 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory810 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory811 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory812 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyHistoryTransation9 }}</div>
        <img :src="data.companyHistoryImg9" class="w-full m-auto border-round-xl">
        <div class="text-2xl mb-4 mt-5">{{ data.companyHistory9 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory92 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory93 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory94 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory95 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory96 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory97 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory98 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory99 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory910 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory911 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory912 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyHistoryTransation10 }}</div>
        <img :src="data.companyHistoryImg10" class="w-full m-auto border-round-xl">
        <div class="text-2xl mb-4 mt-5">{{ data.companyHistory10 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory101 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory102 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory103 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory104 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory105 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory106 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory107 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory108 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory109 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory1010 }}</div>
        <div class="text-2xl mb-4">{{ data.companyHistory1011 }}</div>
            
        <div class="m-auto"> 
            <p class=" text-center text-4xl font-bold mb-4">Company Products</p>
            <img :src="data.companyProductOverAllImage" class="w-full m-auto border-round-xl mb-4">
            <div class="text-2xl mb-4">{{ data.companyProductIntro }}</div>
        </div>

        <div class="text-3xl font-bold mb-4">{{ data.companyProduct1Name }}</div>
        <img :src="data.companyProductImg1" class="w-full m-auto border-round-xl"> 
        <div class="text-2xl mb-4 mt-5">{{ data.companyProduct1Info1 }}</div> 
        <div class="text-2xl mb-4">{{ data.companyProduct1Info2 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct1Info3 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct1Info4 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct1Info5 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct1Info6 }}</div>
              
        <div class="text-3xl font-bold mb-4">{{ data.companyProduct2Name }}</div>
        <img :src="data.companyProductImg2" class="w-full m-auto border-round-xl"> 
        <div class="text-2xl mb-4 mt-5">{{ data.companyProduct2Info1 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct2Info2 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct2Info3 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct2Info4 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct2Info5 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct2Info6 }}</div> 

        <div class="text-3xl font-bold mb-4">{{ data.companyProduct3Name }}</div>
        <img :src="data.companyProductImg3" class="w-full m-auto border-round-xl"> 
        <div class="text-2xl mb-4 mt-5">{{ data.companyProduct3Info1 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct3Info2 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct3Info3 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct3Info4 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct3Info5 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct3Info6 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyProduct4Name }}</div>
        <img :src="data.companyProductImg4" class="w-full m-auto border-round-xl"> 
        <div class="text-2xl mb-4 mt-5">{{ data.companyProduct4Info1 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct4Info2 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct4Info3 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct4Info4 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct4Info5 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct4Info6 }}</div> 

        <div class="text-3xl font-bold mb-4">{{ data.companyProduct5Name }}</div>
        <img :src="data.companyProductImg5" class="w-full m-auto border-round-xl"> 
        <div class="text-2xl mb-4 mt-5">{{ data.companyProduct5Info1 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct5Info2 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct5Info3 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct5Info4 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct5Info5 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct5Info6 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyProduct6Name }}</div>
        <img :src="data.companyProductImg6" class="w-full m-auto border-round-xl"> 
        <div class="text-2xl mb-4 mt-5">{{ data.companyProduct6Info1 }}</div> 
        <div class="text-2xl mb-4">{{ data.companyProduct6Info2 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct6Info3 }}</div> 
        <div class="text-2xl mb-4">{{ data.companyProduct6Info4 }}</div> 
        <div class="text-2xl mb-4">{{ data.companyProduct6Info5 }}</div> 
        <div class="text-2xl mb-4">{{ data.companyProduct6Info6 }}</div> 

        <div class="text-3xl font-bold mb-4">{{ data.companyProduct7Name }}</div>
        <img :src="data.companyProductImg7" class="w-full m-auto border-round-xl"> 
        <div class="text-2xl mb-4 mt-5">{{ data.companyProduct7Info1 }}</div> 
        <div class="text-2xl mb-4">{{ data.companyProduct7Info2 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct7Info3 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct7Info4 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct7Info5 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct7Info6 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyProduct8Name }}</div>
        <img :src="data.companyProductImg8" class="w-full m-auto border-round-xl"> 
        <div class="text-2xl mb-4 mt-5">{{ data.companyProduct8Info1 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct8Info2 }}</div> 
        <div class="text-2xl mb-4">{{ data.companyProduct8Info3 }}</div> 
        <div class="text-2xl mb-4">{{ data.companyProduct8Info4 }}</div> 
        <div class="text-2xl mb-4">{{ data.companyProduct8Info5 }}</div> 
        <div class="text-2xl mb-4">{{ data.companyProduct8Info6 }}</div>  

        <div class="text-3xl font-bold mb-4">{{ data.companyProduct9Name }}</div>
        <img :src="data.companyProductImg9" class="w-full m-auto border-round-xl"> 
        <div class="text-2xl mb-4 mt-5">{{ data.companyProduct9Info1 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct9Info2 }}</div> 
        <div class="text-2xl mb-4">{{ data.companyProduct9Info3 }}</div> 
        <div class="text-2xl mb-4">{{ data.companyProduct9Info4 }}</div> 
        <div class="text-2xl mb-4">{{ data.companyProduct9Info5 }}</div> 
        <div class="text-2xl mb-4">{{ data.companyProduct9Info6 }}</div> 

        <div class="text-3xl font-bold mb-4">{{ data.companyProduct10Name }}</div>
        <img :src="data.companyProductImg10" class="w-full m-auto border-round-xl"> 
        <div class="text-2xl mb-4 mt-5">{{ data.companyProduct10Info1 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct10Info2 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct10Info3 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct10Info4 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct10Info5 }}</div>
        <div class="text-2xl mb-4">{{ data.companyProduct10Info6 }}</div> 

        <div class="m-auto"> 
            <p class=" text-center text-4xl font-bold mb-4">Company Marketing</p>
            <img :src="data.companyMarketingOverAllImage" class="w-full m-auto border-round-xl mb-4">
            <div class="text-2xl mb-4">{{ data.companyMarketingIntro }}</div>
        </div>

        <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation1 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing1 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing12 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing13 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing14 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing15 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing16 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing17 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing18 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing19 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing110 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing111 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing112 }}</div>


        <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation2 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing2 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing22 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing23 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing24 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing25 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing26 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing27 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing28 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing29 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing210 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing211 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing212 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation3 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing3 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing32 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing33 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing34 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing35 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing36 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing37 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing38 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing39 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing310 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing311 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing312 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation4 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing4 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing42 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing43 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing44 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing45 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing46 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing47 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing48 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing49 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing410 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing411 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing412 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation5 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing5 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing52 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing53 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing54 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing55 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing56 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing57 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing58 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing59 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing510 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing511 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing512 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation6 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing6 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing62 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing63 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing64 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing65 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing66 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing67 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing68 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing69 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing610 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing611 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing612 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation7 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing7 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing72 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing73 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing74 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing75 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing76 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing77 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing78 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing79 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing710 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing711 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing712 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation8 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing8 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing82 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing83 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing84 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing85 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing86 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing87 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing88 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing89 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing810 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing811 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing812 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation9 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing9 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing92 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing93 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing94 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing95 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing96 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing97 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing98 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing99 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing910 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing911 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing912 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyMarketingTransation10 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing10 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing101 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing102 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing103 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing104 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing105 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing106 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing107 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing108 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing109 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing1010 }}</div>
        <div class="text-2xl mb-4">{{ data.companyMarketing1011 }}</div>

        <div class="m-auto"> 
            <p class=" text-center text-4xl font-bold mb-4">Company Corporate affairs</p>
            <img :src="data.companyCorporateOverAllImage" class="w-full m-auto border-round-xl mb-4">
            <div class="text-2xl mb-4">{{ data.companyCorporateIntro }}</div>
        </div>

        <div class="text-3xl font-bold mb-4">{{ data.companyCorporateTransation1 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate1 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate12 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate13 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate14 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate15 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate16 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate17 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate18 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate19 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate110 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate111 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate112 }}</div>


        <div class="text-3xl font-bold mb-4">{{ data.companyCorporateTransation2 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate2 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate22 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate23 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate24 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate25 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate26 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate27 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate28 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate29 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate210 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate211 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate212 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyCorporateTransation3 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate3 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate32 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate33 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate34 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate35 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate36 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate37 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate38 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate39 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate310 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate311 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate312 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyCorporateTransation4 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate4 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate42 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate43 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate44 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate45 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate46 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate47 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate48 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate49 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate410 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate411 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate412 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyCorporateTransation5 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate5 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate52 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate53 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate54 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate55 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate56 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate57 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate58 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate59 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate510 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate511 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate512 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyCorporateTransation6 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate6 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate62 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate63 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate64 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate65 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate66 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate67 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate68 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate69 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate610 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate611 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate612 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyCorporateTransation7 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate7 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate72 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate73 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate74 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate75 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate76 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate77 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate78 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate79 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate710 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate711 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate712 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyCorporateTransation8 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate8 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate82 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate83 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate84 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate85 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate86 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate87 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate88 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate89 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate810 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate811 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate812 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyCorporateTransation9 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate9 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate92 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate93 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate94 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate95 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate96 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate97 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate98 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate99 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate910 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate911 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate912 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyCorporateTransation10 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate10 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate101 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate102 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate103 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate104 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate105 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate106 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate107 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate108 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate109 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate1010 }}</div>
        <div class="text-2xl mb-4">{{ data.companyCorporate1011 }}</div>

        <div class="m-auto"> 
            <p class=" text-center text-4xl font-bold mb-4">Company Finance</p>
            <img :src="data.companyFinanceOverAllImage" class="w-full m-auto border-round-xl mb-4">
            <div class="text-2xl mb-4">{{ data.companyFinanceIntro }}</div>
        </div>

        <div class="text-3xl font-bold mb-4">{{ data.companyFinanceTransation1 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance1 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance12 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance13 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance14 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance15 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance16 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance17 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance18 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance19 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance110 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance111 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance112 }}</div>


        <div class="text-3xl font-bold mb-4">{{ data.companyFinanceTransation2 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance2 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance22 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance23 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance24 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance25 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance26 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance27 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance28 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance29 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance210 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance211 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance212 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyFinanceTransation3 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance3 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance32 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance33 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance34 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance35 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance36 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance37 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance38 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance39 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance310 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance311 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance312 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyFinanceTransation4 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance4 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance42 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance43 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance44 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance45 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance46 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance47 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance48 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance49 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance410 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance411 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance412 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyFinanceTransation5 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance5 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance52 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance53 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance54 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance55 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance56 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance57 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance58 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance59 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance510 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance511 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance512 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyFinanceTransation6 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance6 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance62 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance63 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance64 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance65 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance66 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance67 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance68 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance69 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance610 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance611 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance612 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyFinanceTransation7 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance7 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance72 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance73 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance74 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance75 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance76 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance77 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance78 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance79 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance710 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance711 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance712 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyFinanceTransation8 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance8 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance82 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance83 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance84 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance85 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance86 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance87 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance88 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance89 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance810 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance811 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance812 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyFinanceTransation9 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance9 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance92 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance93 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance94 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance95 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance96 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance97 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance98 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance99 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance910 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance911 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance912 }}</div>

        <div class="text-3xl font-bold mb-4">{{ data.companyFinanceTransation10 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance10 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance101 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance102 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance103 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance104 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance105 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance106 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance107 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance108 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance109 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance1010 }}</div>
        <div class="text-2xl mb-4">{{ data.companyFinance1011 }}</div>
        
    <ScrollTop />
    </div>
</template>

<style lang="scss" scoped>
.container{
    padding: 0 15%;
}

</style>