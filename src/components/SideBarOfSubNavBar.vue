<script setup>
import { RouterLink } from "vue-router";
import { useHomeStore } from "@/stores/homeview";
import { useVocabListStore } from "@/stores/vocabs-list";

const vocabsListStore = useVocabListStore();
const store = useHomeStore();



</script>

<template>
  <Sidebar v-model:visible="store.visible">
            <template #container="{ closeCallback }">
                <div class="flex flex-column h-full">
                    <div class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                        <img src="https://cdn-icons-png.flaticon.com/128/2231/2231642.png" width="50px" alt="">
                        <span class="inline-flex align-items-center gap-2">
                            <span class="font-semibold text-2xl text-gray-900">Menu</span>
                        </span>
                        <span>
                            <Button type="button" @click="closeCallback" icon="pi pi-times" severity="secondary" text rounded class="h-3rem w-3rem"></Button>
                        </span>
                    </div>
                    <div class="overflow-y-auto">
                        <ul class="list-none p-3 m-0">
                            <li>
                                <div
                                    v-ripple
                                    v-styleclass="{
                                        selector: '@next',
                                        enterClass: 'hidden',
                                        enterActiveClass: 'slidedown',
                                        leaveToClass: 'hidden',
                                        leaveActiveClass: 'slideup'
                                    }"
                                    class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                                >
                                    <span class="font-medium">OPTIONS FOR MORE</span>
                                </div>
                                <ul class="list-none p-0 m-0 overflow-hidden">
                                    <li>
                                        <RouterLink to = "/codeprocesses" style="text-decoration: none; color: inherit;" @click="closeCallback"> 
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-cog mr-2" style="font-size: 1rem"></i>
                                                <span class="font-medium">How did I programed this ?</span>
                                            </a>
                                        </RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to = "/timeline" style="text-decoration: none; color: inherit;" @click="closeCallback">
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-bookmark mr-2"></i>
                                                <span class="font-medium">My time line</span>
                                            </a>
                                        </RouterLink>
                                    </li>
                                    <li>
                                        <a
                                            v-ripple
                                            v-styleclass="{
                                                selector: '@next',
                                                enterClass: 'hidden',
                                                enterActiveClass: 'slidedown',
                                                leaveToClass: 'hidden',
                                                leaveActiveClass: 'slideup'
                                            }"
                                            class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                        >
                                            <i class="pi pi-building mr-2"></i>
                                            <span class="font-medium">Enterprises</span>
                                            <i class="pi pi-chevron-down ml-auto"></i>
                                        </a>
                                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <RouterLink to="/country/japan" style="text-decoration: none; color: inherit;" @click="closeCallback">
                                                    <div v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                        <img src="https://cdn-icons-png.flaticon.com/128/197/197604.png" width="20px" alt="">
                                                        <span class="font-medium ml-3">Japan</span>
                                                    </div>
                                                </RouterLink>
                                            </li>
                                            <li>
                                                <RouterLink to="/country/america" style="text-decoration: none; color: inherit;" @click="closeCallback">
                                                    <div v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                        <img src="https://cdn-icons-png.flaticon.com/128/5373/5373324.png" width="20px" alt="">
                                                        <span class="font-medium ml-3">America</span>
                                                    </div>
                                                </RouterLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <RouterLink to = "/topics/notes" style="text-decoration: none; color: inherit;" @click="closeCallback">
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-pen-to-square mr-2"></i>
                                                <span class="font-medium">Notes</span>
                                            </a>
                                        </RouterLink>
                                    </li>
                                    <li>
                                        <li>
                                        <a
                                            v-ripple
                                            v-styleclass="{
                                                selector: '@next',
                                                enterClass: 'hidden',
                                                enterActiveClass: 'slidedown',
                                                leaveToClass: 'hidden',
                                                leaveActiveClass: 'slideup'
                                            }"
                                            class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                        >
                                            <i class="pi pi-book mr-2"></i>
                                            <span class="font-medium">Vocablaries</span>
                                            <i class="pi pi-chevron-down ml-auto"></i>
                                        </a>
                                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a :href="`/topics/vocabs/${vocab.id}`" v-for="vocab in vocabsListStore.vocabs" :key="vocab.id" style="text-decoration: none; color: inherit;" @click="closeCallback">
                                                    <div v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                        <div class="flex justify-content-between align-items-center">
                                                            <div><i class="pi pi-circle-off mr-4" style="font-size: 10px"></i></div>
                                                            <div class="font-medium">{{ vocab.name }}</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    </li>
                                    <li>
                                        <a
                                            v-ripple
                                            v-styleclass="{
                                                selector: '@next',
                                                enterClass: 'hidden',
                                                enterActiveClass: 'slidedown',
                                                leaveToClass: 'hidden',
                                                leaveActiveClass: 'slideup'
                                            }"
                                            class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                        >
                                            <i class="pi pi-envelope mr-2"></i>
                                            <span class="font-medium">My CV</span>
                                            <i class="pi pi-chevron-down ml-auto"></i>
                                        </a>
                                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <RouterLink to="/topics/cv/intern" style="text-decoration: none; color: inherit;" @click="closeCallback">
                                                    <div v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                        <img src="https://cdn-icons-png.flaticon.com/128/909/909212.png" width="20px" alt="">
                                                        <span class="font-medium ml-3">Intern CV</span>
                                                    </div>
                                                </RouterLink>
                                            </li>
                                            <li>
                                                <RouterLink to="" style="text-decoration: none; color: inherit;" @click="closeCallback">
                                                    <div v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                        <img src="https://cdn-icons-png.flaticon.com/128/2195/2195529.png" width="20px" alt="">
                                                        <span class="font-medium ml-3">Job CV</span>
                                                    </div>
                                                </RouterLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-cog mr-2"></i>
                                            <span class="font-medium">Settings</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="list-none p-3 m-0">
                            <li>
                                <div
                                    v-ripple
                                    v-styleclass="{
                                        selector: '@next',
                                        enterClass: 'hidden',
                                        enterActiveClass: 'slidedown',
                                        leaveToClass: 'hidden',
                                        leaveActiveClass: 'slideup'
                                    }"
                                    class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                                >
                                    <span class="font-medium">APPLICATION</span>
                                </div>
                                <ul class="list-none p-0 m-0 overflow-hidden">
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-folder mr-2"></i>
                                            <span class="font-medium">Projects</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-chart-bar mr-2"></i>
                                            <span class="font-medium">Performance</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-cog mr-2"></i>
                                            <span class="font-medium">Settings</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-auto">
                        <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                        <a v-ripple class="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                            <Avatar image="https://cdn-icons-png.flaticon.com/128/1886/1886878.png" shape="square" />
                            <span class="font-bold ml-2">Nam Vuong</span>
                        </a>
                    </div>
                </div>
            </template>
        </Sidebar>
</template>


<style>

</style>