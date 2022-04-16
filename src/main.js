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
    entry: '//124.221.44.7:3002',
    container: '#sub-content',
    activeRule: '/vue-mfe'
  },
  {
    name: 'react app',
    entry: '//124.221.44.7:3001',
    container: '#sub-content',
    activeRule: '/react-mfe'
  }
])

start()