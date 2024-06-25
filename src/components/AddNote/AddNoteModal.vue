<script setup>
import { useNoteStore } from '@/stores/noteview';
const store = useNoteStore();
</script>

<template>
<div class="overlay" @click="store.closeModal"></div>
<div class="container">
    <div class="newnote-modal">
        <div class="bg-blue-50 flex flex-column card border-round-xl p-6 w-30rem m-auto">
            <div class="flex align-items-center justify-content-between mb-4">
                <span class="font-bold text-2xl">Add new note</span>
                <div class="text-right cursor-pointer" @click="store.closeModal"><i class="pi pi-times" style="color: black"></i></div>
            </div>
            <span class="text-red-500 mb-3 text-center" v-if="store.textEmptyError">Fill all the blanks below before adding</span>
            <label for="title" class="mb-1">Title</label>
            <InputText type="text" v-model="store.noteTitle" />
            <label class="mt-3 mb-1" for="content">Content</label>
            <Textarea v-model="store.noteContent" rows="5" cols="30"/>
            <Button class="mt-5 p-3" label="Add Note" severity="warning" @click="store.addNote"></Button>
        </div>
    </div>
</div>
<div class="h-4rem"></div>
</template>

<style scoped>
    .container {
        padding: 0 20%;
    }

    .newnote-modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 20;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6); 
        z-index: 10;
    }
</style>
