<template>
	<div class='BottomBar' v-if = "isShowBottomBar">
		<audio :src = 'this.SongUrl' 
		ref="audio" id="audio" 
		class="BottomBarAudio" 
		@timeupdate = "PushCurrentTime"
		@canplay="PushEndTime"></audio>
		<div class="SongImg"  @click= "PushInterFace"><img :src= 'this.$store.state.PlayNow.img'></div>
		<div class="SongInfo"  @click= "PushInterFace">
			<div class="SongName" v-if="HowShowSongName" ref="SongNameDiv">{{this.$store.state.PlayNow.songName}}</div>
			<marquee class="SongName" v-else ref="SongNameDiv">{{this.$store.state.PlayNow.songName}}</marquee>
			<div class="SongAuthor">{{this.$store.state.PlayNow.authorName}}</div>
		</div>
		<div class= "PlayIcon"><div v-if="this.$store.state.PlayControlIsShow == true" @click="PlayOrStop"><img src='../../assets/img/icon/bofang.png'></div><div @click="PlayOrStop" v-else><img src='../../assets/img/icon/zanting.png'></div></div>
		<div class="PlayList"><img src="../../assets/img/icon/yinpinliebiao.png"></div>
	</div>
</template>

<script>
	import {getSongUrl,getSongDetail,checkSong} from '../../network/song.js'
	import {debounce} from '../../common/utils.js'
	export default{
		name:'BottomBar',
		data(){
			return{
				SongUrl: '',
				isShowBottomBar: false,
				HowShowSongName: true,
			}
		},
		created() {
			this.getInfo()			
			this.ShowBottomBar()
		},
		mounted() {
			this.ChangeLastSong()
		},
		methods:{
			//如果本地没值不出现bottombar
			ShowBottomBar(){
				if(JSON.parse(localStorage.getItem("playlist")) !== null ){
					this.isShowBottomBar = true
				}
			},
			//从本地储存获取信息
			getInfo(){
				if(localStorage.getItem("PlayNow") !== null){
			    this.$store.commit('PushPlayNow',JSON.parse(localStorage.getItem("PlayNow")))   	
				}
			},
			pushInfo(){
				if(this.$store.state.playlist == ''){
				  if(localStorage.getItem("playlist") !== null){
				    this.$store.commit('PushSongList',JSON.parse(localStorage.getItem("playlist")))	
				  }
				}
				if(this.$store.state.index == '' ){
				  if(localStorage.getItem("index") !== null){
				    this.$store.commit('PushSongListIndex',parseInt(localStorage.getItem("index")))
				  } 
				}
			},
			//跳转到interface
			PushInterFace(){
				this.$store.commit('ControlInterfaceShow')
			},
			//设置刷新后的CurrentTime
			SetCurrentTime(){
				this.$refs.audio.currentTime = parseInt(localStorage.getItem("CurrentTime"))
			},
			//自动播放
	        AutoPlay(){
				  const audio = document.getElementsByClassName('BottomBarAudio')[0];
				  this.$nextTick(()=>{
						audio.play()
						this.$store.state.PlayControlIsShow = false
					})
			},
			//改变进度
			AutoPlayFromCurrentTime(){
				  const audio = document.getElementsByClassName('BottomBarAudio')[0];
					audio.currentTime = localStorage.getItem('CurrentTime')
					this.$store.commit('PushPauseSong')
			},
			//控制暂停播放
			PlayOrStop(){
				this.$store.state.PlayControlIsShow = !this.$store.state.PlayControlIsShow
			},
			//获取歌曲url
			getSongUrl(){
				if(this.$store.state.index == this.$store.state.playlist.length){
					this.$store.commit('LetIndexZero')
				}
				this.HowShowSongName = true
				this.PlaySongId = JSON.parse(localStorage.getItem("playlist"))[parseInt(localStorage.getItem("index"))].id
				//获取正在播放音乐并传值到Vuex
			  getSongDetail(this.PlaySongId).then(res =>{
			    this.$store.commit('PushPlayNow',{
			      img: res.data.songs[0].al.picUrl,
			      songName: res.data.songs[0].name,
			      authorName: res.data.songs[0].ar[0].name,
			    })		
					//什么时候使用marquee
					this.$nextTick(()=>{
						if(this.$refs.SongNameDiv.clientWidth > 204){
						  this.HowShowSongName = false
					  }
					  else{
			  	    this.HowShowSongName = true
			      }
					})
					//得到Song的真实地址
				  this.$nextTick(()=>{
					  getSongUrl(this.PlaySongId).then(res => {
						  this.SongUrl = res.data.data[0].url
						  // 如果获取不到Url
						  this.$nextTick(()=>{
								if(this.SongUrl == null){	
								    this.$store.commit('NextSong')
							  }
						  })//如果获取不到Url
						  this.$nextTick(()=>{
							  this.AutoPlay()
						  })	
					  })
				  })
			  })
			},
			//播放完切换到下一首歌
			ChangeLastSong(){
			  var audio = document.getElementById("audio"); 
			  audio.loop = false;
			  if(audio.loop == false){
			    audio.addEventListener('ended', ()=> { 	
 			      this.$store.commit('NextSong')
						// this.$store.commit('PushCurrentTime',0)
			    });
				}
				
			},//成功
			//传入正在播放时间 
			PushCurrentTime(){
				let minutes = parseInt(this.$refs.audio.currentTime /60)
				let second = parseInt(this.$refs.audio.currentTime) % 60
	      if (minutes < 10){
					minutes = '0' + minutes
				}
				if (second < 10){
					second = '0' + second
				}
				let currentTime= (minutes + ':' + second) 
		    this.$store.commit('PushCurrentTime',this.$refs.audio.currentTime)  
			}, 
			//传入播放时长
			PushEndTime(){
			  
			  this.$store.commit('PushEndTime',this.$refs.audio.duration)
		   }		 
		 },
		 watch:{
		 //  SongUrl:function(){
			// 	 this.AutoPlay()
			// },	
			//监听歌单替换
			'$store.state.playlist':function(){
				// audio.pause()
			  if(this.isShowBottomBar == false){
		        this.ShowBottomBar()
			  }
			  this.getSongUrl()
			},
			//监听index变化
		  '$store.state.index':function(){
				// audio.pause()
				this.getSongUrl()
			},
			//监听PlayControlIsShow的变化暂停或播放
			'$store.state.PlayControlIsShow': function(){
				var audio = document.getElementById("audio");
				if(this.$store.state.PlayControlIsShow == true){
						audio.pause()
				}
				else{
					  if(this.SongUrl == ''){
							this.pushInfo()
							this.SetCurrentTime()
					}else{
						
						audio.play()
					}
				}
			},
			'$store.state.pause': function(){
				if(this.$store.state.pause == false){
					this.AutoPlayFromCurrentTime()
				}
			}
    },
	}
</script>

<style scoped>
	.BottomBar{
		background-color: rgba(255,255,255,0.9);
		height:40px;
		position: fixed;
		bottom:0px;
		left: 0;
		right: 0;
		z-index: 88888;
		box-shadow: 0px -0.1px 1px #888888;
		display: flex;
		color: #000000;
		padding: 0 10px 0 10px;
	}
	.SongImg{
		height: 40px;
		display: flex;
		align-items: center;
		width: 40px;
	}
	.SongImg img{
		width: 34px;
		height: 34px;
		border-radius: 50%;
	}
	.SongInfo{
		flex: 1;
		position: relative;
		overflow: hidden;
		white-space:nowrap;
	}
	.SongName{
		position: absolute;
		font-size: 13px;
		top: 4px;
		white-space:nowrap;
	}
	.SongAuthor{
		font-size: 11px;
		position: absolute;
		-webkit-transform-origin-x: 0;
		-webkit-transform: scale(0.9);
		bottom: 3px;
	}
	.PlayIcon,.PlayList{
		width: 25px;
		height: 100%;
		margin-left: 6px;
	}
	.PlayIcon img,.PlayList img{
    width: 30px;
		height: 30px;
		position: absolute;
		top: 50%;
		margin-top: -15px;
	}
</style>
