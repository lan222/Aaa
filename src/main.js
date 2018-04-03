import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Resource from 'vue-resource'

Vue.use(Resource)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


