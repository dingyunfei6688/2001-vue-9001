<template>
	<div class="grid every_padding">
		<van-tabs v-model="add">
			<van-tab v-for="(item,index) in tags" :key="item.id" :title="item.name"/><column-list :data="chackList" /></van-tab>
		</van-tabs>
	</div>
</template>

<script>
	import {COLUMN} from '../store/types.js';
	import {mapState,mapMutations,mapActions} from 'vuex';
	import ColumnList from './column-list.vue';
	export default {
		name: 'grid',
		components: {
			ColumnList
		},
		data() {
			return {
				name:'',
				title:'',
				add:''
			}
		},
		updated() {
			this.$store.dispatch('column/chack', this.add);
		},
		watch:{
			tags:{
				handler(xin){
					this.add=0
				},
			}
		},
		computed:{
			...mapState('column',['tags','chackList']),
		}
	}
</script>

<style>

</style>
