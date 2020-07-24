<template>
	<scroll class="content MoreList" 
	:scrollX = "true" 
	ref= "scroll" 
	:swipeTime="0"
	 @scrollEnd = "scrollEnd"
	 @scroll="scroll"
	 >
	<div class="List" v-if="isShow">
		<div class="ListImg" v-for="item in detail" @click= "PushSongList(item.id)">
			<img class="ListPic" :src='item.picUrl'>
		  <div class="time">▶{{item.playCount}}</div>
			<div class="name">{{item.name}}</div>
		</div>
	</div>
	</scroll>
</template>

<script>
	import Scroll from '../../../../components/scroll/Scroll.vue'
	export default{
		name:"List",
		components:{
			Scroll
		},
		props:{
			detail:{
				type:Array, 
				default:()=>[]
			},
			isShow:{
				type:Boolean,
				default:true
			}
		},
		methods:{
			PushSongList(id){
				this.$store.commit('ChangeSongList',id) 
				this.$router.push('/playlist')
		  },
			scrollEnd(position){
				if(-position.x < 140){
					this.$refs.scroll.scrollTo(0,0,500)
				}
				else{
					this.$refs.scroll.scrollTo(-297,0,500)
				}
			},
			scroll(position){
				console.log(position)
				if(position.x == 0){
					
				}
			}
		}
	}
</script>

<style scoped>
	.content{
		width: 100%;
		height: 135px;
		overFlow: hidden;
		position: relative;
		
	}
	.List{
		display: flex;
		padding: 10px 0 0 15px;
		width: 188vw;
	}
	.ListImg{
		position: relative;
		width: 90px;
		height: 90px;
		margin-right: 10px;
	}
	.ListPic{
		position: relative;
		width: 90px;
		height: 90px;
		border-radius: 6px;
	} 
	.time{
		position: absolute;
	  top:0;
		left:50px;
		font-size: 11px;
	}
	.name{
		color: black;
		font-size: 10px;
		overflow:hidden;
		text-overflow:ellipsis;	
		display:-webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2; 
		margin-bottom: 25px;
	}
	
</style>
