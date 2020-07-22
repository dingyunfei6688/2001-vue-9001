<template>
	<div id="app">
		<van-loading class="my-loading" color="#DC08B1" size="36px" v-show="bLoading"/>
		<keep-alive :max="10">
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	import { COLUMN } from './store/types.js';
	import Home from './views/home.vue';
	import Column from './views/column.vue';
	import { mapState } from 'vuex'
	export default {
		name: 'App',
		components: {
			Home,
			Column
		},
		computed:mapState(['bLoading'])
	}
</script>

<style scoped>
	.my-loading{
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
</style>
