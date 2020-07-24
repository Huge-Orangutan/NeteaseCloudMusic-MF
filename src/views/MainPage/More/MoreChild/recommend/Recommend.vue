<template>
	<div class="Recommend">
		<tab-bar>
			<div slot="text">推荐歌单</div>
			<div slot="explain">为你精挑细选</div>
			<div slot="control">查看更多</div>
		</tab-bar>
		<list :detail="detail"></list>
	</div>
</template>

<script>
	import TabBar from '../TabBar.vue'
	import List from '../List.vue'
	import {getRecommendSongList} from '../../../../../network/song.js'
	export default{
		name:'Recommend',	
		components:{
			TabBar,
			List
		},
		data(){
			return{
				detail:[]
			}
		},
		created() {
			this.getRecommendSongList()
		},
		methods:{
			getRecommendSongList(){
				getRecommendSongList().then(res=>{
				  let result = res.data.result
					let length = result.length-1
          while(length > 0 ){
						let index = Math.floor(Math.random()*(result.length-1))
						length--
						let test = result[length]
						result[length] = result[index]
						result[index] = test
					}
					this.detail = result.slice(0,6)
				})
			},
		},
	}
</script>

<style scoped>
</style>
