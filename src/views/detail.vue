<template>
	<div class="detail">
		<lm-nav/>
		<div class="detail_ynopsis">
			<div class="detail_ynopsis-title">{{detail.title}}</div>
			<div class="detail_ynopsis-mid">
				<img class="detail_ynopsis-img" :src="detail.albums">
				<div class="detail_mid-right">
					<div class="detail_ynopsis-tags">{{detail.tags}}</div>
					<div class="detail_ynopsis-ingredients">{{detail.ingredients}}</div>
					<div class="detail_ynopsis-burden">{{detail.burden}}</div>
				</div>
			</div>
			<div class="detail_ynopsis-imtro">{{detail.imtro}}</div>
		</div>
		<div class="detail_steps">
			<div class="detail_steps-top">步骤如下：</div>
			<div v-for="item in detail.steps">
				<div class="detail_steps-step">{{item.step}}</div>
				<img :src="item.img" alt="" class="detail_steps-img">
			</div>
		</div>
		
	</div>
</template>

<script>
	import LmNav from '../components/lm-nav/lm-nav.vue';
	import {mapState} from 'vuex';
	export default {
		name: "detail",
		components: {
			LmNav
		},
		computed:mapState('detail',['detail'])
	};
</script>

<style scoped>
	.detail{
		background: linear-gradient(to bottom,#A195F3BD,#E0F1A58F,#D898DABD,#F1C385);
		padding-bottom: 0.1rem;
	}
	.detail_ynopsis{
		margin-top: 0.6rem;
	}
	.detail_ynopsis-title{
		font-size: 0.4rem;
		color: #440044;
		width: 100%;
		text-align: center;
		height: 1rem;
		line-height: 1rem;
	}
	.detail_ynopsis-mid{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.detail_ynopsis-img{
		width: 2.5rem;
		height: 2.5rem;
		display: block;
	}
	.detail_mid-right{
		width: 3.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.detail_ynopsis-tags{
		font-size: 0.24rem;
		height: 0.72rem;
		line-height: 0.36rem;
		color: #442005;
		margin-bottom: 0.2rem;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.detail_ynopsis-ingredients{
		font-size: 0.24rem;
		height: 0.72rem;
		line-height: 0.36rem;
		color: #B15411;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.detail_ynopsis-burden{
		font-size: 0.24rem;
		height: 0.72rem;
		line-height: 0.36rem;
		color: #270231;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.detail_ynopsis-imtro{
		font-size: 0.24rem;
		line-height: 0.36rem;
		color: #270231;
		text-indent: 0.48rem;
		margin: 0.2rem 0.2rem;
	}
	.detail_steps-top{
		font-size: 0.3rem;
		height: 0.6rem;
		line-height: 0.6rem;
		margin: 0.2rem 0.2rem;
	}
	.detail_steps-step{
		font-size: 0.24rem;
		line-height: 0.36rem;
		color: #79020D;
		text-indent: 0.48rem;
		margin: 0.2rem 0.2rem;
	}
	.detail_steps-img{
		display: block;
		margin: 0.2rem auto;
	}
</style>
