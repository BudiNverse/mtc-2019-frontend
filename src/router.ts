import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue')
        },
        {
            path: '/profile',
            name: 'Profile',
            component: () => import('./views/Profile.vue')
        },
        {
            path: '/next',
            name: 'Next Meal',
            component: () => import('./views/Next.vue')
        },
        {
            path: '/manageItems',
            name: 'Manage Items',
            component: () => import('./views/ManageItems.vue')
        }
    ]
})