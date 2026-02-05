//1.匯入vue-router函式
import { createRouter, createWebHistory } from "vue-router";

//2.匯入組件
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BMIView from "../views/BMIView.vue";
import Content1 from "../views/Content1.vue";
import Content2 from "../views/Content2.vue";
import { computed, h } from "vue";
import NotFound from "../views/NotFound.vue";




//3.定義路由
const routes = [
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
        name: 'NotFound'
    },
    {
        path: '/', // 因為是首頁所以只有/
        component: HomeView,
        name: "Home"

    },
    {
        path: '/about',
        component: AboutView,
        name: "About",
        children: [{ // 設定children(子層)裡的物件的path(路徑)開頭不用加/
            path: 'content1/:id?',
            // :後面接自定義參數(這裡是id)，定義參數後若不給參數會報錯
            // 參數後面加?代表參數(id)可不給，程式還是可運行
            component: Content1,
            name: 'Content1',
            props: true  //開啟才接的到
        }, {
            path: 'content2',
            component: Content2,
            name: 'Content2'

        }]
    },
    // {
    //     path: '/about/content1',
    //     component: Content1,
    //     name: "Content1"

    // },
    {
        path: '/bmi',
        component: BMIView,
        name: "Bmi"
    },
    {
        path: '/temperature',
        component: () => import("../views/TemperatureView.vue"),
        name: "Temperature"
    },
    {
        path: '/demo',
        component: () => import("../components/demo/Demo13.vue"),
        name: 'Demo'
    },
    {
        path: '/studentScore',
        component: () => import("../views/StudentScoreView.vue"),
        name: 'StudentScore'
    },
    {
        path: '/toDoList',
        component: () => import("../views/ToDoListView.vue"),
        name: 'ToDoList'
    },
    {
        path: '/lifecycle',
        component: () => import("../views/Lifecycle.vue"),
        name: 'Lifecycle'
    },
    {
        path: '/demoList',
        component: () => import("../views/DemoList.vue"),
        name: 'DemoList'
    },
    {
        path: '/parent',
        component: () => import("../views/ParentView.vue"),
        name: 'Parent'
    },



];

//4.建立router
const router = createRouter({
    history: createWebHistory(),
    routes: routes

});

//5.匯出
export default router