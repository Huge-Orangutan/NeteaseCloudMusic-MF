<template>
	<div class="Song">
		<White v-if="isshowwhite"></White>
		<Loading v-if="isshowloading"></Loading>
	  <loading-mod v-if="isshow"></loading-mod>
		<scroll class="content" :scrollY="true" ref="scroll" @scrollEnd='scrollEnd'>
			<div>
				<SongListPlayControl class="SongListPlayControl" :playlistitem="songs"></SongListPlayControl>
				<SongMod :list="songs" class='list' @PushIndex="PushIndex"></SongMod>
				<div class="nothing" ref="nothing" ></div>
			</div>
		</scroll>
		
	</div>
</template>

<script>
	import Scroll from '../../../../components/scroll/Scroll.vue'
	import {Search} from '../../../../network/search.js'
	import SongMod from '../mod/SongMod.vue'
	import Loading from '../../../../components/loading/Loading.vue'
	import LoadingMod from '../../../../components/loadingmod/LoadingMod.vue'
	import SongListPlayControl from '../../../PlayList/PlayListChild/SongListPlayControl.vue'
	import White from '../mod/White.vue'
	export default{
		name:'Song',
		components:{
			Scroll,
			SongMod,
			SongListPlayControl,
			LoadingMod,
			Loading,
			White
		},
		created() {
			
		},
		mounted() {
			this.$refs.scroll.scrollTo(0,-100,0)
		},
		data(){
			return{
				keyword:'',
				songs:[],
				offset:0,
				songCount:0,
				isshowloading:false,
				isshowwhite:true,
				isshow:false,
				imgUrl:require('../../../../assets/img/Dual Ring-1s-200px.gif')
			}
		},
		methods:{
			PushIndex(index){
				this.$store.commit('PushSongList',this.songs)
				this.$store.commit('PushSongListIndex',index)	
			},
			//上拉刷新
			scrollEnd(position){
				if(this.songs.length < this.songCount){
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
				Search(key,'',1,this.offset).then(res=>{
					this.songCount = res.data.result.songCount
					this.songs = this.songs.concat(res.data.result.songs) 	
				  for(let i in res.data.result.songs){
					  this.songs[Number (i) + (this.offset)].alia = res.data.result.songs[i].alias
						this.songs[Number (i) + (this.offset)].ar = [res.data.result.songs[i].artists[0]]
					  this.songs[Number (i) + (this.offset)].al = res.data.result.songs[i].album
				  }
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
					if(NewQuery.page == 1){
						if(NewQuery.key !== this.keyword){
							this.isshowwhite = false
							this.isshowloading = true
							this.offset = 0
							this.songs = []
						  this.Search(NewQuery.key)
							this.$refs.scroll.scrollTo(0,0,0)
						}
					}
				}
			},
			'songs':function(NewSongs,OldSongs){
				if(NewSongs.length >= this.songCount){
					this.$refs.nothing.style.height = 40+'px'
				}else{
					this.$refs.nothing.style.height = 80+'px'
				}
			}
		},
	}
</script>

<style scoped>
	.Song{
		position: relative;
		width: 100vw;
		color: #000000;
	}
	.content{
		height: calc(100vh - 71px);
	}
	.list{
		padding: 0 0 0 15px ;
	}
	.white{
		width: 100vw;
		height: 100vh;
	}
	.nothing{
		height:80px;
		width:100vw;
	}

</style>
