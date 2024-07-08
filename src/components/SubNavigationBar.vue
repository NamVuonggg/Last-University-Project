<script setup>
import { useHomeStore } from "@/stores/homeview";
import SideBar from "@/components/SideBarOfSubNavBar.vue";
const store = useHomeStore();
store.$subscribe((mutation, state) => {
  localStorage.setItem('deadlineDate', JSON.stringify(state.deadlineDate))
});
</script>


<template>
    <div class="card flex justify-content-between px-5 py-3 sub-navbar bg-gray-800">
        <SideBar/>
        <div class="flex align-items-center gap-7">
            <Button icon="pi pi-bars" @click="store.visible = true" severity="secondary" text rounded aria-label="Bookmark"/>
            <RouterLink to = "/topics" style="text-decoration: none; color: inherit;">
                <span class="cursor-pointer hover:bg-white p-3 border-round-xl text-cyan-50 hover:text-gray-900">Topics</span>
            </RouterLink>
            <RouterLink to = "/contact" style="text-decoration: none; color: inherit;">
                <span class="cursor-pointer hover:bg-white p-3 border-round-xl text-cyan-50 hover:text-gray-900">Contact me</span>
            </RouterLink>


        </div>
        <div class="flex gap-4 align-items-center">
            <div class="card flex justify-content-center align-items-center gap-2 text-cyan-50">
                <span>Today:</span>
                <Calendar v-model="store.date" class="w-8rem"/>
            </div>
            <span class="text-cyan-50">-</span>
            <div class="card flex justify-content-center align-items-center gap-2 text-cyan-50">
                <span>Deadline:</span>
                <Calendar v-model="store.deadlineDate" class="w-8rem"/>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
</style>