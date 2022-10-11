import { createWebHistory, createRouter } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FetchData from '../views/FetchData.vue';
import AgeCal from '../views/AgeCal.vue';
import HelloWorld from '../views/HelloWorld.vue';
import SumCal from '../views/SumCal.vue';
import AverageCal from '../views/AverageCal.vue';
import WeatherOpt from '../views/WeatherOpt.vue';
import WeatherComp from '../views/WeatherComp.vue';
const routes = [
    {
        path: "/",
        name: "HomeView",
        component: HomeView
    },
    {
        path: "/FetchData",
        name: "FetchData",
        component: FetchData
    },   
    {
        path: "/AgeCal",
        name: "AgeCal",
        component: AgeCal
    },
        {
        path: "/HelloWorld",
        name: "HelloWorld",
        component: HelloWorld
    },   
    {
        path: "/SumCal",
        name: "SumCal",
        component: SumCal
    },
    {
        path: "/AverageCal",
        name: "AverageCal",
        component: AverageCal
    },
        {
        path: "/WeatherOpt",
        name: "WeatherOpt",
        component: WeatherOpt
    },
    {
        path: "/WeatherComp",
        name: "WeatherComp",
        component: WeatherComp
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;