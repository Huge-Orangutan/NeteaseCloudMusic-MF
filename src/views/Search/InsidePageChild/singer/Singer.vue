<template>
	<div class="artist">
		<White v-if="isshowwhite"></White>
		<loading-mod v-if="isshow" class="loading"></loading-mod>
		<loading v-if="isshowloading" class="loading"></loading>
		<scroll class="content" :scrollY="true" ref="scroll" @scrollEnd='scrollEnd'>
			<div>
				<SingerMod :data='artists' class="artists" :Size="'40px'"></SingerMod>
				<div class="nothing" ref="nothing"></div>
			</div>
		</scroll>
	</div>
</template>





<script>
	import Scroll from '../../../../components/scroll/Scroll.vue'
	import {Search} from '../../../../network/search.js'
	import SingerMod from '../mod/SingerMod.vue'
	import LoadingMod from '../../../../components/loadingmod/LoadingMod.vue'
	import Loading from '../../../../components/loading/Loading.vue'
	import White from '../mod/White.vue'
	export default{
		name:'Singer',
		components:{
			Scroll,
			SingerMod,
			LoadingMod,
			Loading,
			White
		},
		created() {
	
		},
		data(){
			return{
				keyword:'',
				artists:[],
				offset:0,
				artistCount:0,
				isshowloading:true,
				isshow:false,
				isshowwhite:true,
			}
		},
		mounted() {
			this.$refs.scroll.scrollTo(0,-1,0)
		},
		methods:{
			//上拉刷新
			scrollEnd(position){
				if(this.artists.length < this.artistCount-3){
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
				Search(key,'',100,this.offset).then(res=>{
					console.log(res)
					this.artistCount = res.data.result.artistCount
					this.artists = this.artists.concat(res.data.result.artists) 	
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
					if(NewQuery.page == 4){
						if(NewQuery.key !== this.keyword){
						 this.isshowwhite = false
						 this.isshowloading = true
						 this.offset = 0
						 this.artists = []
						 this.Search(NewQuery.key)
						 this.$refs.scroll.scrollTo(0,0,0)
						}
					}
				}
			},
			'artists':function(Newartists,Oldartists){
				if(Newartists.length >= this.artistCount-3){
					this.$refs.nothing.style.height = 40+'px'
				}else{
					this.$refs.nothing.style.height = 80+'px'
				}
			}
		},
	}
</script>

<style scoped>
	.artist{
		position: relative;
		width: 100vw;
		height: 100vh;
		color: black;
 	}
	.artists img{
		width: 20px;
		height: 20px;
	}
	.content{
		height: calc(100vh - 71px);
	}
	.artists{
		margin: 5px 15px 0 15px;
	}
	.nothing{
		height:80px;
		width:100vw;
	}
</style>
