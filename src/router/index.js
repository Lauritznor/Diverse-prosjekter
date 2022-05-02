import { createRouter, createWebHistory } from 'vue-router'
import OverviewComponent from '../components/pages/OverviewComponent.vue'
import AddData from '../components/pages/AddData.vue'
import MissionComponent from '../components/pages/DataInserts/MissionComponent.vue'
import SoldierComponent from '../components/pages/DataInserts/SoldierComponent.vue'
import VehicleComponent from '../components/pages/DataInserts/VehicleComponent.vue'

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
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;