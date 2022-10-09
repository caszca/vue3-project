import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('@/views/home/home.vue')
    },
    {
        path: '/collect',
        component: () => import('@/views/collect/collect.vue')
    },
    {
        path: '/order',
        component: () => import('@/views/order/order.vue')
    },
    {
        path: '/message',
        component: () => import('@/views/message/message.vue')
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router