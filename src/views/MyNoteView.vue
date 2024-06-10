<script setup>
import AddNoteModal from "@/components/AddNote/AddNoteModal.vue"
import { useNoteStore } from '@/stores/noteview';
const store = useNoteStore();
</script>

<template>
    <NavBar/>
    <SubNavBar/>

    <div class="h-8rem"></div>

    <AddNoteModal/>

    <div class="container">
        <div class="grid">
            <div class="col-12 md:col-6 xl:col-4" v-for="note in store.notes" :key="note.id">
                <div class="card-container p-6 bg-yellow-300 w-full border-round-xl flex flex-column gap-6">
                    <div class="upper-content">
                        <div class="title mb-3 text-xl font-bold">{{ note.title }}</div>
                        <div class="content">{{ note.content }}</div>
                    </div>
                    <div class="flex align-items-center justify-content-between">
                        <div class="lower-content">{{ note.date }}</div>
                        <InputSwitch v-model="store.checked"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="h-20rem"></div>

    <Footer />
</template>

<style lang="scss" scoped>
    .container{
        padding: 0 13rem;
    }
</style>