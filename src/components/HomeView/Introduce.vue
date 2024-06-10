<script setup>
</script>

<template>
    <div class="container mt-7 flex flex-column">
        <div class="flex justify-content-between">
            <div class="flex gap-3">
                <RouterLink to="/topics" style="text-decoration: none; color: inherit;">
                    <Button class="w-9rem p-3 bg-gray-900 border-none hover:bg-red-500"> Quick Start <i class="pi pi-angle-right ml-2" style="font-size: 1rem"></i></Button>
                </RouterLink>
                <Button class="w-10rem p-3 bg-orange-400 border-none hover:bg-red-500"> Add a memo <i class="pi pi-angle-right ml-2" style="font-size: 1rem"></i></Button>
            </div>
            <RouterLink to = "/topics/notes">
                <Button class="w-15rem p-3 bg-orange-400 border-none hover:bg-red-500"><i class="pi pi-pen-to-square mr-5" style="font-size: 15px"></i>My memo lists</Button>
            </RouterLink>
        </div>

        <div class="h-3rem"></div>

        <div class="card p-7 shadow-4 border-round-3xl flex flex-column">
            <img src="https://www.betterup.com/hubfs/Blog%20Images/new-world-1366x1000-2.jpeg" class="border-round-xl m-auto" width="100%" alt="">
            <span class="font-bold text-5xl mt-6">THESIS ASSISTANT</span>
            <span class="mt-5 text-2xl"><span class="text-red-500 font-italic">Thesis Assistant</span> is an application created by me, <span class="text-red-500 font-italic">Vuong Hoai Nam</span>, a 4th-year student at Japan University of Economics. <br><br>This entire project was conceptualized in about a week and took a month to develop.<br> I used <span class="text-red-500">VueJS3</span>, a JavaScript framework, to code this application. To make my thesis more impressive and to present all the information more clearly, I decided to create this application based on the questions I received from my teacher about how students create and plan their theses.</span>
        </div>

        <div class="h-6rem"></div>


        <div class="card p-7 shadow-4 border-round-3xl flex flex-column">
            <img src="https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/fyc9znhmrrplo0whckt7" class="border-round-xl m-auto" width="100%" alt="">
            <span class="font-bold text-5xl mt-6">WHAT DOES THESIS ASSISTANT HAVE ?</span>
            <span class="my-6 text-2xl"><span class="text-red-500 font-italic">Thesis Assistant</span> is currently created for my personal use. <br><br>It has a company's categories separate function for me to choose different types of companies that I want to learn about. It also has a memo function where you can add notes in the memo section when you find any interesting points about the information you are looking for. <br><br>I have also created a function that can brainstorm your ideas and plans into a "tree branches" system to help you organize your ideas better.</span>
        </div>

        <div class="h-6rem"></div>

        <div class="card p-7 shadow-4 border-round-3xl flex flex-column">
            <img src="https://computingaustralia.com.au/wp-content/uploads/2023/03/Unlocking-Business-Success-with-Knowledge-Management-banner.jpg" class="border-round-xl m-auto" width="100%" alt="">
            <span class="font-bold text-5xl mt-6">YOU CAN ALSO LEARN MORE</span>
            <span class="my-6 text-2xl"><span class="text-red-500 font-italic">Thesis Assistant</span> also gives you the knowledge about different business stuff that you may didn't know about. For example, what is "SME Enterprises" ? What does the word "CEO" stand for ?, what is "IPO" ?</span>
        </div>
        
        <div class="h-6rem"></div>

        <div class="card p-7 shadow-4 border-round-3xl flex flex-column">
            <img src="../../assets/images/Screenshot 2024-06-10 185658.png" class="border-round-xl m-auto" width="100%" alt="">
            <span class="font-bold text-5xl mt-6">EXTREMELY FRIENDLY UI</span>
            <span class="my-6 text-2xl"><span class="text-red-500 font-italic">Thesis Assistant</span> is designed in a very friendly way that you can jump right in and get used to it.</span>
        </div>

        <div class="h-6rem"></div>

        <div class="card p-8 shadow-4 border-round-3xl flex flex-column">
            <Stepper class="my-8">
                <StepperPanel header="Forming ideas">
                    <template #content="{ nextCallback }">
                        <div class="flex flex-column h-12rem">
                            <div class="flex-auto flex justify-content-center align-items-left font-medium">
                                <img src="https://cdn-icons-png.flaticon.com/128/1253/1253804.png" class="mt-8" width="250px" alt="">
                            </div>
                        </div>
                        <div class="flex p-4 justify-content-end">
                            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                        </div>
                    </template>
                </StepperPanel>
                <StepperPanel header="Design UI and Collect Datas">
                    <template #content="{ prevCallback, nextCallback }">
                        <div class="flex flex-column h-12rem">
                            <div class="flex-auto flex justify-content-center align-items-center font-medium">
                                <img src="https://cdn-icons-png.flaticon.com/128/3419/3419250.png" class="mt-8" width="250px" alt="">
                            </div>
                        </div>
                        <div class="flex pt-4 justify-content-between">
                            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                        </div>
                    </template>
                </StepperPanel>
                <StepperPanel header="Programed">
                    <template #content="{ prevCallback }">
                        <div class="flex flex-column h-12rem">
                            <div class="flex-auto flex justify-content-center align-items-center font-medium">
                                <img src="https://cdn-icons-png.flaticon.com/128/2721/2721620.png" class="mt-8" width="250px"  alt="">
                            </div>
                        </div>
                        <div class="flex pt-4 justify-content-start">
                            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        </div>
                    </template>
                </StepperPanel>
            </Stepper>
        </div>    


        <div class="h-8rem"></div>

    </div>
</template>


<style lang="scss" scoped>
    .container{
        padding: 0 15%;
    }
</style>