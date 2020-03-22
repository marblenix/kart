import Vue from 'vue'
import App from './App.vue'
import './plugins/bootstrap-vue'

import '@babel/polyfill'
import 'mutationobserver-shim'

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
