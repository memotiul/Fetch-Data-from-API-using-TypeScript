import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import Router from './router'
import { createPinia } from "pinia";
const pinia = createPinia();
createApp(App).use(Router).use(pinia).mount('#app')