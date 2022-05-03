import { createRouter, createWebHistory } from 'vue-router'
import OverviewComponent from '../components/pages/OverviewComponent.vue'
import AddData from '../components/pages/AddData.vue'
import HomePage from '../components/pages/HomePage.vue'
import MissionComponent from '../components/pages/DataOptions/MissionComponent.vue'
import SoldierComponent from '../components/pages/DataOptions/SoldierComponent.vue'
import VehicleComponent from '../components/pages/DataOptions/VehicleComponent.vue'
import WeaponComponent from '../components/pages/DataOptions/WeaponComponent.vue'

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
    },
    {
        name: "Oppdrag",
        path: "/add/missions",
        component: MissionComponent
    },
    {
        name: "Soldater",
        path: "/add/soldiers",
        component: SoldierComponent
    },
    {
        name: "Kjøretøy",
        path: "/add/veichles",
        component: VehicleComponent
    },
    {
        name: "Våpen",
        path: "/add/weapons",
        component: WeaponComponent
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;