import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: { path: "/home" },
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/HomeView.vue')
            },
            {
                path: '/cep',
                name: 'cep',
                component: () => import('@/views/CepView.vue')
            },
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
}); 

export default router;