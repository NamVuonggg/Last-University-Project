<script setup>
</script>

<template>
        <div class="container">
            <div class="grid h-full m-auto align-items-center">
                <div class="col-12 md:col-6 xl:col-4">
                    <RouterLink to = "/topics/vocabs" style="text-decoration: none; color: inherit;">
                        <Button class="p-4 w-full border-round-xl flex justify-content-between bg-white border-2 border-gray-900 text-gray-900 hover:bg-red-400 hover:text-cyan-50">
                            <div class="flex align-items-center">
                                <img src="https://cdn-icons-png.flaticon.com/128/4927/4927915.png" width="45px" alt="">
                                <span class="ml-5 font-bold">Business Vocabularies</span>
                            </div>
                            <i class="pi pi-angle-right" style="font-size: 1rem"></i>
                        </Button>
                    </RouterLink>
                </div>
                <div class="col-12 md:col-6 xl:col-4">
                    <RouterLink to = "/country" style="text-decoration: none; color: inherit;">
                        <Button class="p-4 w-full border-round-xl flex justify-content-between bg-white border-2 border-gray-900 text-gray-900 hover:bg-red-400 hover:text-cyan-50">
                            <div class="flex align-items-center">
                                <img src="https://cdn-icons-png.flaticon.com/128/3328/3328269.png" width="45px" alt="">
                                <span class="ml-5 font-bold">Learn About Enterprises</span>
                            </div>
                            <i class="pi pi-angle-right" style="font-size: 1rem"></i>
                        </Button>
                    </RouterLink>
                </div>
                <div class="col-12 md:col-6 xl:col-4">
                    <RouterLink to="topics/notes" style="text-decoration: none; color: inherit;">
                        <Button class="p-4 w-full border-round-xl flex justify-content-between bg-white border-2 border-gray-900 text-gray-900 hover:bg-red-400 hover:text-cyan-50">
                            <div class="flex align-items-center">
                                <img src="https://cdn-icons-png.flaticon.com/128/889/889648.png" width="45px" alt="">
                                <span class="ml-5 font-bold">My Notes</span>
                            </div>
                            <i class="pi pi-angle-right" style="font-size: 1rem"></i>
                        </Button>
                    </RouterLink>
                </div>
                <div class="col-12 md:col-6 xl:col-4">
                    <Button class="p-4 w-full border-round-xl flex justify-content-between bg-white border-2 border-gray-900 text-gray-900 hover:bg-red-400 hover:text-cyan-50">
                        <div class="flex align-items-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/3135/3135692.png" width="45px" alt="">
                            <span class="ml-5 font-bold">My CV</span>
                        </div>
                        <i class="pi pi-angle-right" style="font-size: 1rem"></i>
                    </Button>
                </div>
                <div class="col-12 md:col-6 xl:col-4">
                    <Button class="p-4 w-full border-round-xl flex justify-content-between bg-white border-2 border-gray-900 text-gray-900 hover:bg-red-400 hover:text-cyan-50">
                        <div class="flex align-items-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/7200/7200621.png" width="45px" alt="">
                            <span class="ml-5 font-bold">My Plans</span>
                        </div>
                        <i class="pi pi-angle-right" style="font-size: 1rem"></i>
                    </Button>
                </div>
                <div class="col-12 md:col-6 xl:col-4">
                    <Button class="p-4 w-full border-round-xl flex justify-content-between bg-white border-2 border-gray-900 text-gray-900 hover:bg-red-400 hover:text-cyan-50">
                        <div class="flex align-items-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/3400/3400744.png" width="45px" alt="">
                            <span class="ml-5 font-bold">My motivations</span>
                        </div>
                        <i class="pi pi-angle-right" style="font-size: 1rem"></i>
                    </Button>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
    .container {
        padding: 10% 15%;
    }

</style>
