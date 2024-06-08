<script setup>
    import { useHomeStore } from "@/stores/homeview";
    import SideBar from "@/components/SideBarOfSubNavBar.vue";
    const store = useHomeStore();
</script>


<template>
    <div class="card flex justify-content-between px-5 py-2">
        <SideBar/>
        <Button icon="pi pi-bars" @click="store.visible = true" severity="secondary" text rounded aria-label="Bookmark"/>
        <div class="flex gap-4 align-items-center">
            <div class="card flex justify-content-center align-items-center gap-2">
                <span>Today:</span>
                <Calendar v-model="store.date" class="w-8rem"/>
            </div>
            <span>-</span>
            <div class="card flex justify-content-center align-items-center gap-2">
                <span>Deadline:</span>
                <Calendar v-model="store.deadlineDate" />
            </div>
        </div>
    </div>
</template>


<style>

</style>