import { createRouter, createWebHistory } from 'vue-router'
import OverviewComponent from '../components/pages/OverviewComponent.vue'
import  AddData from '../components/pages/AddData.vue'

const routes = [
    {
        name: "Oversikt",
        path: "/",
        component: OverviewComponent
    },
    {
        name: "Legg til data",
        path: "/add",
        component: AddData
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;