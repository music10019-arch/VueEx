import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/studentScore',
        name: 'StudentScore',
        component: () => import('../views/StudentScoreView.vue')
    },
    {
        path: '/ToDoListView',
        name: 'ToDoListView',
        component: () => import('../views/ToDoListView.vue')
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
