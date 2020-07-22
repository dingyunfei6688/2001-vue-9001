<template>
	<div class="home every_padding">
		<lm-search/>
		<lm-banner :data="banner"/>
		<div class="home-info">
			<div class="home-header">
				<h3 class="home-header-go">为您推荐</h3>
				
			</div>
			<lm-goods-list :data="home"/>
		</div>
		<lm-go-top/>
		<my-footer/>
	</div>
</template>

<script>
	import LmSearch from '../components/lm-search/lm-search.vue';
	import LmBanner from '../components/lm-banner/lm-banner.vue';
	import LmGoodsList from '../components/lm-goods-list/lm-goods-list.vue';
	import MyFooter from '../layouts/footer.vue';
	import {HOME} from '../store/types.js';
	import {mapState} from 'vuex';
	import LmGoTop from '../components/lm-go-top/lm-go-top.vue';
	export default {
		name: 'home',
		data() {
			return {
				banner:[],
				mySearch:'',
			}
		},
		components: {
			LmSearch,
			LmBanner,
			LmGoodsList,
			LmGoTop,
			MyFooter
		},
		mounted() {
			this.$store.dispatch('home/'+ HOME)
		},
		computed:mapState('home',['home']),
	}
</script>

<style scoped>
	.home .home-header .home-header-go{
		height: 0.4rem;
		font-size: 0.4rem;
		line-height: 0.4rem;
		color: #22664d;
		padding: 0.2rem 0 0 0.4rem;
		box-sizing: content-box;
	}
	.home .home-info{
		background-color: lightcyan;
	}
</style>
