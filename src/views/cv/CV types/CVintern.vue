<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

const skill1 = ref(7);
const skill2 = ref(7);
const skill3 = ref(6);
const skill4 = ref(6);
const skill5 = ref(8);
const skill6 = ref(8);
const skill7 = ref(5);
const skill8 = ref(7);


use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

provide(THEME_KEY, 'light');


const abilityChart = ref({
  title: {
    top: 50,
    text: 'Personal Programming Specific Knowledge Analyst',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    top: 130,
    right: 40,
    data: ['Python', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'VueJS'],
  },
  series: [
    {
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 350, name: 'Python' },
        { value: 250, name: 'MySQL' },
        { value: 718, name: 'HTML' },
        { value: 714, name: 'CSS' },
        { value: 648, name: 'JavaScript' },
        { value: 848, name: 'VueJS' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
});



</script>

<template>
    <div class="container">
        <div class="content-container card p-6 shadow-4 border-round-md">

            <div class="top-header flex align-items-center gap-8">
                <div class="border-3 border-green-500 p-2 border-circle">
                    <div class="border-3 border-green-500 p-2 border-circle">
                        <img src="https://cdn-icons-png.flaticon.com/128/4140/4140037.png" alt="">
                    </div>
                </div>
                <div class="header-name-des">
                    <p class="name text-5xl font-bold text-green-600">VUONG HOAI NAM</p>
                    <p class="request-job text-2xl">INTERNSHIP</p>
                </div>
            </div>

            <div class="sub-top-header grid mt-6 m-auto">
                <div class="birth col-12 md:col-4 xl:col-4 p-4">
                    <div class="info-text text-green-500 text-xl font-bold">DATE OF BIRTH</div>
                    <div>13/10/2000</div>
                </div>
                <div class="gender col-12 md:col-4 xl:col-4 p-4">
                    <div class="info-text text-green-500 text-xl font-bold">GENDER</div>
                    <div>Male</div>
                </div>
                <div class="phone col-12 md:col-4 xl:col-4 p-4">
                    <div class="info-text text-green-500 text-xl font-bold">PHONE NUMBER</div>
                    <div>070-8349-6111</div>
                </div>
                <div class="mail col-12 md:col-4 xl:col-4 p-4">
                    <div class="info-text text-green-500 text-xl font-bold">EMAIL</div>
                    <div>NamVuong453@gmail.com</div>
                </div>
                <div class="address col-12 md:col-4 xl:col-4 p-4">
                    <div class="info-text text-green-500 text-xl font-bold">ADDRESS</div>
                    <div>Japan, Saitama, Koshigaya, Gamo</div>
                </div>
                <div class="website col-12 md:col-4 xl:col-4 p-4">
                    <div class="info-text text-green-500 text-xl font-bold">WEBSITE</div>
                    <a href="https://www.facebook.com/people/Namn-Vuongg/pfbid0ohEcSCqCSWEZsnmzRLyy2DR7VynMt7FJgbXvvqXMHjQzcUAychBBpPF9sQc41tazl/" target="_blank" style="text-decoration: none;">My Facebook</a>
                </div>
            </div>

            <div class="main-content-container grid mt-5">
                <div class="left-content col-12 md:col-4 xl:col-4 px-5 mt-4">
                    <div class="objective">
                        <div class="objective-title font-bold text-xl text-green-500">INTERNSHIP'S OBJECTIVE</div>
                        <p>My internship goal is to learn and acquire new knowledge in the real business environment, seeking chances to apply the knowledge gained from university into practice, exploring and understanding my capabilities further to leverage strengths and address weaknesses. I aim to strive for personal development and create value for myself in the future.</p>
                    </div>

                    <div class="skill mt-5 flex flex-column gap-4">
                        <div class="font-bold text-xl text-green-500">SKILL</div>
                        <div class="skills-content flex flex-column gap-2">
                            <div class="text-md">Office 365</div>
                            <Rating v-model="skill1" :stars="10" :cancel="false">
                                <template #onicon>
                                    <i class="pi pi-circle-on" style="font-size: 14px; color: orange;"></i>
                                </template>
                                <template #officon>
                                    <i class="pi pi-circle-off" style="font-size: 14px"></i>
                                </template>
                            </Rating>
                        </div>
                        <div class="skills-content flex flex-column gap-2">
                            <div class="text-md">Logical thinking and creative </div>
                            <Rating v-model="skill2" :stars="10" :cancel="false">
                                <template #onicon>
                                    <i class="pi pi-circle-on" style="font-size: 14px; color: orange;"></i>
                                </template>
                                <template #officon>
                                    <i class="pi pi-circle-off" style="font-size: 14px"></i>
                                </template>
                            </Rating>
                        </div>
                        <div class="skills-content flex flex-column gap-2">
                            <div class="text-md">Public Speaking</div>
                            <Rating v-model="skill3" :stars="10" :cancel="false">
                                <template #onicon>
                                    <i class="pi pi-circle-on" style="font-size: 14px; color: orange;"></i>
                                </template>
                                <template #officon>
                                    <i class="pi pi-circle-off" style="font-size: 14px"></i>
                                </template>
                            </Rating>
                        </div>
                        <div class="skills-content flex flex-column gap-2">
                            <div class="text-md">Japanese</div>
                            <Rating v-model="skill4" :stars="10" :cancel="false">
                                <template #onicon>
                                    <i class="pi pi-circle-on" style="font-size: 14px; color: orange;"></i>
                                </template>
                                <template #officon>
                                    <i class="pi pi-circle-off" style="font-size: 14px"></i>
                                </template>
                            </Rating>
                        </div>
                        <div class="skills-content flex flex-column gap-2">
                            <div class="text-md">English</div>
                            <Rating v-model="skill5" :stars="10" :cancel="false">
                                <template #onicon>
                                    <i class="pi pi-circle-on" style="font-size: 14px; color: orange;"></i>
                                </template>
                                <template #officon>
                                    <i class="pi pi-circle-off" style="font-size: 14px"></i>
                                </template>
                            </Rating>
                        </div>
                        <div class="skills-content flex flex-column gap-2">
                            <div class="text-md">Web Develope</div>
                            <Rating v-model="skill6" :stars="10" :cancel="false">
                                <template #onicon>
                                    <i class="pi pi-circle-on" style="font-size: 14px; color: orange;"></i>
                                </template>
                                <template #officon>
                                    <i class="pi pi-circle-off" style="font-size: 14px"></i>
                                </template>
                            </Rating>
                        </div>
                        <div class="skills-content flex flex-column gap-2">
                            <div class="text-md">Python</div>
                            <Rating v-model="skill7" :stars="10" :cancel="false">
                                <template #onicon>
                                    <i class="pi pi-circle-on" style="font-size: 14px; color: orange;"></i>
                                </template>
                                <template #officon>
                                    <i class="pi pi-circle-off" style="font-size: 14px"></i>
                                </template>
                            </Rating>
                        </div>
                        <div class="skills-content flex flex-column gap-2">
                            <div class="text-md">Digital Art Design</div>
                            <Rating v-model="skill8" :stars="10" :cancel="false">
                                <template #onicon>
                                    <i class="pi pi-circle-on" style="font-size: 14px; color: orange;"></i>
                                </template>
                                <template #officon>
                                    <i class="pi pi-circle-off" style="font-size: 14px"></i>
                                </template>
                            </Rating>
                        </div>
                    </div>

                    <div class="mt-5">
                        <div class="objective-title font-bold text-xl text-green-500">INTEREST</div>
                        <div class="mt-4 flex flex-column gap-3">
                            <Chip class="w-15rem" label="Basketball" image="https://cdn-icons-png.flaticon.com/128/5285/5285691.png" />
                            <Chip class="w-15rem" label="Reading books" image="https://cdn-icons-png.flaticon.com/128/3227/3227053.png" />
                            <Chip class="w-15rem" label="Coding" image="https://cdn-icons-png.flaticon.com/128/2115/2115955.png" />
                            <Chip class="w-15rem" label="Music" image="https://cdn-icons-png.flaticon.com/128/1895/1895657.png" />
                            <Chip class="w-15rem" label="Traveling" image="https://cdn-icons-png.flaticon.com/128/4283/4283062.png" />
                            <Chip class="w-15rem" label="Science" image="https://cdn-icons-png.flaticon.com/128/748/748893.png" />
                            <Chip class="w-15rem" label="Food" image="https://cdn-icons-png.flaticon.com/128/1037/1037762.png" />
                            <Chip class="w-15rem" label="Investment" image="https://cdn-icons-png.flaticon.com/128/3310/3310653.png" />
                        </div>
                    </div>
                </div>



                <div class="right-content col-12 md:col-8 xl:col-8 mt-4 flex flex-column gap-6">
                    <div class="education">
                        <div class="right-content-title font-bold text-xl text-green-500 flex align-items-center gap-3">
                            <i class="pi pi-circle" style="font-size: 1rem"></i>
                            <div>EDUCATION</div>
                        </div>
                        <div class="w-full bg-gray-100 mt-2" style="height: 3px;"></div>
                        <div class="mt-4">
                            <div class="edu-top-title flex align-items-center gap-3">
                                <img src="https://cdn-icons-png.flaticon.com/128/2995/2995455.png" width="30px"> 
                                <div class="flex align-items-center">
                                    <div class="font-bold text-xl w-20rem">JAPAN UNIVERSITY OF ECONOMICS (日本経済大学)</div>
                                    <div class="text-md" style="opacity: 0.4;">Period: April 2021 - May 2025</div>
                                </div>
                            </div>
                            <div class="edu-des">
                                <p class="major font-bold text-xl text-green-600">Major: Business Administrator</p>
                                <p>Year: 4th year student</p>
                                <p>GPA: 3.44/4</p>
                            </div>
                        </div>
                    </div>


                    <div class="work">
                        <div class="font-bold text-xl text-green-500 flex align-items-center gap-3">
                            <i class="pi pi-circle" style="font-size: 1rem"></i>
                            <div>WORK EXPERIENCE</div>
                        </div>
                        <div class="w-full bg-gray-100 mt-2" style="height: 3px;"></div>

                        <div class="flex flex-column gap-4">
                            <div class="mt-4">
                                <div class="flex align-items-center gap-4">
                                    <img src="https://cdn-icons-png.flaticon.com/128/3419/3419250.png" width="30px"> 
                                    <div class="flex align-items-center">
                                        <div class="font-bold text-xl w-20rem">DOOZY LOCAL BRAND</div>
                                        <div class="text-md" style="opacity: 0.4;">Period: Sep 2019 - Oct 2020</div>
                                    </div>
                                </div>
                                <div class="edu-des">
                                    <p class="major font-bold text-xl text-green-600">Digital Art Designer</p>
                                    <p>Main responsibilities: <br> - Design Digital Art, Printings on T -shirt and Banners, etc...</p>
                                    <p>Recognition and Gains: <br> - Learn more about sense of creation, how to attract people by images.</p>
                                </div>
                            </div>

                            <div class="mt-4">
                                <div class="flex align-items-center gap-4">
                                    <img src="https://cdn-icons-png.flaticon.com/128/3063/3063822.png" width="30px"> 
                                    <div class="flex align-items-center">
                                        <div class="font-bold text-xl w-20rem">ASAHI SHIMBUN (朝日新聞)</div>
                                        <div class="text-md" style="opacity: 0.4;">Period: Sep 2019 - April 2024</div>
                                    </div>
                                </div>
                                <div class="edu-des">
                                    <p class="major font-bold text-xl text-green-600">Part Time Job</p>
                                    <p>Main responsibilities: <br> - Newspaper delivery.</p>
                                    <p>Recognition and Gains: <br> - I understand that it is important to always be punctual and to fulfill responsibilities diligently.</p>
                                </div>
                            </div>

                            <div class="mt-4">
                                <div class="flex align-items-center gap-4">
                                    <img src="https://cdn-icons-png.flaticon.com/128/644/644667.png" width="30px"> 
                                    <div class="flex align-items-center">
                                        <div class="font-bold text-xl w-20rem">WORKING ON A (START-UP) E-COMMERCE PROJECT</div>
                                        <div class="text-md" style="opacity: 0.4;">Period: Oct 2023 - Present</div>
                                    </div>
                                </div>
                                <div class="edu-des">
                                    <p class="major font-bold text-xl text-green-600">Front-end Developer, Project Manager</p>
                                    <p>Main responsibilities: <br>- UI Designer (VUEJS, HTML, CSS, JS, TS). <br>- Manage working processes of team members.</p>
                                    <p>Achievements and skills gained: <br>- Learned how to have critical thinking, listen to different perspectives. <br>- Know how to observe and report work's process to keep things in line. <br>- Improve Communication Skill.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="certificate">
                        <div class="right-content-title font-bold text-xl text-green-500 flex align-items-center gap-3">
                            <i class="pi pi-circle" style="font-size: 1rem"></i>
                            <div>CERTIFICATION</div>
                        </div>
                        <div class="w-full bg-gray-100 mt-2" style="height: 3px;"></div>
                        <div class="mt-4 flex flex-column gap-4">
                            <div class="edu-top-title flex align-items-center gap-4">
                                <img src="https://cdn-icons-png.flaticon.com/128/5511/5511398.png" width="30px"> 
                                <div class="text-xl">TOEIC: 875</div>
                            </div>
                            <div class="edu-top-title flex align-items-center gap-4">
                                <img src="https://cdn-icons-png.flaticon.com/128/3041/3041070.png" width="30px"> 
                                <div class="text-xl">JAPANESE: 日本語能力 N2 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-6 flex">
                <v-chart class="pie-chart" :option="abilityChart" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton+SC&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
.container{
    padding: 0 12%;

    .content-container{
        border-top: 25px solid rgb(0, 164, 0);

        .info-text{
            font-family: Roboto Condensed;
        }

        .main-content-container{
            border-top: 2px solid rgba(3, 182, 3, 0.24);
        }

    }

    .pie-chart {
        height: 80vh;
    }

    .bar-chart {
        height: 70vh;
    }

    .name{
        font-family: Roboto Condensed;
    }
}
</style>