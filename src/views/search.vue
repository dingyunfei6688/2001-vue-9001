<template>
	<div class="search every_padding">
		<lm-nav/>
		<div class="home-info">
			<lm-goods-list :data="search"/>
		</div>
		<lm-go-top/>
	</div>
</template>

<script>
	import LmGoodsList from '../components/lm-goods-list/lm-goods-list.vue';
	import LmNav from '../components/lm-nav/lm-nav.vue'
	import LmGoTop from '../components/lm-go-top/lm-go-top.vue';
	import {mapState} from 'vuex';
	export default {
		name: 'search',
		components: {
			LmGoodsList,
			LmNav,
			LmGoTop
		},
		computed:mapState('search',['search']),
	}
</script>

<style scoped>
	.home-info{
		margin-top: 0.8rem;
	}
</style>
