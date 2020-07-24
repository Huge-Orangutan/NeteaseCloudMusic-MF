<template>
  <div class="home" id="home" ref="home">
	  <Scroll class="content" :scrollY = "true" :momentum = "false" ref="scroll">
			<div>
			<!-- 自选背景部分 -->
			<div id = "home-bg" 
			class = "home-bg" 
			:style="{backgroundImage:'url('+(bgimg)+')'}" 
			ref= "homebg">
			<div class="mask">
			<my-data :myData="myData"></my-data>
		  <tab-control :tab = 'tab'></tab-control>
			</div>
			</div>
			<!-- 白色背景部分 -->
			<div class="midcontent">
			<my-music :MyLoveSong ="MyLoveSong"></my-music>
			<my-list :mySongList = "mySongList" class="mylist" ></my-list>
			</div>
			</div>
	  </Scroll>
  </div>
</template>

<script>
	//滚动
	import Scroll from '../../../components/scroll/Scroll.vue'
	//获取个人信息
	import {getAccountInformation} from '../../../network/register.js'
	import MyData from './HomeChild/mydata/MyData.vue'
	
	import TabControl from './HomeChild/tabcontrol/TabControl.vue'
	
	import MyMusic from './HomeChild/mymusic/MyMusic.vue'
	//获取喜欢的歌曲
	import {getPlayList,getPersonalFM,getLoveSong} from '../../../network/song.js'
	import MyList from './HomeChild/mylist/MyList.vue'
    export default {
      name: 'Home',
      components: {
        Scroll,
				TabControl,
				MyMusic,
				MyData,
				MyList,
      },
	  data(){
		  return{
		    tab:{
					LocalSong:{
						name: '本地音乐',
						image: '🎵',
					},
					DownLoadManage:{
						name: '下载管理',
						image: '⏬',
					},
					AiRadio:{
						name: '我的电台',
						image: '📻',
					},
					MyCollect:{
						name: '我的收藏',
						image: '📑',
					},
					NewSong:{
						name: '关注新歌',
						image: '🆕',
					},
					},//填写需要的Tab
				myData:{
					name:'',
					picUrl:'',
				},
				bgimg: '',
				MyLoveSong: [],
				mySongList: [],
				StartX: '',
				SlideX: '',
				EndX: '',
		  }
	  },
		created() {
			//执行getAccountInformation
			this.getAccountInformation()
			// this.getFavouriteSong()
		},
		mounted() {
      
		},
		methods:{
			//个人信息
			getAccountInformation(){
				getAccountInformation(localStorage.getItem('UserId'),localStorage.getItem('Password')).then(res =>{
					console.log('个人信息')
					console.log(res)
					let data = res.data
					this.myData.name = data.profile.nickname
					this.myData.picUrl =  data.profile.avatarUrl
					this.bgimg =  data.profile.backgroundUrl
					this.uid = data.profile.userId
					this.$store.commit('SaveUserUid',this.uid)
				//获取歌单列表
				  getPlayList(this.uid).then(res => {
					  this.MySongList = res.data.playlist
					  this.MyLoveSong = (this.MySongList).filter((item, index, arr) => item.specialType == 5)
				  	this.mySongList = (this.MySongList).filter((item, index, arr) => item.specialType !== 5)
				  })//成功
					
				// getLoveSong('84936709','4920685').then(res =>{
				// 	console.log(res)
				// })
			  })
			},//第一个
			
			
		 },
    }
</script>
<style scoped>
	.home{
		position: fixed;
		height: 100vh;
		width: 100vw;
		z-index: 551;
	}
	.content{
	height: 100%;
	overflow: hidden;
	position: relative;
	}	
	.home-bg{
		height: 180px;
		background-position: 0px 0px;
		background-size: 100% ;
		background-repeat: no-repeat;
	}
	.mask{
		background-color: rgba(35, 35, 35, 0.48);
		height: 100%;
		}
	.midcontent{
		background-color: white;
		margin-top: -15px;
		padding-top: 10px;
		border-radius: 18px 18px 0 0;
	}
</style>
