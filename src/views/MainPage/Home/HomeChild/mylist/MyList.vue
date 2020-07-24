<template>
	<div class="MyList">
		<mid-text ref="MidText" 
		:midtext="midtext" 
		class="MidText" 
		@PushIndex = "PushIndex"><div slot="right">更多</div></mid-text>
		<my-list-item 
		:currentIndex = "currentIndex" 
		:mySongList = "mySongList"></my-list-item>
	</div>
</template>

<script>
	import MidText from '../midtext/MidText.vue'
	import MyListItem from './MyListItem.vue'
	export default {
		name: 'MyList',
		components:{
			MidText,
			MyListItem
		},
		props:{
			mySongList:{
				type: Array,
				default:() => []
			}
		},
		data(){
			return{
				midtext:['创建歌单','收藏歌单','歌单助手'],
				currentIndex : 0,
			}
		},
		mounted() {
			
		},
		methods:{
			PushIndex(index){
			this.currentIndex  = index
			}
		},
	}
</script>

<style scoped>
	.MidText{
		padding-top: 20px;
		color: #afafaf;
		padding-bottom: 10px;
	}
</style>
