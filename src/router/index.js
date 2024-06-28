import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LockView from "../views/LockView.vue";
import HowDidICode from "../views/HowDidICode.vue";
import TimeLine from "../views/TimeLine.vue";
import Topics from "../views/TopicsView.vue";
import Notes from "../views/MyNoteView.vue";
import AmericaEntTech from "../views/enterprises/america/Technology/AmericaEntTech.vue";
import EntTechView from "../views/enterprises/america/Technology/EntTechView.vue"
import AmericaEntType from "../views/enterprises/america/AmericaEntType.vue";
import CountrySelect from "../views/enterprises/CountrySelect.vue";
import JapanEntType from "../views/enterprises/japan/JapanEntType.vue";
import BusinessVocabs from "../views/vocabularies/BusinessVocabs.vue";
import ContactView from "@/views/ContactView.vue";
import ContactPhone from "@/components/HomeView/ContactPhone.vue";
import VocabsTable from "@/views/vocabularies/VocabsTable.vue";

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
      path: "/contact",
      name: "contact",
      component: ContactView,
      children:[
        {
          path: "phone",
          name: "contact-phone",
          component: ContactPhone
        }
      ]
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
      component: Topics,
    },
    {
      path: "/topics/notes",
      name: "mynotes",
      component: Notes
    },
    {
      path: "/topics/vocabs",
      name: "myvocabs",
      component: BusinessVocabs
    },
    {
      path: "/topics/vocabs/:id",
      name: "vocabstable",
      component: VocabsTable
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
      path: "/country/japan",
      name: "japan-ent-types",
      component: JapanEntType
    },
    {
      path:"/country/america/Technology",
      name: "america-ent-tech",
      component: AmericaEntTech
    },
    {
      path:"/country/america/Technology/:id",     
      name: "ent-view",
      component: EntTechView,
    }
  ]
});