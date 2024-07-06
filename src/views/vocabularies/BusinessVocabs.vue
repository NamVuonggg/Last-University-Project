<script setup>
import { useVocabListStore } from '@/stores/vocabs-list.js';

const store = useVocabListStore();
</script>

<template>
    <div class="container">
        <div>
            <div class="top-txt text-center font-bold text-6xl mb-4">The importance of <span class="text-red-500">business vocabularies</span></div>
            <div class="text-xl text-center">Whether you’re at a networking event, an office team meeting, or trying to close an important deal with a client, you need to handle corporate conversations. Without proper business English vocabulary, you’ll quickly find yourself swimming in the sea of corporate jargon and unfamiliar. <br><br> Becoming fluent in business English and corporate terms will help you handle business conversations with more confidence and make a lasting impression on your boss, coworkers, or clients. </div>
        </div>
        <div class="h-5rem"></div>
        <div class="grid">
            <RouterLink :to="`/topics/vocabs/${vocab.id}`" v-for="vocab in store.vocabs" :key="vocab.id" class="col-12 md:col-6 xl:col-4" style="text-decoration: none; color: inherit;">
                <Button class="w-full p-5 flex align-items-center justify-content-between bg-white border-2 border-gray-900 text-gray-900 hover:bg-red-400 hover:text-cyan-50">
                    <span>{{ vocab.name }}</span>
                    <i class="pi pi-angle-right" style="font-size: 1rem"></i>
                </Button>
            </RouterLink>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Playwrite+NL:wght@100..400&family=Shadows+Into+Light&display=swap');
    .container{
        padding: 0 15%;

        .top-txt{
            font-family: "Shadows Into Light";
        }
    }
</style>