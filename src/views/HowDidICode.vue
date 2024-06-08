<script setup>

</script>

<template>
    <NavBar/>
    <SubNavBar/>
    <div class="container mt-7 flex flex-column">
        <span class="font-bold text-4xl mb-6">HOW DID I CREATE THESIS ASSISTANT ?</span>
        <Stepper class="my-8">
            <StepperPanel header="What is VueJS ?">
                <template #content="{ nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="flex-auto flex justify-content-center align-items-left font-medium">
                            <span class="mt-3 text-2xl mt-5">Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any complexity.</span>
                        </div>
                    </div>
                    <div class="flex p-4 justify-content-end">
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="How did I design the UI ?">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="flex-auto flex justify-content-center align-items-center font-medium">
                            <span class="mt-3 text-2xl mt-5">UI was deisgn with material simple design, powered by the libraries of Vuejs, which known as PrimeVue, PrimeFlex and PrimeIcon. These libraries save me lots of time instead of decorating everything with just "vanilla" CSS. All I have to do is create codes that power the functions and make the website app can be fully functional.</span>
                        </div>
                    </div>
                    <div class="flex pt-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="How did I collect the information ?">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="flex-auto flex justify-content-center align-items-center font-medium">
                            <span class="mt-3 text-2xl mt-5">Yes, this is the most time-consuming part of this project. It took me months to collect data on different types and companies by myself. There was no programming or coding involved in this part. Everything was done by simply Googling and reading, and confirming different pieces of information to ensure I could use that data.</span>
                        </div>
                    </div>
                    <div class="flex pt-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Does these datas trustable ?">
                <template #content="{ prevCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="flex-auto flex justify-content-center align-items-center font-medium">
                            <span class="mt-3 text-2xl mt-5">I can make sure 90% that we can use these datas, I have used AI tools to compare the diffrences of datas from diffenrent sources and took the final data to use and render it to the UI.</span>
                        </div>
                    </div>
                    <div class="flex pt-4 justify-content-start">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                    </div>
                </template>
            </StepperPanel>
        </Stepper>
        <span class="mt-3 text-2xl mb-5"><span class="text-green-500 font-italic">Thesis Assistant</span> is an application which I used VUEJS3 to created. Check the information below to know more about Vue and libraries</span>
        <img src="https://inspector.dev/wp-content/uploads/2023/03/custom-tooltip-directive-vuejs-3-cover.png" class="border-round-xl" width="100%" alt="">
        
        <span class="font-bold text-3xl mt-8">WE DO ALSO NEED NODEJS ENVIRONMENT AND NPM TO RUN VUEJS</span>
        <span class="mt-3 text-2xl">As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.</span>
        <img src="https://media.licdn.com/dms/image/D4E12AQHssxaPQCrpiw/article-cover_image-shrink_600_2000/0/1694174583046?e=2147483647&v=beta&t=ZRtjqS1T6Ir9V9C6RiWrMbt_A--z5G1pfhOvpj_conE" class="border-round-xl mt-5" width="100%" alt="">
        <span class="mt-5 text-xl">You can checkout this link to know more about Nodejs : <a href="https://nodejs.org/en" style = "text-decoration: none;">NodeJS</a></span>

        <span class="font-bold text-3xl mt-8">npm</span>
        <span class="mt-3 text-2xl mt-4">npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

npm consists of three distinct components:

the website
the Command Line Interface (CLI)
the registry
Use the website to discover packages, set up profiles, and manage other aspects of your npm experience. For example, you can set up organizations to manage access to public or private packages.

The CLI runs from a terminal, and is how most developers interact with npm.

The registry is a large public database of JavaScript software and the meta-information surrounding it.</span>
        <img src="https://kinsta.com/wp-content/uploads/2022/06/what-is-npm-1024x512.png" class="border-round-xl mt-5" width="100%" alt="">
        <span class="mt-5 text-xl">You can checkout this link to know more about npm : <a href="https://www.npmjs.com/" style = "text-decoration: none;">npm</a></span>
        

        <span class="font-bold text-3xl mt-4">WHAT IS PRIMEVUE ?</span>
        <span class="mt-3 text-2xl">PrimeVue is a complete UI suite for Vue. js consisting of a rich set of UI components, icons, blocks, and application templates.</span>
        <img src="https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Ff8doki4dl435thlf5fza.jpg" class="border-round-xl mt-5" width="100%" alt="">
        <span class="mt-5 text-xl">You can checkout this link to know more about what Primvue can do with it's power : <a href="https://primevue.org/" style = "text-decoration: none;">Primevue</a></span>

        <span class="font-bold text-3xl mt-8">WHAT IS PRIMEFLEX ?</span>
        <span class="mt-3 text-2xl">PrimeFlex is a lightweight responsive CSS utility library to accompany Prime UI libraries and static webpages as well.</span>
        <img src="https://www.primefaces.org/static/social/primeflex-preview.jpg" class="border-round-xl mt-5" width="100%" alt="">
        <span class="mt-5 text-xl">You can checkout this link to know more about what PrimFlex can do with it's power : <a href="https://primeflex.org/" style = "text-decoration: none;">PrimeFlex</a></span>

        <span class="font-bold text-3xl mt-8">SOME DIFFERENT IMPORTANT LIBRARIES</span>
        <span class="mt-3 text-2xl">This project was also used Vue-Router and Pinia for linking and Stroring purposes, all the datas from different components are stored into stores files to manage and control it easier. </span>
        <img src="https://codezine.jp/static/images/article/18727/og.png" class="border-round-xl mt-5" width="100%" alt="">
        <span class="mt-5 text-xl">You can checkout this link to know more about what Pinia can do with it's power : <a href="https://pinia.vuejs.org/" style = "text-decoration: none;">Pinia</a></span>
        <div class="h-10rem"></div>
    </div>
    <Footer />
</template>


<style lang="scss" scoped>
    .container{
        padding: 0 13rem;
    }
</style>