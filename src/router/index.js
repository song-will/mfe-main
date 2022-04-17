import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import NotFound from '../components/NotFound'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'vue-mfe',
            path: '/vue-mfe'            
        },
        {
            name: 'home',
            path: '/',
            component: HelloWorld
        },
        {
            name: 'react-mfe',
            path: '/react-mfe'
        },
        {
            name: '404',
            path: '/404',
            component: NotFound
        }
    ]
})
const childrenPath = ['/vue-mfe', '/react-mfe']
router.beforeEach((to, from, next) => {
    if (to.name) {
        return next()
    }
    if (childrenPath.some(item => to.path.includes(item))) {
        return next()
    }
    next({name: '404'})
})

export default router