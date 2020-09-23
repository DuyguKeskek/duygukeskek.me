import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: 'Home' }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: { title: 'About' }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const pageTitle = 'Duygu Keskek'
    document.title = to.meta.title ? pageTitle + ' - ' + to.meta.title : pageTitle
    next()
})

export default router
