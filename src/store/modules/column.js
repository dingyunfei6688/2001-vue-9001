import {
	COLUMN
} from '../types.js';
import {
	getTag,
	getQuery
} from '../services.js';

const state = {
	column: [],
	tags: [],
	list: [],
	title: ''
}

const actions = {
	[COLUMN]: ({
		commit,
		dispatch
	}, payload) => {
		getTag('sidebar')
			.then(result => {
				commit(COLUMN, result);
				dispatch('chackId', '10001')
			})
	},
	chackId: ({
		commit
	}, payload) => {
		let arr = [];
		state.column.forEach(item => {
			if (item.parentId === payload) {
				arr = item
				return
			}
		})
		commit('chackId', arr)
	},
	chack: ({
		commit,
		dispatch
	}, payload) => {
		let arr = state.tags[payload].name;
		dispatch('add', arr)
		commit('chackTitle', arr)
	},
	add: ({
		commit
	}, payload) => {
		getQuery('search')
		getQuery('search')
			.then(result => {
				let arr = [];
				result.forEach(item => {
					if (item.tags.indexOf(payload) !== -1 || item.title.indexOf(payload) !== -1 || item.ingredients.indexOf(payload) !== -1) {
						arr.push(item)
					}
				})
				commit('chackList', arr)
			})
	},
}

const mutations = {
	[COLUMN]: (state, payload) => state.column = payload,
	chackId: (state, payload) => state.tags = payload.list,
	chackTitle: (state, payload) => state.title = payload,
	chackList: (state, payload) => state.list = payload
}

export default {
	namespaced: true,
	state,
	actions,
	mutations
}
