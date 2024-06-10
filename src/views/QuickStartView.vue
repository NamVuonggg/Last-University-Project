<script setup>
</script>

<template>
    <NavBar/>
    <SubNavBar/>

    <div class="h-10rem"></div>

    <div class="container">
        <div class="grid h-full p-5 m-auto align-items-center">
            <div class="col-12 md:col-6 xl:col-4">
                <Button class="p-5 w-full border-round-xl flex justify-content-between bg-green-600 hover:bg-orange-400 border-none">
                    <div class="flex align-items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/4927/4927915.png" width="45px" alt="">
                        <span class="ml-5 font-bold">Business Vocabularies</span>
                    </div>
                    <i class="pi pi-angle-right" style="font-size: 1rem"></i>
                </Button>
            </div>
            <div class="col-12 md:col-6 xl:col-4">
                <Button class="p-5 w-full border-round-xl flex justify-content-between bg-green-600 hover:bg-orange-400 border-none">
                    <div class="flex align-items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/3328/3328269.png" width="45px" alt="">
                        <span class="ml-5 font-bold">Learn About Enterprises</span>
                    </div>
                    <i class="pi pi-angle-right" style="font-size: 1rem"></i>
                </Button>
            </div>
            <div class="col-12 md:col-6 xl:col-4">
                <RouterLink to="topics/notes" style="text-decoration: none; color: inherit;">
                    <Button class="p-5 w-full border-round-xl flex justify-content-between bg-green-600 hover:bg-orange-400 border-none">
                        <div class="flex align-items-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/889/889648.png" width="45px" alt="">
                            <span class="ml-5 font-bold">My Notes</span>
                        </div>
                        <i class="pi pi-angle-right" style="font-size: 1rem"></i>
                    </Button>
                </RouterLink>
            </div>
            <div class="col-12 md:col-6 xl:col-4">
                <Button class="p-5 w-full border-round-xl flex justify-content-between bg-green-600 hover:bg-orange-400 border-none">
                    <div class="flex align-items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/3135/3135692.png" width="45px" alt="">
                        <span class="ml-5 font-bold">My CV</span>
                    </div>
                    <i class="pi pi-angle-right" style="font-size: 1rem"></i>
                </Button>
            </div>
            <div class="col-12 md:col-6 xl:col-4">
                <Button class="p-5 w-full border-round-xl flex justify-content-between bg-green-600 hover:bg-orange-400 border-none">
                    <div class="flex align-items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/7200/7200621.png" width="45px" alt="">
                        <span class="ml-5 font-bold">My Plans</span>
                    </div>
                    <i class="pi pi-angle-right" style="font-size: 1rem"></i>
                </Button>
            </div>
            <div class="col-12 md:col-6 xl:col-4">
                <Button class="p-5 w-full border-round-xl flex justify-content-between bg-green-600 hover:bg-orange-400 border-none">
                    <div class="flex align-items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/3400/3400744.png" width="45px" alt="">
                        <span class="ml-5 font-bold">My motivations</span>
                    </div>
                    <i class="pi pi-angle-right" style="font-size: 1rem"></i>
                </Button>
            </div>
            
            
        </div>
    </div>
    
      
    <div class="h-25rem"></div>

    <Footer />
</template>

<style scoped>


.container {
    padding: 0 13rem;
}
</style>
