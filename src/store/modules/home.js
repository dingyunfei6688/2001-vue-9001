import {
	HOME
} from '../types.js'
import {
	getQuery
} from '../services.js'

const state = {
	home: [],

}

const actions = {
	[HOME]: ({
		commit
	}, payload) => {
		getQuery('search')
			.then(result => commit(HOME, result))
	}
}

const mutations = {
	[HOME]: (state, payload) => state.home = payload
}

export default {
	namespaced: true,
	state,
	actions,
	mutations
}
