<script setup>
    import { useHomeStore } from "@/stores/homeview";
    import SideBar from "@/components/SideBarOfSubNavBar.vue";
    const store = useHomeStore();
</script>


<template>
    <div class="card flex justify-content-between px-5 py-3 sub-navbar">
        <SideBar/>
        <div class="flex align-items-center gap-7">
            <Button icon="pi pi-bars" @click="store.visible = true" severity="secondary" text rounded aria-label="Bookmark"/>
            <RouterLink to = "/topics" style="text-decoration: none; color: inherit;">
                <span class="cursor-pointer hover:bg-gray-100 p-3 border-round-md">Topics</span>
            </RouterLink>
            <RouterLink to = "/contact" style="text-decoration: none; color: inherit;">
                <span class="cursor-pointer hover:bg-gray-100 p-3 border-round-md">Contact me</span>
            </RouterLink>


        </div>
        <div class="flex gap-4 align-items-center">
            <div class="card flex justify-content-center align-items-center gap-2">
                <span>Today:</span>
                <Calendar v-model="store.date" class="w-8rem"/>
            </div>
            <span>-</span>
            <div class="card flex justify-content-center align-items-center gap-2">
                <span>Deadline:</span>
                <Calendar v-model="store.deadlineDate" class="w-8rem"/>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .sub-navbar{
        border-bottom: 1px solid rgba(171, 167, 167, 0.58);
    }
</style>