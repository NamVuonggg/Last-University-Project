import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LockView from "../views/LockView.vue";
import HowDidICode from "../views/HowDidICode.vue";
import TimeLine from "../views/TimeLine.vue";
import Start from "../views/QuickStartView.vue";
import Notes from "../views/MyNoteView.vue";
import AmericaEntTech from "../views/enterprises/america/AmericaEntTech.vue";
import EntView from "../views/enterprises/EntView.vue"
import AmericaEntType from "../views/enterprises/america/AmericaEntType.vue";


import CountrySelect from "../views/enterprises/america/CountrySelect.vue";


export const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
      path: "/",
      name: "lockview",
      component: LockView,
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
      name: "america-ent-types",
      component: AmericaEntType,
    },
    {
      path:"/country/america/Technology",
      name: "america-ent-tech",
      component: AmericaEntTech
    },
    {
      path:"/country/america/Technology/:id",     
      name: "ent-view",
      component: EntView,
    }
  ]
});