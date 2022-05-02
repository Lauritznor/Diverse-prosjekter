import { createRouter, createWebHistory } from 'vue-router'
import OverviewComponent from '../components/pages/OverviewComponent.vue'
import AddData from '../components/pages/AddData.vue'
import SoldierComponent from '../components/pages/DataInserts/SoldierComponent.vue'

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
    },
    {
        name: "soldiers",
        path:"/add/soldier",
        component: SoldierComponent
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;