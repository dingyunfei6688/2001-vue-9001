<template>
	<van-sidebar>
		<van-sidebar-item v-for="(item,index) in data" :key="item.parentId" :title="item.name" @click="chackId(item.parentId)" />
	</van-sidebar>
</template>

<script>
	import {
		COLUMN
	} from '../store/types.js';
	import {
		mapActions,
		mapState
	} from 'vuex'
	export default {
		props: {
			data: {
				type: Array,
				required: true
			}
		},
		methods: {
			...mapActions('column', ['chackId']),
		},
	};
</script>

<style scoped>

</style>
