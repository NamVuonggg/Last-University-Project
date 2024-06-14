import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LockView from "../views/LockView.vue";
import HowDidICode from "../views/HowDidICode.vue";
import TimeLine from "../views/TimeLine.vue";
import Start from "../views/QuickStartView.vue";
import Notes from "../views/MyNoteView.vue";
import America from "../views/enterprises/AmericaEnt.vue";
import EntView from "../views/enterprises/EntView.vue"


import CountrySelect from "../views/enterprises/CountrySelect.vue";


export const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
      path: "/",
      name: "lockview",
      component: LockView
    },
    {
      path: "/home",
      name: "homeview",
      component: HomeView
    },
    {
      path: "/codeprocesses",
      name: "howdidicode",
      component: HowDidICode
    },
    {
      path: "/timeline",
      name: "timeline",
      component: TimeLine
    },
    {
      path: "/topics",
      name: "start",
      component: Start,
    },
    {
      path: "/topics/notes",
      name: "mynotes",
      component: Notes
    },
    {
      path: "/country",
      name: "enterprises-country-select",
      component: CountrySelect
    },
    {
      path:"/country/america",
      name: "america-enterprises",
      component: America
    },
    {
      path:"/country/america/:id",
      name: "enterprises-view",
      component: EntView
    }
  ]
});