<template>
	<div class="SongListItem" >
		<div class="white-background"></div>
		<song-list-play-control 
		:SongNum="SongNum" 
		:playlistitem = "playlistitem"></song-list-play-control>
		<loading v-if="isLoading"></loading>
		<div class="OneOfThem" v-for="(item,index) in playlistitem"
		 @click = "PushSongList(index)">
			<div class="left">{{index+1}}</div>
			<div class="middle">
				<div class="SongName">
				 <div class="ItemName" :class="{ItemNameShow:isItemNameShow(index)}">{{item.name}}</div>
				 <div class="alia" v-show="isAliaShow(index)">（{{item.alia[0]}}）</div>
				</div>
				<div class="SongDetail">{{item.ar[0].name}}-{{item.al.name}}</div>
			</div>
			<div class="right">⚙</div>
			</div>
	</div>
</template>

<script>
	import Loading from '../../../components/loading/Loading.vue'
	import SongListPlayControl from './SongListPlayControl.vue'
	export default {
		name: 'SongListItem',
		components:{
			SongListPlayControl,
			Loading
		},
		data(){
		  return{
				isLoading: true,
			}
		},
		props:{
			playlistitem:{
				type: Array,
				default:() => []
			},
		  SongNum:{
				type: Number,
				default: 0
			}
		},
		methods:{
			PushSongList(index){
				//传歌单和index
				if(index == this.$store.state.index){
					this.$store.commit('ControlInterfaceShow')
				}
				this.$store.commit('PushSongList',this.playlistitem)
				this.$store.commit('PushSongListIndex',index)	
				
		  },
			//当有歌曲介绍的时候显示歌曲介绍
			isAliaShow(index){
				if(this.playlistitem[index].alia[0] !== undefined){
					return true
				}
			},
			//当没有歌曲介绍的时候，歌名超过容器的时候省略
			isItemNameShow(index){
				if(this.playlistitem[index].alia[0] == undefined){
					return true
				}
			},
		},
		watch:{
			'playlistitem':function(){
			   this.isLoading = false
			}
		},
	}
</script>
<style scoped>
	.SongListItem{
		position: relative;
		border-radius: 18px 18px 0 0;
		background-color: white;
		color: #000000;
		padding-bottom: 30px;
	}
	.white-background{
		background-color: white;
		position:absolute;
		height: 100vh;
		width: 100%;
		z-index: -1;
		transform: translateY(30px);
	}
	.ClickPlay{
		
		display: flex;
		padding: 12px 0 16px 0;
	}
	.button{
		width: 40px;
		text-align: center;
	}
	.buttonText{
		font-size: 14px;
	}
	.buttonText span{
		font-size: 12px;
		color: #909090;
	}
	.content{
		height: 100%;
		overflow: hidden;
		position: relative;
	}
	.OneOfThem{
		display: flex;
		padding-bottom: 12px;
	}
	.left{
		width: 40px;
		text-align: center;
		color: #6c6c6c;
		font-size: 11px;
	}
	.middle{
		flex: 1;
		overflow: hidden;
	}

	.SongName{
		font-size: 13px;
		display: flex;
		margin-right: 2em;
		padding-bottom: 5px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.ItemName{
		white-space:nowrap;
	}
	.ItemNameShow{
		overflow:hidden;
		text-overflow: ellipsis;
	}
	.alia{
		color: #9a9a9a;	
		white-space:nowrap;
		overflow:hidden;
		text-overflow: ellipsis;
	}
	.SongDetail{
		font-size: 12px;
		color: #888888;
		margin-right: 1em;
		white-space:nowrap;
		overflow:hidden;
		text-overflow: ellipsis;
	}
	.right{
		width: 24px;
		font-size: 15px;
	}
</style>
