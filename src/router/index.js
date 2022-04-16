import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'

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
        }
    ]
})

export default router