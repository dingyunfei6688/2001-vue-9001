import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Detail from '../views/detail.vue';
import Column from '../views/column.vue';
import Home from '../views/home.vue';
import User from '../views/user.vue';
import Error from '../views/error.vue';
import Search from '../views/search.vue'

let routes = [{
		name: 'detail',
		path: '/detail',
		component: Detail
	},
	{
		path:'/search',
		component:Search
	},
	{
		path: '/column',
		component: Column
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/user',
		component: User
	},
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '*',
		component: Error
	},
];

let router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior(to, from, savePosition) {
		return {
			x: 0,
			y: 0
		}
	}
})

export default router