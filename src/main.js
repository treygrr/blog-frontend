import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js';
import VueShowdown from 'vue-showdown';


require('./wat.js');


Vue.use(VueShowdown, {
  flavor: 'vanilla',
  options: {
    emoji: true,
    ghCompatibleHeaderId: false,
    noHeaderId: true
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
