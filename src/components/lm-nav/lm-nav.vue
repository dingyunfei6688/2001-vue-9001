<template>
	<div class="lm-nav">
		<ul>
			<li class="iconfont icon-fanhui1" @click="$router.go(-1)"></li>
		</ul>
	</div>
</template>

<script>
	import '../../assets/css/iconfont/iconfont.css'
	export default {
		name: "lm-nav",
	};
</script>

<style scoped>
	.lm-nav {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: #EBE9F9;
		box-shadow:0 0.05rem 0.1rem 0.1rem #EBE9F9;
		z-index: 99;
	}

	.lm-nav ul {
		width: 6.4rem;
		height: 0.4rem;
		padding-top: 0.15rem;
		margin: 0 auto;
	}

	.lm-nav ul li {
		width: 0.29rem;
		height: 0.31rem;
		margin: 0 0 0 0.38rem;
		color: #A40684;
		font-size: 0.4rem;
	}
</style>
