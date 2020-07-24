<template>
	<div class="SongList">
	<song-list-mask :detail="detail" :position = "position" class="SongListMask">
	</song-list-mask>	
	<song-list-nav-bar :left = "left" :right = "right" ref="NavBar" class="SongListNavBar">
	</song-list-nav-bar>
	<song-list-play-control 
	class="SongListPlayControl" 
	v-show="IsShowPlayControl" 
	:SongNum="SongNum" 
	:playlistitem = "playlistitem"></song-list-play-control>
	<scroll class="content" ref="SongListscroll" @scroll = "contentScroll" :scrollY = "true" :probeType= "3">
			<div>
		<div class="BackGroundImage" :style="{backgroundImage:'url('+(this.detail.BgI)+')'}"></div>
		<div class="SongListIntroduce" ref="SongListIntroduce">
		<song-list-detail :detail = "detail"></song-list-detail>
		<song-list-control :Control = "Control"></song-list-control>
		</div>
		<song-list-item :playlistitem = "playlistitem" :SongNum = "SongNum" ref="SongListItem"></song-list-item>
		</div>
		</scroll>
	</div>
</template>
<script>
	import SongListPlayControl from './SongListPlayControl.vue'
	import SongListMask from './SongListMask.vue'
	import SongListNavBar from './SongListNavBar.vue'
	import SongListDetail from './SongListDetail.vue'
	import SongListControl from './SongListControl.vue'
	import SongListItem from './SongListItem.vue' 
	import Scroll from '../../../components/scroll/Scroll.vue'
	import {getPlayListDetail} from '../../../network/song.js'
	export default {
		name: 'SongList',
		data(){
			return{
				left: {
					img: '◀',
					text: '歌单'
				},
				right: {
					img1: '🔍',
					img2: '更多'
				},
				detail:{
					BgI : '',
					Img : '',
				},
				Control:['评论','分享','下载','多选'],
				playlistitem:[],
				IsShowPlayControl: false,
				SongNum: 0,
				position: 0
			}
		},
		components:{
			SongListNavBar,
			SongListMask,
			SongListPlayControl,
			SongListDetail,
			SongListControl,
			SongListItem,
			Scroll
		},
		created() {
			this.getPlayListDetail()
		},
		 mounted(){

		},
		methods:{
			// PushBack(){
			// 	this.$router.back(-1)
			// },
			//获取歌单的大部分信息
			getPlayListDetail(){
				getPlayListDetail(this.$store.state.SongListId,).then(res => {
					console.log('歌单详细')
					console.log(res)
					let playlist = res.data.playlist
					this.detail.ImgUrl = playlist.coverImgUrl
					this.detail.Name = playlist.creator.nickname
					this.detail.Img = playlist.creator.avatarUrl
					this.detail.ListName = playlist.name
					this.detail.BgI = playlist.coverImgUrl
					this.detail.playCount = playlist.playCount
					this.playlistitem = playlist.tracks
					this.SongNum = playlist.trackCount
					// console.log('歌单单曲')
					// console.log(this.playlistitem)				
					//将加载动画关闭
					this.$nextTick(() =>{
					  this.$emit('ChangeisLoading')
					})	
				})
			},
			
       contentScroll(position){
				 this.position = -(position.y)
				 let opa = 100
				 if (-(position.y) >= 166){
					 this.IsShowPlayControl = true
				 }
				 else{
					 this.IsShowPlayControl = false
				 }
				 if (-(position.y) >= 160){
				 		opa = 0
				 }
				 if(-(position.y) > 56){
					 this.left.text = this.detail.ListName
				 }
				 else{
					 this.left.text = '歌单'
				 }
					this.$refs.SongListIntroduce.style.opacity = opa/100
			 },
		},
	}
</script>

<style scoped>
	.SongList{
		position: relative;
		background-color: #A9A9A9;
		height: 100vh;
		width: 100%;
		z-index: 99;
	}
	.SongListMask{
		z-index: 999;
	}
	.SongListPlayControl{
		position: fixed;
		z-index: 9;
		width: 100%;
		background-color: white;
		border-radius: 18px 18px 0 0 ;
		top: 35px;
		color: black;
	}
	.content{
		height: 100%;
		overflow: hidden;
		position: relative;
	}
	.BackGroundImage{
		position: absolute;
		height: 100%;
		width: 100%;
		top:0;
		background-repeat: no-repeat;
		filter: blur(60px);
		z-index: -1;
	}
</style>
