<template>
  <p class="text-blue-700 text-xl mb-3">
    <HelloWorld msg="Welcome to Vue TypeScript App"/>
  </p>
<div class="flex flex-col items-center justify-center ">
  <form>
    <input v-model="input.email" name="email" type="text" placeholder="Email " class="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-200 rounded mb-2" />

    <input v-model="input.pwd" type="password" placeholder="Password" class="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-200 rounded mb-2" />
  
    <button @click="login" type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Login </button>
  </form>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import { useUserStore } from "../store/user";
export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
   setup(){
  const router = useRouter();
const store=useUserStore();

const input = ref({
  email:'',
  pwd:'' 
});

const login=()=> {
 if(input.value.email != store.user.email || input.value.pwd != store.user.pwd) {
                        alert("The username and / or password is incorrect");
                    }
 else {
               
                 router.replace({name:"FetchData"});
                }

            }
            return {input,login};
  },
});
</script>
