<script setup>
import { ref } from "vue";
import AddNoteModal from "@/components/AddNote/AddNoteModal.vue"
import NoteComponent from "@/components/AddNote/NoteComponent.vue"
import { useNoteStore } from '@/stores/noteview';
const store = useNoteStore();
const showImportant = ref(false);
store.$subscribe((mutation, state) => {
  localStorage.setItem('notes', JSON.stringify(state.notes))
});

</script>

<template>
    <Toast class="mt-6"/>
    <div class="container">
        <div class="flex align-items-center gap-3">
            <Button @click="store.activeNoteModal" class="p-3 border-2 border-gray-900 bg-white text-gray-900 hover:bg-red-400 hover:text-cyan-50 ">+ Add task</Button>
            <Button @click="showImportant = !showImportant" class="p-3 border-2 border-gray-900 bg-teal-600 border-none hover:bg-orange-400 hover:text-gray-900">{{ showImportant ? 'Show All Notes' : 'Show Important Notes' }}</Button>
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

