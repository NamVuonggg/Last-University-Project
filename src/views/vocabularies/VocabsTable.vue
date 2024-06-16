<script setup>
import { useVocabsViewStore } from '@/stores/vocabs-view';
import { useRoute } from 'vue-router';

const route = useRoute();
const store = useVocabsViewStore();

const vocabId = parseInt(route.params.id);

const selectedVocab = store.vocabs.find( vocab = vocab.id === vocabId);

const vocabList = selectedVocab ? selectedVocab.content : [];
</script>

<template>
    <div class="container">
        <DataTable :value="vocabList" stripedRows tableStyle="min-width: 50rem">
            <Column field="word" header="Word"></Column>
            <Column field="mean" header="Meaning"></Column>
        </DataTable>
    </div>
</template>


<style scoped>

</style>