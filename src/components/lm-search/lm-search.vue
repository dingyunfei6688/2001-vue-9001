<template>
	<form class="goSearch" action="/">
		<van-search v-model="mySearch" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
	</form>
</template>

<script>
	import {
		Toast
	} from 'vant';
	export default {
		name: "lm-search",
		data() {
			return {
				mySearch: '',
			};
		},
		methods: {
			onSearch(val) {
				this.$store.dispatch('search/onSearch',val);
				this.$router.push('/search')
			},
			onCancel() {
				Toast('已清空');
			},
		},
	};
</script>

<style scoped>
	.goSearch {
		width: 88%;
		margin: 0 auto;
	}
</style>
