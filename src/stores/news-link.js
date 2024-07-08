import { defineStore } from 'pinia'
import { reactive } from 'vue'
export const useNewsLinkStore = defineStore('news-data', () =>{

    const links = reactive([
      {
        id: 1,
        name: "Technology",
        img: "https://cdn-icons-png.flaticon.com/128/900/900618.png",
        link: "https://www.reuters.com/technology/"
      },
      {
        id: 2,
        name: "Financial",
        img: "https://cdn-icons-png.flaticon.com/128/10365/10365322.png",
        link: "https://wise.com/us/blog/cfpb-warns-providers-to-stop-junk-fees-on-international-money-transfer?gad_source=1&gclid=CjwKCAjwnK60BhA9EiwAmpHZw_4clqzIZisynUMNJraejvKIJxVB_W7BjAX8ySIUtSpov0kLl7BqDhoCnwIQAvD_BwE"
      },
      {
        id: 3,
        name: "Education",
        img: "https://cdn-icons-png.flaticon.com/128/3976/3976625.png",
        link: "https://baitulmaal.org/lp-education/?utm_source=Google%20Ads%20Grant&utm_medium=cpc&donation_amount={donation_amount}&utm_campaign=6477913423&adgroupid=77953221255&utm_content=594695429007&utm_term=what%20are%20the%20effects%20of%20lack%20of%20education&gad_source=1&gclid=CjwKCAjwnK60BhA9EiwAmpHZw8bYJJgBtTF-bdZKQHUwBM4TbRJ48tqXgAvB0pySk6L2RoOdydGAthoC2KUQAvD_BwE"
      },
      {
        id: 4,
        name: "Science",
        img: "https://cdn-icons-png.flaticon.com/128/2022/2022299.png",
        link: "https://pioneerworks.org/broadcast?gad_source=1&gclid=CjwKCAjwnK60BhA9EiwAmpHZw7MtLLnKMnzIALYrm4Xj8cA64A2Nu63mQN0sk33fQxoMyN9FlWjnixoCYYoQAvD_BwE"
      },

    ])
        

    return { links }
  });