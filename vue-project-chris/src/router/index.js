import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Content1 from '@/views/Content1.vue'
import Content2 from '@/views/Content2.vue'
import TemperatureView from '@/views/TemperatureView.vue'
import Demo12 from '@/components/demo/Demo12.vue'


// 定義路由!!!!!!!!!!!!!!!!!!!!!!!!!!!
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView,
        children: [{ // 設定children(子層)裡的物件的path(路徑)開頭不用加/
                // :後面接自定義參數(這裡是id)，定義參數後若不給參數會報錯  參數後面加?代表參數(id)可不給，程式還是可運行
                path: 'content1/:id?',
                component: Content1,
                name: 'Content1',
                props: true  //開啟才接的到
            }, 
            {
                path: 'content2',
                component: Content2,
                name: 'Content2'
            }
                ]
    },
{
    path: '/Temp',
    name: 'Temperature',
    component: TemperatureView
},
{
    path: '/Demo12',
    name: 'Demo12',
    component: Demo12
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


//建立 router 實體
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
