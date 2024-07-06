import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useEntFnbDataStore = defineStore('us-fnb-data', () => {
    const datas = reactive([
        {
            "id": 1,
            "name": "StartBucks",
            "companyLogo": "https://cdn-icons-png.flaticon.com/128/5977/5977591.png",
            "companyImg": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iKawEqCPyJhk/v1/-1x-1.jpg" // Oracle
        },
        {
            "id": 2,
            "name": "KFC",
            "companyLogo": "https://cdn-icons-png.flaticon.com/128/16573/16573917.png",
            "companyImg": "https://i.pinimg.com/736x/a9/3a/a1/a93aa1092b969c05e47cb2f947368e6f.jpg" // Microsoft
        },
        {
            "id": 3,
            "name": "McDonalds",
            "companyLogo": "https://cdn-icons-png.flaticon.com/128/732/732217.png",
            "companyImg": "https://techmonitor.ai/wp-content/uploads/sites/4/2017/03/shutterstock_1140629366.webp" // Tesla
        },
        {
            "id": 4,
            "name": "BurgerKing",
            "companyLogo": "https://cdn-icons-png.flaticon.com/128/5977/5977578.png",
            "companyImg": "https://www.investopedia.com/thmb/kcFOkUztiPsKpASAgZuolyM-19g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_2113535186-750x406-5a8cb0db05f441deb12ea8d8c726a2c5.jpg" // Meta
        },
        
    ])
  
    return { datas }
})
