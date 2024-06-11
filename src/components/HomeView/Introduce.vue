<script setup>
import { useNoteStore } from "@/stores/noteview";
import IntroduceButtons from "./IntroduceButtons.vue"
import NoteComponent from "@/components/AddNote/NoteComponent.vue";

const store = useNoteStore();
</script>

<template>


        <div class="top-content">
            <div class="border-round-3xl grid intro-thesis">
                <div class="col-12 md:col-4 xl:col-4 flex flex-column gap-4">
                    <span class="font-bold text-5xl mt-6 text-blue-50">THESIS ASSISTANT</span>
                    <span class="mt-5 text-2xl text-blue-50"><span class="font-bold">Thesis Assistant</span> is an application created by me, <span class="font-italic">Vuong Hoai Nam</span>, a 4th-year student at Japan University of Economics. </span>
                    <div class="h-5rem"></div>
                    <IntroduceButtons/>
                </div>
                <div class="col-12 md:col-8 xl:col-8 flex flex-column gap-3">
                    <div>
                        <img src="https://www.betterup.com/hubfs/Blog%20Images/new-world-1366x1000-2.jpeg" class="border-round-xl m-auto" width="100%" alt="">
                    </div>
                    <div class="flex gap-5">
                        <img src="https://www.entrepreneurshipinabox.com/wp-content/uploads/Entrepreneurial-Skills-for-Success-700x394.webp" class="border-round-xl m-auto" width="50%" alt="">
                        <img src="https://media.licdn.com/dms/image/C4D12AQEaVfhlVp3RyQ/article-cover_image-shrink_600_2000/0/1529087378653?e=2147483647&v=beta&t=-NkgSfii6lBq6ESBSVkFNI-3Pg7orU2LMPiMdR1dhtI" class="border-round-xl m-auto" width="50%" alt="">
                    </div>
                </div>
            </div>
        </div>


        <div class="second-content">
            <div class="border-round-3xl grid gap-8 thesis-have">
                <div class="col-12 md:col-7 xl:col-7 flex flex-column gap-4">
                    <div>
                        <img src="https://www.mediahawk.co.uk/wp-content/uploads/2021/04/education-sector-group-call-tracking.jpg" class="border-round-xl m-auto" width="100%" alt="">
                    </div>
                    <div class="flex gap-5"> 
                        <img src="https://cms.podium.com/wp-content/uploads/2023/01/automate-customer-retention-blog-cover.png" class="border-round-xl m-auto" width="50%" alt="">
                        <img src="https://img.indiafilings.com/learn/wp-content/uploads/2015/07/12011038/starting-a-business-in-India-for-foreign-company-1024x683.jpg" class="border-round-xl m-auto" width="45%" alt="">
                    </div>
                </div>
                <div class="col-12 md:col-4 xl:col-4">
                    <div>
                        <span class="font-bold text-3xl mt-6 text-blue-50">WHAT DOES THESIS ASSISTANT HAVE ?</span><br><br>
                        <span class="my-6 text-xl text-blue-50"><span class="text-red-500 font-bold">Thesis Assistant</span> is currently created for my personal use. <br><br>It has a company's categories separate function for me to choose different types of companies that I want to learn about. It also has a memo function where you can add notes in the memo section when you find any interesting points about the information you are looking for. </span>
                        <span class="my-6 text-xl text-blue-50"><br><br>It has very simple features but also powerful for students like me to do research essays easily and memorize it. I can also creating a tree branches map to storming ideas. Which is pretty cool</span>
                    </div>
                    <div class="flex gap-3 mt-8">
                        <Button class="p-3 bg-red-400 border-none hover:bg-red-600">Enterprises<i class="pi pi-angle-right ml-2" style="font-size: 1rem"></i></Button>
                        <Button class="p-3 bg-gray-900 border-none hover:bg-gray-700">News<i class="pi pi-angle-right ml-2" style="font-size: 1rem"></i></Button>
                    </div>
                </div>
            </div>
        </div>
        <!-- NOTE MAIN VIEW SECTION -->
        <div class="note-container">
            <p class="text-center text-3xl font-bold mb-6" v-if="store.notes.length">QUICK VIEW NOTES</p>
            <NoteComponent />
        </div>

        <!-- You can also learn -->
        <div class="you-also">
            <div class="border-round-3xl flex gap-8">
                    <div>
                        <img src="https://149357281.v2.pressablecdn.com/wp-content/uploads/2017/06/iStock-507753272-e1497891667823.jpg" class="border-round-xl m-auto" width="100%" alt="">
                    </div>
                    <div class="flex flex-column gap-8">
                        <div class="flex flex-column gap-5">
                            <span class="font-bold text-5xl mt-6">YOU CAN ALSO LEARN</span>
                            <span class="mt-2 text-2xl w-30rem"><span class="text-red-500 font-italic">Thesis Assistant</span> also gives you the knowledge about different business stuff that you may didn't know about. For example, what is "SME Enterprises" ? What does the word "CEO" stand for ?, what is "IPO" ?</span>
                        </div>
                        <Button class="p-4 bg-red-400 hover:bg-red-600 border-none">Try it out !<i class="pi pi-angle-right ml-2" style="font-size: 1rem"></i></Button>
                    </div>
            </div>
        </div>
        
        <div class="h-6rem"></div>
        <!-- extremely friendly UI -->
        <div class="UI-content">
            <div class="border-round-3xl flex flex-column">
                <img src="../../assets/images/Screenshot 2024-06-10 185658.png" class="border-round-xl m-auto" width="100%" alt="">
                <span class="font-bold text-5xl mt-6 text-blue-50">EXTREMELY FRIENDLY UI</span>
                <span class="my-6 text-2xl text-blue-50"><span class="text-gray-900 font-bold">Thesis Assistant</span> is designed in a very friendly way that you can jump right in and get used to it.</span>
                <IntroduceButtons/>
            </div>
        </div>


</template>


<style lang="scss" scoped>

    .top-content{
        background: url("https://i.pinimg.com/originals/7d/b1/8c/7db18c78e980806566465b5b8bf034c0.jpg");
        background-size: cover;

        .intro-thesis{
            padding: 5rem 15%;
        }
    }

    .second-content{
        background: url("https://images.pexels.com/photos/7130475/pexels-photo-7130475.jpeg?cs=srgb&dl=pexels-codioful-7130475.jpg&fm=jpg");
        background-size: cover;

        .thesis-have{
            padding: 5rem 15%;
        }
    }

    .note-container{
        padding: 5rem 15%;
    }
    
    .you-also{
        padding: 5rem 15%;
    }

    .UI-content{
        background: url("https://images.pexels.com/photos/7135121/pexels-photo-7135121.jpeg?cs=srgb&dl=pexels-codioful-7135121.jpg&fm=jpg");
        background-size: cover;
        padding: 10rem 15%;
    }
</style>