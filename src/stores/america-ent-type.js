import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
export const useAmericaEntTypeStore = defineStore('america-ent-type', () =>{

    const types = reactive([

        {
            "id": 1,
            "type": "Tech",
            "name": "Technology",
            "image": "https://cdn-icons-png.flaticon.com/128/9626/9626716.png"
        },
        {
            "id": 2,
            "type": "FnB",
            "name": "Food and Beverage",
            "image": "https://cdn-icons-png.flaticon.com/128/1037/1037855.png"
        },
        {
            "id": 3,
            "type": "Fin",
            "name": "Financial",
            "image": "https://cdn-icons-png.flaticon.com/128/7892/7892621.png"
        },
        {
            id: 4,
            "type": "Agr",
            "name": "Agriculture",
            "image": "https://cdn-icons-png.flaticon.com/128/4284/4284772.png"
        }
    ]);



    return { types }
  })