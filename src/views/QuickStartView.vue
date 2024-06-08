<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <NavBar/>
    <SubNavBar/>

    <div class="h-4rem"></div>

    <div class="container">
        <div class="flex flex-column gap-4 justify-content-between align-items-center">
            <Button class="p-4 w-30rem border-round-xl flex justify-content-between">
                <span>Business Vocabularies</span>
                <i class="pi pi-angle-right" style="font-size: 1rem"></i>
            </Button>
            <Button class="p-4 w-30rem border-round-xl flex justify-content-between">
                <span>Learn More About Enterprises</span>
                <i class="pi pi-angle-right" style="font-size: 1rem"></i>
            </Button>
            <RouterLink to = "/topics/notes" style="text-decoration: none; color: inherit;">
                <Button class="p-4 w-30rem border-round-xl flex justify-content-between">
                    <span>My Notes</span>
                    <i class="pi pi-angle-right" style="font-size: 1rem"></i>
                </Button>
            </RouterLink>
            <Button class="p-4 w-30rem border-round-xl flex justify-content-between">
                <span>My CV</span>
                <i class="pi pi-angle-right" style="font-size: 1rem"></i>
            </Button>
            <Button class="p-4 w-30rem border-round-xl flex justify-content-between">
                <span>My Plans</span>
                <i class="pi pi-angle-right" style="font-size: 1rem"></i>
            </Button>
        </div>
    </div>

    <div class="h-5rem"></div>

    <Footer />
</template>

<style scoped>

.container {
    padding: 0 13rem;
}
</style>
