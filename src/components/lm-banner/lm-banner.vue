<template>
	<div class="lm-banner">
		<p class="title">大家一起来享受做饭呀</p>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="(item,index) in banner" :key="index"><img :src="item" alt=""></van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	export default {
		name: "lm-banner",
		data() {
			return {
				banner: [
					require('../../assets/img/banner-1.jpg'),
					require('../../assets/img/banner-2.jpg'),
					require('../../assets/img/banner-3.jpg'),
					require('../../assets/img/banner-4.jpg'),
					require('../../assets/img/banner-5.jpg'),
					require('../../assets/img/banner-6.jpg'),
				]
			}
		},
	};
</script>

<style scoped>
	.lm-banner .title{
		text-align: center;
		font-size: 0.3rem;
		color: hotpink;
		background-color: greenyellow;
		background: linear-gradient(to right,greenyellow,yellow,greenyellow);
	}
	.lm-banner .my-swipe .van-swipe-item {
		color: #fff;
		text-align: center;
		width: 6.4rem;
		height: 3.5rem;
	}
	.lm-banner .my-swipe .van-swipe-item img{
		width: 6.4rem;
		height: 3.5rem;
	}
</style>
