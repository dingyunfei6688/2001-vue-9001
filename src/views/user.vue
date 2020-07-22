<template>
	<div class="user">
		<p>造福大众，无需登录</p>
		<my-footer/>
	</div>
</template>

<script>
	import MyFooter from '../layouts/footer.vue';
	export default {
		name: "user",
		components: {
			MyFooter
		},
	};
</script>

<style scoped>
	.user{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	p{
		font-size: 1rem;
		width: 1rem;
		color: seagreen
	}
</style>
