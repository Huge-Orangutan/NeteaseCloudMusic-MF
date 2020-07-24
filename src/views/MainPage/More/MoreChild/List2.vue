<template>
	<scroll class="content" 
	:scrollX = "true" 
	ref= "scroll" 
	:swipeTime="0"
	@scrollEnd = "scrollEnd">
	<div class="List">
		<div class="ListImg" v-for="item in detail" @click= "PushSongList">
      <img class="ListPic" :src='item.picUrl'>
			<div class="name">{{item.name}}</div> 
		</div>
	</div>
	</scroll>
</template>

<script>
	import Scroll from '../../../../components/scroll/Scroll.vue'
	export default{
		name:"test",
		components:{
			Scroll
		},
		props:{
			detail:{
				type:Array, 
				default:()=>[]
			},
		},
		methods:{
			PushSongList(){
				this.$emit('PushSongList')
		  },
			scrollEnd(position){
				if(-position.x < 140){
					this.$refs.scroll.scrollTo(0,0,500)
				}
				else{
				  this.$refs.scroll.scrollTo(-289,0,500)
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.content{
		width: 100%;
		overFlow: hidden;
		position: relative;
	}
	.List{
		display: flex;
		padding: 10px 0 0 15px;
		width: 170%;
		flex-direction: column;
		flex-wrap: wrap;
		height: 180px;
		padding-right: 50px;
	}
	.ListImg{
		width: 90vw;
		position: relative;
		display: flex;
		padding-top: 10px;
	}
	.ListPic{
		position: relative;
		width: 50px;
		height: 50px;
		border-radius: 6px;
		padding-right: 10px;
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
	}
	</style>