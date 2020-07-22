<template>
	<div class="lm-go-top"  v-show="gotop">
		<a href="JavaScript:;" @click="goTop" class="lm-go-top-a iconfont icon-xiangshangzhiding"></a>
	</div>
</template>
<script>
	import '../../assets/css/iconfont/iconfont.css'
	export default {
		name: 'lm-go-top',
		data() {
			return {
				gotop: false
			};
		},
		mounted() {
			window.addEventListener("scroll", this.handleScroll, true);
		},
		methods: {
			handleScroll() {
				let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
				scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
			},
			goTop() {
				let top = document.documentElement.scrollTop || document.body.scrollTop;
				const timeTop = setInterval(() => {
					document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
					if (top <= 0) {
						clearInterval(timeTop);
					}
				}, 10);
			}
		}
	}
</script>

<style scoped>
	.lm-go-top {
		position: fixed;
		right: 0.2rem;
		bottom: 1rem;
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 50%;
		background: lightgoldenrodyellow;
	}

	.lm-go-top .lm-go-top-a {
		display: block;
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 50%;
		font-size: 0.3rem;
		line-height: 0.6rem;
		color: orangered;
		text-align: center;
	}
</style>
