import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts'

import router from '@/router/index.js'


Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;

Vue.use(Vant);
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
