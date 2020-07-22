<template>
	<div class="lm-goods-list">
		<div class="list_list-list" v-for="(item,index) in data" :key="item.id" @click="toDetail(item.id)">
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
	import {DETAIL} from '../../store/types.js';
	export default {
		name: 'lm-goods-list',
		props:{
			data:{
				type:Array,
				required:true
			}
		},
		methods: {
			toDetail(id){
				this.$store.dispatch('detail/'+ DETAIL,id);
				this.$router.push('/detail')
			}
		}
	}
</script>

<style scoped>
	.list_list-list{
		width: 5.8rem;
		height: 2.8rem;
		margin: 0.25rem auto;
	}
	.lm-goods-list .list_div-title{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.lm-goods-list .list_div-title .list_img-show{
		width: 2rem;
		height: 2rem;
	}
	.lm-goods-list .list_div-title .list_div-title-right{
		display: flex;
		justify-content: space-around;
		height: 2rem;
		align-items: center;
		flex-direction: column;
		margin:0 0.3rem;
		width: 3.8rem;
	}
	.lm-goods-list .list_div-title .list_h2-title{
		font-size: 0.38rem;
		height: 0.38rem;
		line-height: 0.38rem;
		color: lightcoral;
		overflow : hidden;
		text-overflow: ellipsis;
		width: 3rem;
		text-align: center;
	}
	.lm-goods-list .list_div-title .list_h2-info{
		color: lightseagreen;
		font-size: 0.24rem;
		height: 0.72rem;
		line-height: 0.36rem;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.lm-goods-list .list_div-title .list_send-make{
		color: orange;
		font-size: 0.24rem;
		height: 0.72rem;
		line-height: 0.36rem;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.lm-goods-list .list_send-detail{
		font-size: 0.22rem;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-indent: 0.44rem;
		margin-top: 0.15rem;
		height: 0.66rem;
		line-height: 0.33rem;
	}
</style>
