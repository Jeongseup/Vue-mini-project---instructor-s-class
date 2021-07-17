import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Side from '../views/Side.vue'
import QuestionTable from '../views/QuestionTable.vue'
import ClassTable from '../views/ClassTable.vue'
import EvalTable from '../views/EvalTable.vue'
import Login from '../views/Login.vue'
import GetDatabaseData from '../views/GetDatabaseData.vue'
import GetMockserverData from '../views/GetMockserverData.vue'

const routes = [
    {
        path: '/dbtest',
        name: 'GetDatabaseData',
        component: GetDatabaseData
    },
    {
        path: '/mocktest',
        name: 'GetMockserverData',
        component: GetMockserverData
    },
    {
        path: '/side',
        name: 'Side',
        component: Side
    },
    {
        path: '/questiontable',
        name: 'QuestionTable',
        component: QuestionTable
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/classtable',
        name: 'ClassTable',
        component: ClassTable
    },
    {
        path: '/evaltable',
        name: 'EvalTable',
        component: EvalTable
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
