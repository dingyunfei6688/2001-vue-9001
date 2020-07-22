import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './plugins/vuex.js'

Vue.config.productionTip = false

import './assets/css/base.css';
import './assets/js/font.js';
import router from './plugins/router.js';
import './plugins/axios';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

let vm = new Vue({
	data:{
		ab:1
	},
	router,
	store,
	render: h => h(App),
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	},
}).$mount('#app')
export default vm;
