// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from "./store/store";
import server from "./utils/nework";
import client from "./utils/client";

import config from "./config";
import ByNotify from "./common/components/notification";
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
Vue.use(ByNotify);
Vue.use(mavonEditor);

Vue.config.productionTip = false

Vue.prototype.$fServer = server;
Vue.prototype.$fClient = client;
Vue.prototype.$fConfig = config;
Vue.prototype.$fUtil = {};


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
