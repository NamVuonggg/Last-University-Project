<script setup>
</script>

<template>
    <div class="h-15rem"></div>
    <div class="container">
        <div class="grid">
            <div class="col-12 md:col-6 xl:col-6 m-auto">
                <RouterLink to = "/country/japan"  style="text-decoration: none; color: inherit;">
                    <Button class="w-full p-4 flex justify-content-between bg-black-alpha-90 hover:bg-teal-700 border-none">
                        <div class="flex align-items-center gap-3">
                            <div>Japan</div>
                            <img src="https://cdn-icons-png.flaticon.com/128/197/197604.png" width="30px" alt="">
                        </div>
                            <i class="pi pi-angle-right ml-2" style="font-size: 1rem"></i>
                    </Button>
                </RouterLink>
            </div>
            <div class="col-12 md:col-6 xl:col-6">
                <RouterLink to = "/country/america" style="text-decoration: none; color: inherit;">
                    <Button class="w-full p-4 flex justify-content-between bg-black-alpha-90 hover:bg-teal-700 border-none">
                        <div class="flex align-items-center gap-3">
                            <div>America</div>
                            <img src="https://cdn-icons-png.flaticon.com/128/5373/5373324.png" width="30px" alt="">
                        </div>
                            <i class="pi pi-angle-right ml-2" style="font-size: 1rem"></i>
                    </Button>
                </RouterLink>
            </div>
        </div>
    </div>
    <ScrollTop />
</template>

<style lang="scss" scoped>
.container{
    padding: 0 10%;
}
</style>