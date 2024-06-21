import { defineStore } from 'pinia'
import { reactive } from 'vue'
export const useVocabListStore = defineStore('vocabsList', () =>{

    const vocabs = reactive([
        {
            id: 1,
            name: "Everyday business vocabulary",
        },
        {
            id: 2,
            name: "Business meetings vocabulary",
        },
        {
            id: 3,
            name: "Marketing vocabulary",
        },
        {
            id: 4,
            name: "Sales vocabulary",
        },
        {
            id: 5,
            name: "Finance and accounting vocabulary",
        },
        {
            id: 6,
            name: "Human resources vocabulary",
        },
        {
            id: 7,
            name: "Legal terms and meanings",
        },

    ])

    return { vocabs }
  })