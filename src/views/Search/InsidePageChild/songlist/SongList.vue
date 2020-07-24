<template>
	<div class="SongList"><White v-if="isshowwhite"></White>
		<loading-mod v-if="isshow" class="loading"></loading-mod>
		<loading v-if="isshowloading" class="loading"></loading>
		<scroll class="content" :scrollY="true" ref="scroll" @scrollEnd='scrollEnd'>
			<div>
				<SongListMod :data='songlists' class="songlists" :Size="'50px'" ></SongListMod>
				<div class="nothing" ref="nothing"></div>
			</div>
		</scroll>
	</div>
</template>





<script>
	import Scroll from '../../../../components/scroll/Scroll.vue'
	import {Search} from '../../../../network/search.js'
	import SongListMod from '../mod/SongListMod.vue'
	import LoadingMod from '../../../../components/loadingmod/LoadingMod.vue'
	import Loading from '../../../../components/loading/Loading.vue'
	import White from '../mod/White.vue'
	export default{
		name:'SongList',
		components:{
			Scroll,
			SongListMod,
			LoadingMod,
			Loading,White
		},
		created() {
	
		},
		mounted() {
			this.$refs.scroll.scrollTo(0,-100,0)
		},
		data(){
			return{
				keyword:'',
				songlists:[],
				offset:0,
				songlistCount:0,
				isshowloading:true,
				isshow:false,
				isshowwhite:true,
			}
		},
		methods:{
			//上拉刷新
			scrollEnd(position){
				if(this.songlists.length < this.songlistCount){
				  if(position.y == this.$refs.scroll.scroll.maxScrollY){
					  this.offset = this.offset + 30
					  this.Search(this.keyword)	
						this.isshow = true
				  }		
				}	
			},
			Search(key){
				this.$refs.scroll.scroll.disable()
				this.keyword = key
				Search(key,'',1000,this.offset).then(res=>{
					console.log(res)
					this.songlistCount = res.data.result.playlistCount
					this.songlists = this.songlists.concat(res.data.result.playlists) 	
					if(this.isshowloading == true){
						 setTimeout(()=>{
						   this.isshowloading = false
						 },700)
					}
					setTimeout(()=>{			  
						this.isshow = false
						this.$refs.scroll.refresh()
						this.$refs.scroll.scroll.enable()
					},700)
				})
			},
		},
		watch:{
			'$route.query':{
				handler(NewQuery,OldQuery){
					if(NewQuery.page == 6){
						if(NewQuery.key !== this.keyword){
						 this.isshowwhite = false
						 this.isshowloading = true
						 this.offset = 0
						 this.songlists = []
						 this.Search(NewQuery.key)
						 this.$refs.scroll.scrollTo(0,0,0)
						}
					}
				}
			},
			'songlists':function(NewSongLists,OldSongLists){
				if(NewSongLists.length >= this.songlistCount){
					this.$refs.nothing.style.height = 40+'px'
				}else{
					this.$refs.nothing.style.height = 80+'px'
				}
			}
		},
	}
</script>

<style scoped>
	.SongList{
		position: relative;
		width: 100vw;
		height: 100vh;
		color: black;
 	}
	.content{
		height: calc(100vh - 71px);
	}
	.songlists{
		margin: 5px 15px 0 15px;
	}
	.nothing{
		height:80px;
		width:100vw;
	}
</style>
