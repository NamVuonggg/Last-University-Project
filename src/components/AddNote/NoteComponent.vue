<script setup>
import { computed, defineProps } from 'vue';
import { useNoteStore } from '@/stores/noteview';
const store = useNoteStore();

const props = defineProps({
    showImportant: Boolean
})

const notesToShow = computed(() =>{
    return props.showImportant ? store.importantNotes : store.notes
});
</script>

<template>
        <div class="grid mt-4">
            <div class="col-12 md:col-6 xl:col-4" v-for="note in notesToShow" :key="note.id">
                <div class="p-4 bg-yellow-300 w-full border-round-xl flex flex-column gap-6">
                    <div class="upper-content">
                        <div class="flex justify-content-between">
                            <div class="title mb-3 text-xl font-bold">{{ note.title }}</div>
                            <i class="pi pi-times cursor-pointer" style="color: black" @click="store.deleteNote(note.id)"></i>
                        </div>
                        <div class="content mt-5">{{ note.content }}</div>
                    </div>
                    <div class="flex align-items-center justify-content-between">
                        <div class="lower-content text-xs">{{ note.date }}</div>
                        <div class="flex gap-2 align-items-center">
                            <p class="text-xs">Important</p>
                            <InputSwitch v-model="note.important" @update:checked = "store.updateImportant(note.id, $event)"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-10rem"></div>
        <p class="text-center m-auto" v-if="!notesToShow.length" style="opacity: 0.3; font-size: 20px;">There is no note availale yet !</p>
</template>

<style scoped></style>