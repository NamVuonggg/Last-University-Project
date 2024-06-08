<script setup>
</script>

<template>
    <div class="container mt-7 flex flex-column">
        <div class="flex justify-content-between mb-4">
            <div class="flex gap-3">
                <RouterLink to="/topics" style="text-decoration: none; color: inherit;">
                    <Button class="w-9rem p-3 bg-gray-900 border-none"> Quick Start <i class="pi pi-angle-right ml-2" style="font-size: 1rem"></i></Button>
                </RouterLink>
                <Button class="w-10rem p-3 bg-orange-400 border-none"> Add a memo <i class="pi pi-angle-right ml-2" style="font-size: 1rem"></i></Button>
            </div>
            <RouterLink to = "/topics/notes">
                <Button class="w-15rem p-3 bg-orange-400 border-none"><i class="pi pi-pen-to-square mr-5" style="font-size: 15px"></i>My memo lists</Button>
            </RouterLink>
        </div>

        <div class="card p-7 shadow-4 border-round-3xl flex flex-column">
            <img src="https://www.betterup.com/hubfs/Blog%20Images/new-world-1366x1000-2.jpeg" class="border-round-xl" width="100%" alt="">
            <span class="font-bold text-4xl mt-6">THESIS ASSISTANT</span>
            <span class="mt-5 text-2xl"><span class="text-green-500 font-italic">Thesis Assistant</span> is an application created by me, <span class="text-green-500 font-italic">Vuong Hoai Nam</span>, a 4th-year student at Japan University of Economics. This entire project was conceptualized in about a week and took a month to develop.<br> I used <span class="text-green-500">VueJS3</span>, a JavaScript framework, to code this application. To make my thesis more impressive and to present all the information more clearly, I decided to create this application based on the questions I received from my teacher about how students create and plan their theses.</span>
        </div>

        <div class="h-6rem"></div>

        <div class="card p-7 shadow-4 border-round-3xl flex flex-column">
            <Stepper class="my-8">
                <StepperPanel header="Forming ideas">
                    <template #content="{ nextCallback }">
                        <div class="flex flex-column h-12rem">
                            <div class="flex-auto flex justify-content-center align-items-left font-medium">
                                <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/02/ideas-that-matter-logo-2-1.png" class="border-round-xl mt-4" width="500px" alt="">
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
                                <img src="https://www.cuelogic.com/wp-content/uploads/2022/09/Cover.jpg" class="border-round-xl mt-4" width="500px" alt="">
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
                                <img src="https://coderpad.io/wp-content/uploads/2024/02/12-top-programming-languages-ok.png" class="border-round-xl mt-4" width="400px"  alt="">
                            </div>
                        </div>
                        <div class="flex pt-4 justify-content-start">
                            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        </div>
                    </template>
                </StepperPanel>
            </Stepper>
        </div>    

        <div class="h-6rem"></div>

        <div class="card p-7 shadow-4 border-round-3xl flex flex-column">
            <span class="font-bold text-3xl">WHAT DOES THESIS ASSISTANT HAVE ?</span>
            <span class="my-6 text-2xl"><span class="text-green-500 font-italic">Thesis Assistant</span> is currently created for my personal use. <br>It has a company's categories separate function for me to choose different types of companies that I want to learn about. It also has a memo function where you can add notes in the memo section when you find any interesting points about the information you are looking for. <br>I have also created a function that can brainstorm your ideas and plans into a "tree branches" system to help you organize your ideas better.</span>
            <img src="https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/fyc9znhmrrplo0whckt7" class="border-round-xl" width="100%" alt="">
        </div>

        <div class="h-6rem"></div>

        <div class="card p-7 shadow-4 border-round-3xl flex flex-column">
            <span class="font-bold text-3xl">YOU CAN ALSO LEARN MORE</span>
            <span class="my-6 text-2xl"><span class="text-green-500 font-italic">Thesis Assistant</span> also gives you the knowledge about different business stuff that you may didn't know about. For example, what is "SME Enterprises" ? What does the word "CEO" stand for ?, what is "IPO" ?</span>
            <img src="https://computingaustralia.com.au/wp-content/uploads/2023/03/Unlocking-Business-Success-with-Knowledge-Management-banner.jpg" class="border-round-xl" width="100%" alt="">
        </div>
        
        <div class="h-10rem"></div>
    </div>
</template>


<style lang="scss" scoped>
    .container{
        padding: 0 13rem;
    }
</style>