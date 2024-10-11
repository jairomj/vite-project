import { createRouter, createWebHistory } from 'vue-router';
import homeViews from '../views/home/homeViews.vue';
// import aboutViews from '../views/about/aboutViews.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: homeViews
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */'../views/about/aboutViews.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router; 