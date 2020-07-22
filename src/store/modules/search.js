import {
	getQuery
} from '../services.js'
const state = {
	search: [],
}
const actions = {
	onSearch: ({
		commit
	}, payload) => {
		getQuery('search')
			.then(result => {
				let arr = [];
				result.forEach(item => {
					if (item.tags.indexOf(payload) !== -1 || item.title.indexOf(payload) !== -1 || item.ingredients.indexOf(payload) !== -1) {
						arr.push(item)
					}
				})
				commit('onSearch', arr)
			})
	},
}
const mutations = {
	onSearch: (state, payload) => state.search = payload,
}
const getters = {}

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}
