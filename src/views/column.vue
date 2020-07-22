<template>
	<div class="column">
		<lm-search class="column-search"/>
		<div class="content">
			<div class="tags">
				<my-sidebar :data="column"/>
			</div>
			<div class="content-right">
				<my-grid :data="tags" />
			</div>
		</div>
		<lm-go-top/>
		<my-footer/>
	</div>
	
</template>

<script>
	import {COLUMN} from '../store/types.js';
	import {mapState} from 'vuex';
	import LmSearch from '../components/lm-search/lm-search.vue';
	import MySidebar from '../layouts/sidebar.vue';
	import MyGrid from '../layouts/grid.vue';
	import MyFooter from '../layouts/footer.vue';
	import LmGoTop from '../components/lm-go-top/lm-go-top.vue';
	export default {
		components:{
			MySidebar,
			LmSearch,
			MyGrid,
			LmGoTop,
			MyFooter
		},
		mounted() {
			this.$store.dispatch('column/'+ COLUMN);
		},
		computed:{
			...mapState('column',['column','tags']),
		}
	};
</script>

<style scoped>
	.column-search{
		position: fixed;
		top: 0;
		background-color: #FFFFFF;
		z-index: 100;
		width: 100%;
		box-sizing: border-box;
		padding: 0 0.4rem;
	}
	.content{
		height: 9.652rem;
	}
	.tags{
		width: 1.451rem;
		height: 9.652rem;
		overflow-y: scroll;
		position: fixed;
		top: 0.9rem;
	}
	.content-right{
		width: 4.949rem;
		margin-left: 1.451rem;
		margin-top: 1rem;
		height: 9.652rem;
		/* overflow-y: scroll; */
		/* position: fixed; */
	}
</style>
