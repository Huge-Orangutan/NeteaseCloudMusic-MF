<template>
	<div class="Album">
		<loading-mod v-if="isshow" class="loading"></loading-mod>
		<loading v-if="isshowloading" class="loading"></loading>
		<scroll class="content" :scrollY="true" ref="scroll" @scrollEnd='scrollEnd'>
			<div>
				<AlbumMod :data='albums' class="albums" :Size="'50px'" ></AlbumMod>
				<div class="nothing" ref="nothing"></div>
			</div>
		</scroll>
	</div>
</template>

<script>
	import Scroll from '../../../../components/scroll/Scroll.vue'
	import {Search} from '../../../../network/search.js'
	import AlbumMod from '../mod/AlbumMod.vue'
	import LoadingMod from '../../../../components/loadingmod/LoadingMod.vue'
	import Loading from '../../../../components/loading/Loading.vue'
	export default{
		name:'Album',
		components:{
			Scroll,
			AlbumMod,
			LoadingMod,
			Loading
		},
		created() {
	
		},
		mounted() {
			this.$refs.scroll.scrollTo(0,-60,0)
		},
		data(){
			return{
				keyword:'',
				albums:[],
				offset:0,
				isshowloading:true,
				isshow:false,
				upload:false
			}
		},
		methods:{
			//上拉刷新
			scrollEnd(position){
				if(this.upload == true){
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
				Search(key,'',10,this.offset).then(res=>{
					this.albums = this.albums.concat(res.data.result.albums) 	
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
					this.upload = true
					if(NewQuery.page == 5){
						if(NewQuery.key !== this.keyword){
						 this.isshowloading = true
						 this.offset = 0
						 this.albums = []
						 this.Search(NewQuery.key)
						 this.$refs.scroll.scrollTo(0,0,0)
						}
					}
				}
			},
			'albums':function(NewAlbums,OldAlbums){
				console.log(NewAlbums.length - OldAlbums.length)
				if(NewAlbums.length - OldAlbums.length < 30){
					this.$refs.nothing.style.height = 40+'px'
					this.upload = false
				}else{
					this.$refs.nothing.style.height = 80+'px'
					this.upload = true
				}
			}
		},
	}
</script>

<style scoped>
	.Album{
		position: relative;
		width: 100vw;
		height: 100vh;
		color: black;
 	}
	.content{
		height: calc(100vh - 71px);
	}
	.albums{
		margin: 5px 15px 0 15px;
	}
	.nothing{
		height:80px;
		width:100vw;
	}
</style>
