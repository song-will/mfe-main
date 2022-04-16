import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

registerMicroApps([
  {
    name: 'vue app',
    entry: '//localhost:8082',
    container: '#sub-content',
    activeRule: '/vue-mfe'
  },
  {
    name: 'react app',
    entry: '//localhost:3000',
    container: '#sub-content',
    activeRule: '/react-mfe'
  }
])

start()