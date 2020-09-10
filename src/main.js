import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto'
import VueCountdown from '@chenfengyuan/vue-countdown';
import './plugins/element.js'

Vue.use(VueScrollTo, {
  offset: -50,
});

Vue.component(VueCountdown.name, VueCountdown);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
