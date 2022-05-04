import { createRouter, createWebHistory } from 'vue-router'
import OverviewComponent from '../components/pages/OverviewComponent.vue'
import AddData from '../components/pages/AddData.vue'
import HomePage from '../components/pages/HomePage.vue'

const routes = [
    {
        name: "Hjemmeside",
        path: "/",
        component: HomePage
    },
    {
        name: "Oversikt",
        path: "/overview",
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