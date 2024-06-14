<script setup>

</script>

<template>
  <div class="flex justify-content-between">
            <div class="flex gap-3">
                <RouterLink to="/topics" style="text-decoration: none; color: inherit;">
                    <Button class="w-9rem p-3 bg-gray-900 border-none hover:bg-red-600"> Quick Start <i class="pi pi-angle-right ml-2" style="font-size: 1rem"></i></Button>
                </RouterLink>
                <RouterLink to = "/topics/notes">
                    <Button class="w-10rem p-3 bg-white text-gray-900 border-none hover:bg-yellow-400 hover:text-blue-50"> Add a memo <i class="pi pi-angle-right ml-2" style="font-size: 1rem"></i></Button>
                </RouterLink>
            </div>
        </div>
</template>


<style>

</style>