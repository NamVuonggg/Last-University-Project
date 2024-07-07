<script setup>
</script>

<template>
    <div class="container">
        <div class="grid">
            <div class="col-12 md:col-6 xl:col-6">
                <RouterLink to="/topics/cv/intern" style="text-decoration: none; color: inherit">
                    <Button class="w-full p-4 border-2 border-gray-900 bg-white text-gray-900 hover:bg-red-400 hover:text-cyan-50 flex justify-content-between align-items-center">
                        <span>
                            CV for internship
                        </span>
                        <img src="https://cdn-icons-png.flaticon.com/128/16608/16608472.png" width="50px">
                    </Button>
                </RouterLink>
            </div>
            <div class="col-12 md:col-6 xl:col-6">
                <Button class="w-full p-4 border-2 border-gray-900 bg-white text-gray-900 hover:bg-red-400 hover:text-cyan-50 flex justify-content-between align-items-center">
                    <span>
                        CV for working request
                    </span>
                    <img src="https://cdn-icons-png.flaticon.com/128/1320/1320909.png" width="50px">
                </Button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container{
    padding: 0 20%;
}
</style>