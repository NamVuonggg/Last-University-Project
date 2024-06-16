<script setup>
import { useNoteStore } from "@/stores/noteview";
import IntroduceButtons from "./IntroduceButtons.vue"
import NoteComponent from "@/components/AddNote/NoteComponent.vue";

const store = useNoteStore();
</script>

<template>
    <div class="h-5rem"></div>
    <div class="container">
            
        <div class="flex flex-column align-items-center">
            <div class="flex flex-column gap-5">
                <div>
                    <div class="thesis-txt font-bold text-6xl mb-4">THESIS ASSISTANT</div>
                    <div class="text-2xl"><span class="text-red-500">Thesis Assistant</span> is an application created by me, <span class="font-italic">Vuong Hoai Nam</span>, a 4th-year student at Japan University of Economics.</div>
                    <div class="text-xl mt-4"><span>Thesis Assistant</span> is currently created for my personal use. </div>
                </div>
                <IntroduceButtons />
            </div>
            <div class="h-5rem"></div>
            <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="border-round animation-duration-1000 col-12 md:col-6 xl:col-6 animation-ease-in-out w-full">
                    <img src="https://freerangestock.com/sample/121129/group-working-in-the-office-black-and-white-photo-.jpg" class="border-round-2xl" width="100%" alt="">
            </div>
        </div>
            
        <div class="h-10rem"></div>
        <div class="note-txt text-center font-bold text-5xl mb-5">- Your quick 
            <RouterLink to = "/topics/notes" style="text-decoration: none; color: inherit;">
                <span class="tetx-red-500">note</span> 
            </RouterLink>
        view is here -</div>
        <NoteComponent />

        <div class="h-10rem"></div>


        <div class="flex flex-column align-items-center">
            <div class="flex flex-column gap-5">
                <div>
                    <div class="thesis-txt font-bold text-6xl mb-4">WHAT DOES THESIS ASSISTANT <span class="text-red-500">HAVE</span> ?</div>
                    <div class="text-2xl">It has a company's categories separate function for me to choose different types of companies that I want to learn about.</div>
                    <div class="text-xl mt-4">It also has a memo function where you can add notes in the memo section when you find any interesting points about the information you are looking for.</div>
                </div>
                <IntroduceButtons />
            </div>
            <div class="h-5rem"></div>
            <div v-animateonscroll="{ enterClass: 'zoomin', leaveClass: 'fadeout' }" class="border-round animation-duration-1000 col-12 md:col-6 xl:col-6 animation-ease-in-out w-full">
                    <img src="https://media.istockphoto.com/id/1125743026/photo/office-workers-in-the-meeting.jpg?s=612x612&w=0&k=20&c=0ORd7e4HljORGRdA0O_vEpwfSv20xhD-8lx5XnY0A7E=" class="border-round-2xl" width="100%" alt="">
            </div>
        </div>        

        <div class="h-10rem"></div>

        <div class="flex flex-column align-items-center">
            <div class="flex flex-column gap-5">
                <div>
                    <div class="thesis-txt font-bold text-6xl mb-4">ABOUT <span class="text-red-500">FEATURES</span> ?</div>
                    <div class="text-2xl">It has very simple features but also powerful for students like me to do research essays easily and memorize it. I can also creating a tree branches map to storming ideas. Which is pretty cool</div>
                    <div class="text-xl mt-4">But maybe it will be a fucntion that only can be editable in source code if I didn't have enough time LOLOLOL</div>
                </div>
                <IntroduceButtons />
            </div>
            <div class="h-5rem"></div>
            <div v-animateonscroll="{ enterClass: 'flipleft', leaveClass: 'fadeout' }" class="border-round animation-duration-1000 col-12 md:col-6 xl:col-6 animation-ease-in-out w-full">
                    <img src="https://media.istockphoto.com/id/1687720497/photo/business-meeting-sales-team-meeting-of-a-startup-company-brainstorming-and-summarizing.jpg?s=612x612&w=0&k=20&c=oy3vu9vg4KXV2uLNTMFD5PEmjhegq7Grf3VhQD2w-RU=" class="border-round-2xl" width="100%" alt="">
            </div>
        </div>   

        <div class="h-10rem"></div>

        <div class="flex flex-column align-items-center">
            <div class="flex flex-column gap-5">
                <div>
                    <div class="thesis-txt font-bold text-6xl mb-4">YOU CAN ALSO <span class="text-red-500">LEARN</span></div>
                    <div class="text-2xl"><span class="text-red-500">Thesis Assistant</span> also gives you the knowledge about different business stuff that you may didn't know about. For example, what is "SME Enterprises" ? What does the word "CEO" stand for ?, what is "IPO" ?</div>
                    <div class="text-xl mt-4">I bet you guys study 4 years in an Economics University, wasted a ton of money but you ain't know shit about how Economics System works LOL</div>
                </div>
                <IntroduceButtons />
            </div>
            <div class="h-5rem"></div>
            <div v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }" class="border-round animation-duration-1000 col-12 md:col-6 xl:col-6 animation-ease-in-out w-full">
                    <img src="https://cdn.5280.com/2018/10/students-reading_peopleimages-getty-images.jpg" class="border-round-2xl" width="100%" alt="">
            </div>
        </div>   

        <div class="h-10rem"></div>


        <div class="flex flex-column align-items-center">
            <div class="flex flex-column gap-5">
                <div>
                    <div class="thesis-txt font-bold text-6xl mb-4">EXTREMELY FRIENDLY <span class="text-red-500">USER INTERFACE</span></div>
                    <div class="text-2xl"><span class="text-red-500">Thesis Assistant</span> is designed in a very friendly way that you can jump right in and get used to it.</div>
                    <div class="text-xl mt-4">All the designs is based on black and white, hope it makes easier for you to use</div>
                </div>
                <IntroduceButtons />
            </div>
            <div class="h-5rem"></div>
            <div v-animateonscroll="{ enterClass: 'flipright', leaveClass: 'fadeout' }" class="border-round animation-duration-1000 col-12 md:col-6 xl:col-6 animation-ease-in-out w-full">
                    <img src="../../assets/images/Screenshot 2024-06-15 133708.png" class="border-round-2xl" width="100%" alt="">
            </div>
        </div>   

        <div class="h-10rem"></div>
    </div>
</template>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+NL:wght@100..400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Playwrite+NL:wght@100..400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Playwrite+NL:wght@100..400&family=Shadows+Into+Light&display=swap');
.container{
    padding : 0 25%;

    .thesis-txt{
        font-family: "Shadows Into Light"
    };

    .note-txt{
        font-family: "Shadows Into Light"
    };
}

@keyframes slidedown-icon {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(20px);
    }

    100% {
        transform: translateY(0);
    }
}

.slidedown-icon {
    animation: slidedown-icon;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}

.box {
    background-image: radial-gradient(var(--primary-300), var(--primary-600));
    border-radius: 50% !important;
    color: var(--primary-color-text);
}
</style>