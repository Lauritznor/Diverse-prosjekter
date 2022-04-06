import { createRouter, createWebHistory } from 'vue-router'
import TestComponent from '../components/pages/TestComponent.vue'

const routes = [
    {
        name: "test",
        path: "/",
        component: TestComponent
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;