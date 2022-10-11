
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state:()=>{
     return {
     user: {
      email: 'admin@gmail.com',
      pwd: '123'
    },
  };
},
});
