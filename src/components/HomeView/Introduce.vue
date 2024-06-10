<script setup>
import IntroduceButtons from "./IntroduceButtons.vue"
</script>

<template>
    <div class="container mt-7 flex flex-column">


        <div class="h-3rem"></div>

        <div class=" border-round-3xl grid">
            <div class="col-12 md:col-4 xl:col-4 flex flex-column gap-5">
                <span class="font-bold text-5xl mt-6">THESIS ASSISTANT</span>
                <span class="mt-5 text-2xl"><span class="text-red-500 font-italic">Thesis Assistant</span> is an application created by me, <span class="text-red-500 font-italic">Vuong Hoai Nam</span>, a 4th-year student at Japan University of Economics. </span>
                <IntroduceButtons/>
            </div>
            <div class="col-12 md:col-8 xl:col-8">
                <img src="https://www.betterup.com/hubfs/Blog%20Images/new-world-1366x1000-2.jpeg" class="border-round-xl m-auto" width="100%" alt="">
            </div>

        </div>

        <div class="h-6rem"></div>


        <div class="card p-7 shadow-4 border-round-3xl flex flex-column">
            <img src="https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/fyc9znhmrrplo0whckt7" class="border-round-xl m-auto" width="100%" alt="">
            <span class="font-bold text-5xl mt-6">WHAT DOES THESIS ASSISTANT HAVE ?</span>
            <span class="my-6 text-2xl"><span class="text-red-500 font-italic">Thesis Assistant</span> is currently created for my personal use. <br><br>It has a company's categories separate function for me to choose different types of companies that I want to learn about. It also has a memo function where you can add notes in the memo section when you find any interesting points about the information you are looking for. <br><br>I have also created a function that can brainstorm your ideas and plans into a "tree branches" system to help you organize your ideas better.</span>
        </div>

        <div class="h-6rem"></div>

        <div class="card p-7 shadow-4 border-round-3xl flex flex-column gap-2">
            <div>
                <img src="https://149357281.v2.pressablecdn.com/wp-content/uploads/2017/06/iStock-507753272-e1497891667823.jpg" class="border-round-xl m-auto" width="100%" alt="">
            </div>
            <div class="flex flex-column gap-5">
                <span class="font-bold text-5xl mt-6">YOU CAN ALSO LEARN</span>
                <span class="mt-2 text-2xl"><span class="text-red-500 font-italic">Thesis Assistant</span> also gives you the knowledge about different business stuff that you may didn't know about. For example, what is "SME Enterprises" ? What does the word "CEO" stand for ?, what is "IPO" ?</span>
            </div>
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
                <StepperPanel header="Design UI and Collect Datas">
                    <template #content="{ nextCallback }">
                        <div class="flex flex-column h-12rem">
                            <div class="flex-auto flex justify-content-center align-items-center font-medium">
                                <img src="https://cdn-icons-png.flaticon.com/128/1253/1253804.png" class="mt-8" width="250px" alt="">
                            </div>
                        </div>
                        <div class="flex pt-4 justify-content-between">
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
        padding: 0 10%;
    }
</style>