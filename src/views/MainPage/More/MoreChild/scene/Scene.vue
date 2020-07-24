<template>
	<div class="Scene">
		<tab-bar>
			<div slot="text">场景推荐</div>
			<div slot="explain">爱上音乐为伴的日子</div>
			<div slot="control">查看更多</div>
		</tab-bar>
		<list :detail="detail"></list>
	</div>
</template>

<script>
	import TabBar from '../TabBar.vue'
	import List from '../List.vue'
	import {getDaySongList,getDayList} from '../../../../../network/song.js'
	export default{
		name:'Scene',
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
      this.getDaySongList()
		},
		methods:{
			getDaySongList(){
				getDaySongList().then(res=>{
					let playlists = res.data.playlists
					let length = playlists.length-1
					while(length > 0 ){
						let index = Math.floor(Math.random()*(playlists.length-1))
						length--
						let test = playlists[length]
						playlists[length] = playlists[index]
						playlists[index] = test
					}
					this.detail = playlists.slice(0,6)
					for(let i in this.detail){
					this.detail[i].picUrl = this.detail[i].coverImgUrl
					}
				})
			}
		},
	}
</script>

<style scoped>
</style>
