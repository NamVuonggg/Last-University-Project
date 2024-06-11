<script setup>
import AddNoteModal from "@/components/AddNote/AddNoteModal.vue"
import NoteComponent from "@/components/AddNote/NoteComponent.vue"
import { useNoteStore } from '@/stores/noteview';
const store = useNoteStore();
</script>

<template>
    <NavBar/>
    <SubNavBar/>

    <div class="h-5rem"></div>
    <div class="container">
        <Button @click="store.activeNoteModal" class="mb-5">+ Add task</Button>
        <NoteComponent />
    </div>

    <AddNoteModal v-if="store.modalIsActive"/>

    <div class="h-20rem"></div>
</template>

<style lang="scss" scoped>
    .container{
        padding: 0 15%;
    }
</style>

