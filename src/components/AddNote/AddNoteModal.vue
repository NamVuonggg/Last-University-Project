<script setup>
import { useNoteStore } from '@/stores/noteview';
const store = useNoteStore();
</script>


<template>
<div class="container">
    <div class="newnote-modal">
        <div class="flex flex-column card border-1 border-round-xl p-6 w-30rem m-auto">
            <span class="text-red-500 mb-3 text-center" v-if="store.textEmptyError">Fill all the blanks below before adding</span>
            <label for="title" class="mb-1">Title</label>
            <InputText type="text" v-model="store.noteTitle" />
            <label class="mt-4 mb-1" for="content">Content</label>
            <Textarea v-model="store.noteContent" rows="5" cols="30"/>
            <Button class="mt-5 p-3" label="Add Note" @click="store.addNote"></Button>
        </div>
    </div>
</div>
<div class="h-4rem"></div>
</template>


<style scoped>
    .container{
        padding: 0 13rem;
    }

</style>