<script setup>
import { useRoute } from "vue-router";
import {useVocabsDataStore} from "@/stores/vocabs-data";
const route = useRoute();
const store = useVocabsDataStore();
const data = store.vocabs.find(v => v.id === parseInt(route.params.id));
const contentData = data.content.map(entry => ({
    word: entry.word,
    mean: entry.mean
}));
</script>

<template>
    <div class="h-5rem"></div>
    <div class="container">
        <div class="flex gap-5 align-items-center justify-content-center mb-7">
            <div class="text-center text-3xl font-bold">{{ data.name }}</div>
            <div><img :src= "data.image" width="50px"></div>
        </div>
        <div>
            <DataTable :value="contentData" stripedRows showGridlines tableStyle="min-width: 50rem">
                <Column field="word" header="WORD"></Column>
                <Column field="mean" header="MEANING"></Column>
            </DataTable>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Playwrite+NL:wght@100..400&family=Shadows+Into+Light&display=swap');
    .container{
        padding: 0 15%;

    }
</style>