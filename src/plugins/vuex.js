import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import mutations from '../store/mutations.js';
import state from '../store/state.js';

import column from '../store/modules/column.js';
import detail from '../store/modules/detail.js';
import home from '../store/modules/home.js';
import search from '../store/modules/search.js'

let store = new Vuex.Store({
	mutations,
	state,
	modules: {
		column,
		home,
		search,
		detail
	}
})

export default store;
