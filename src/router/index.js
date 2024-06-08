import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LockView from "../views/LockView.vue";
import HowDidICode from "../views/HowDidICode.vue";


export const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/",
        name: "lockview",
        component: LockView 
      },
      { path: "/home",
        name: "homeview",
        component: HomeView 
      },
      { path: "/how",
        name: "howdidicode",
        component: HowDidICode 
      }
    ]
});