<script setup>
import { ref } from "vue";
import AddNoteModal from "@/components/AddNote/AddNoteModal.vue"
import NoteComponent from "@/components/AddNote/NoteComponent.vue"
import { useNoteStore } from '@/stores/noteview';
const store = useNoteStore();
const showImportant = ref(false);
</script>

<template>
    <Toast class="mt-6"/>
    <div class="container">
        <div class="flex align-items-center gap-3">
            <Button @click="store.activeNoteModal" class="mb-5">+ Add task</Button>
            <Button @click="showImportant = !showImportant" class="mb-5 bg-red-500 border-none hover:bg-red-700">{{ showImportant ? 'Show All Notes' : 'Show Important Notes' }}</Button>
        </div>
        <NoteComponent :showImportant = "showImportant"/>
    </div>

    <AddNoteModal v-if="store.modalIsActive"/>

    <div class="h-20rem"></div>
</template>

<style lang="scss" scoped>
    .container{
        padding: 0 15%;
    }
</style>

