import {
	DETAIL
} from '../types.js'
import {
	getQuery
} from '../services.js'
const state = {
	detail: {},
}
const actions = {
	[DETAIL]: ({
		commit
	}, payload) => {
		getQuery('search').then(
			result => {
				let arr = result.filter(item => item.id === payload);
				commit(DETAIL, arr[0])
			}
		)
	},
}
const mutations = {
	[DETAIL]: (state, payload) => state.detail = payload,
}
const getters = {}

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}
