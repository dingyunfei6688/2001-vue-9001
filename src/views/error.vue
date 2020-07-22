<template>
	<div class="error">
		<lm-nav />
		<p>页面错误，请刷新或者返回上一级！</p>
		<my-footer/>
	</div>
</template>

<script>
	import LmNav from '../components/lm-nav/lm-nav.vue';
	import MyFooter from '../layouts/footer.vue';
	export default {
		name: 'error',
		components: {
			MyFooter,
			LmNav
		}
	}
</script>

<style>
	.error p{
		margin-top: 3rem;
		text-align: center;
		height: 1rem;
		font-size: 0.32rem;
		line-height: 1rem;
	}
</style>
