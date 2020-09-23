import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto'
import VueCountdown from '@chenfengyuan/vue-countdown';
import { VueReCaptcha } from 'vue-recaptcha-v3'
import './plugins/element.js'

Vue.use(VueScrollTo, {
  offset: -50,
});

Vue.use(VueReCaptcha, {
  siteKey: '6LfK6M4ZAAAAAIZGXdfGw2Aq6osJeVMLMecdj2zq',
  loaderOptions: {
    explicitRenderParameters: {
      badge: "bottomleft"
    }
  }
});

Vue.component(VueCountdown.name, VueCountdown);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
