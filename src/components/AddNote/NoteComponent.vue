<script setup>
import { useNoteStore } from '@/stores/noteview';
const store = useNoteStore();
</script>

<template>
    <p class="text-center mt-5 m-auto" v-if="!store.notes.length" style="opacity: 0.3; font-size: 20px;">There is no note availale yet !</p>
        <div class="grid">
            <div class="col-12 md:col-6 xl:col-4" v-for="note in store.notes" :key="note.id">
                <div class="p-6 bg-yellow-300 w-full border-round-xl flex flex-column gap-6">
                    <div class="upper-content">
                        <div class="flex justify-content-between">
                            <div class="title mb-3 text-xl font-bold">{{ note.title }}</div>
                            <i class="pi pi-times cursor-pointer" style="color: black" @click="store.deleteNote(note.id)"></i>
                        </div>
                        <div class="content mt-5">{{ note.content }}</div>
                    </div>
                    <div class="flex align-items-center justify-content-between">
                        <div class="lower-content">{{ note.date }}</div>
                        <InputSwitch v-model="store.checked"/>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped></style>