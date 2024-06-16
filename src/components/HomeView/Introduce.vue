<script setup>
import { useNoteStore } from "@/stores/noteview";
import IntroduceButtons from "./IntroduceButtons.vue"
import NoteComponent from "@/components/AddNote/NoteComponent.vue";

const store = useNoteStore();
</script>

<template>
    <div class="h-13rem"></div>
    <div class="container">
            <div class="grid">
                <div class="col-12 md:col-6 xl:col-6">
                    <div class="flex flex-column gap-5">
                        <div>
                            <div class="thesis-txt font-bold text-6xl mb-4">THESIS ASSISTANT</div>
                            <div class="text-2xl"><span class="text-red-500">Thesis Assistant</span> is an application created by me, <span class="font-italic">Vuong Hoai Nam</span>, a 4th-year student at Japan University of Economics.</div>
                        </div>
                        <IntroduceButtons />
                    </div>
                </div>
                <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="border-round animation-duration-1000 col-12 md:col-6 xl:col-6">
                    <div>
                        <img src="https://freerangestock.com/sample/121129/group-working-in-the-office-black-and-white-photo-.jpg" class="border-round-2xl" width="100%" alt="">
                    </div>
                </div>
            </div>

        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'zoomin', leaveClass: 'fadeout' }" class="flex justify-content-center align-items-center border-round animation-duration-1000">
            <div>
            <img src="https://i.insider.com/60a274aef27b4c0019444d00?width=1200&format=jpeg" alt="">
            </div>
        </div>

        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'flipleft', leaveClass: 'fadeout' }" class="flex justify-content-center align-items-center border-round animation-duration-1000 animation-ease-in-out">
            <div>
            <img src="https://i.insider.com/60a274aef27b4c0019444d00?width=1200&format=jpeg" alt="">
            </div>
        </div>

        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'flipup', leaveClass: 'fadeout' }" class="flex justify-content-center align-items-center border-round animation-duration-1000 animation-ease-in-out">
            <div>
            <img src="https://i.insider.com/60a274aef27b4c0019444d00?width=1200&format=jpeg" alt="">
            </div>
        </div>

        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }" class="flex justify-content-center align-items-center border-round animation-duration-1000 animation-ease-in-out">
            <div>
            <img src="https://i.insider.com/60a274aef27b4c0019444d00?width=1200&format=jpeg" alt="">
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+NL:wght@100..400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Playwrite+NL:wght@100..400&display=swap');
.container{
    padding : 0 15%;

    .thesis-txt{
        font-family: "Lilita One"
    }
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