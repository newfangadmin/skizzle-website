import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto'
import VueCountdown from '@chenfengyuan/vue-countdown';
import GAuth from 'vue-google-oauth2'
import './plugins/element.js'

Vue.use(VueScrollTo, {
  offset: -50,
});

Vue.component(VueCountdown.name, VueCountdown);

const gauthOption = {
  clientId: '221592392798-2u8tj205rgh5tgr0t21g4nep15m1bisr.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}

Vue.use(GAuth, gauthOption)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
