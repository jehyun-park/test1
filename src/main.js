import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';

import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
