<template>
	<div class="lm-goods-list">
		<div class="list_list-list" v-for="(item,index) in list" @click="toDetail(item.id)" :key="item.id">
			<div class="list_div-title">
				<img :src="item.albums[0]" alt="" class="list_img-show">
				<div class="list_div-title-right">
					<h2 class="list_h2-title">{{item.title}}</h2>
					<p class="list_h2-info">{{item.tags}}</p>
					<div class="list_send-make">{{item.ingredients}}</div>
				</div>
			</div>
			<div class="list_send-detail">
				{{item.imtro}}
			</div>
		</div>
		
	</div>
</template>

<script>
	import {mapState} from 'vuex';
	import {DETAIL} from '../store/types.js';
	export default {
		name: 'lm-goods-list',
		computed:mapState('column',['list']),
		methods: {
			toDetail(id){
				this.$store.dispatch('detail/'+ DETAIL,id);
				this.$router.push(`/detail`)
			}
		}
	}
</script>

<style scoped>
	.list_list-list{
		width: 4.6rem;
		height: 2.5rem;
		margin: 0.25rem auto;
	}
	.lm-goods-list .list_div-title{
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 1.8rem;
	}
	.lm-goods-list .list_div-title .list_img-show{
		width: 1.8rem;
		height: 1.8rem;
	}
	.lm-goods-list .list_div-title .list_div-title-right{
		display: flex;
		justify-content: space-around;
		height: 1.8rem;
		align-items: center;
		flex-direction: column;
		margin:0 0.3rem;
		width: 2.8rem;
	}
	.lm-goods-list .list_div-title .list_h2-title{
		font-size: 0.3rem;
		height: 0.5rem;
		line-height: 0.5rem;
		color: lightcoral;
		overflow : hidden;
		text-overflow: ellipsis;
		width: 2.2rem;
		text-align: center;
	}
	.lm-goods-list .list_div-title .list_h2-info{
		color: lightseagreen;
		font-size: 0.2rem;
		height: 0.6rem;
		line-height: 0.3rem;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.lm-goods-list .list_div-title .list_send-make{
		color: orange;
		font-size: 0.2rem;
		height: 0.6rem;
		line-height: 0.3rem;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.lm-goods-list .list_send-detail{
		font-size: 0.2rem;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-indent: 0.4rem;
		margin-top: 0.1rem;
		height: 0.6rem;
		line-height: 0.3rem;
	}
</style>

