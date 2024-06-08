import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LockView from "../views/LockView.vue";
import HowDidICode from "../views/HowDidICode.vue";
import TimeLine from "../views/TimeLine.vue";


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
      { path: "/codeprocesses",
        name: "howdidicode",
        component: HowDidICode 
      },
      { path: "/timeline",
        name: "timeline",
        component: TimeLine 
      }
    ]
});