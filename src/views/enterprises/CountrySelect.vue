<script setup>
</script>

<template>
    <NavBar/>
    <SubNavBar/>
    <div class="h-10rem"></div>
    <div class="container">
        <div class="grid">
            <div class="col-12 md:col-6 xl:col-6 m-auto">
                <Button class="w-full p-4 flex justify-content-between bg-green-600 hover:bg-green-500 border-none">
                    <div class="flex align-items-center gap-3">
                        <div>Japan</div>
                        <img src="https://cdn-icons-png.flaticon.com/128/197/197604.png" width="30px" alt="">
                    </div>
                        <i class="pi pi-angle-right ml-2" style="font-size: 1rem"></i>
                </Button>
            </div>
            <div class="col-12 md:col-6 xl:col-6">
                <RouterLink to = "/country/america" style="text-decoration: none; color: inherit;">
                    <Button class="w-full p-4 flex justify-content-between bg-green-600 hover:bg-green-500 border-none">
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