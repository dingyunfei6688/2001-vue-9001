import axios from 'axios';
import Vue from 'vue';
import router from './router.js'
import vm from '../main.js'
import store from './vuex.js'

axios.interceptors.request.use(function(config) {
	store.commit('LOADING',true)
	return config;
}, function(error) {
	return Promise.reject(error);
});


axios.interceptors.response.use(function(response) {
	store.commit('LOADING',false)
	return response;
}, function(error) {
	return Promise.reject(error);
});

export default axios;
