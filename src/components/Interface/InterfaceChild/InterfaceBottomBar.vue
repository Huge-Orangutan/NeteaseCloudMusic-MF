<template>
	<div class="BottomBar">
		<div class="ProgressBar">
		  <div class="NowTime">{{this.$store.state.CurrentTime}}</div>
			<div class="Progress" ref="Progress">
		  	<div class="back" ref="back">
			  	<div class="front" ref="front" 
			    :style="{left: ''+this.Progress+'px'}">
				    <div class="circle">
					  </div>
				  </div>
			  </div>
			</div>
			<div class="EndTime">{{this.EndTime}}</div>
		</div>
		<div class="PlayControl">
		  <div class="Mode" @click = "Mode"><img src='../../../assets/img/icon/whiteicon/xunhuan.png'></div>
	  	<div class="LastSong" @click = "LastSong"><img src='../../../assets/img/icon/whiteicon/shangyishou.png'></div>
  		<div class="Play" @click = "PlayOrStop" v-if="isShow == true"><img src='../../../assets/img/icon/whiteicon/bofang.png'></div>
			<div class="Stop" @click = "PlayOrStop" v-else><img src='../../../assets/img/icon/whiteicon/zanting.png'></div>
	  	<div class="NextSong" @click = "NextSong"><img src='../../../assets/img/icon/whiteicon/xiayishou.png'></div>
	  	<div class="PlayListSmall" @click = "PlayListSmall"><img src='../../../assets/img/icon/whiteicon/yinpinliebiao.png'></div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "InterfaceBottomBar",
		data(){
			return{
				Progress: '',
			}
		},
		computed:{
			isShow(){
				return this.$store.state.PlayControlIsShow
			},
			EndTime(){
				return this.$store.state.EndTime
			}
		},
		created() {
			this.PushEndTime()
			this.SetProgress()
			this.PushCurrentTime()
		},
		mounted() {
			this.TouchEventListener()
		},
		methods:{
			//刷新时设置保存的进度时间
			SetProgress(){
				this.Progress = localStorage.getItem('Progress',this.Progress)
			},
			PushCurrentTime(){
				this.$store.commit('PushCurrentTime',localStorage.getItem('CurrentTime'))
			},
			//发出结束时间
			PushEndTime(){
				this.$store.commit('PushEndTime',localStorage.getItem('EndTime'))
			},
			
			//进度条
			ChangeTranslateX(){
				this.Progress = -(this.$refs.front.offsetWidth-(this.$refs.front.offsetWidth/(parseInt(localStorage.getItem('EndTime'))))*(parseInt(localStorage.getItem('CurrentTime'))))
				localStorage.setItem('Progress',this.Progress)
			},
			
			//监听进度条触摸
			TouchEventListener(){
				let Progress = this.$refs.Progress
				Progress.addEventListener('touchstart',this.Progresstouchstart)	
				Progress.addEventListener('touchend',this.Progresstouchend)	
			},
			
			//拖动进度条
	    Progresstouchstart(e){
				this.$refs.front.style.left = e.changedTouches[0].clientX - this.$refs.front.offsetWidth*3/2 + 'px'
				let ChangedcurrentTime = (this.$refs.front.offsetWidth+e.changedTouches[0].clientX-this.$refs.front.offsetWidth*3/2)/(this.$refs.front.offsetWidth/(parseInt(localStorage.getItem('EndTime'))))
				this.$store.commit('PushCurrentTime',ChangedcurrentTime)
				this.$store.commit('PushPauseSong')
		  },
			Mode(){
				
			},
			
			//切换歌曲
			LastSong(){
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
			  if(this.$store.state.index !== 0){
          this.$store.commit('LastSong') 
				}
			},	
			NextSong(){
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
				this.$store.commit('NextSong')
			},
			
			//控制暂停开始
		  PlayOrStop(){
			   this.$store.state.PlayControlIsShow = !this.$store.state.PlayControlIsShow	 
			},
			
			//歌单列表
			PlayListSmall(){
				
			}
		},
		watch:{
			'$store.state.CurrentTime':function(){
				this.ChangeTranslateX()
			}
		}
	}
</script>

<style scoped>
	.BottomBar{
		position: absolute;
		width: 100%;
		bottom: 40px;
		height: 60px;
		z-index: 10;
	}
	.ProgressBar{
		display: flex;
		padding: 0 18px 0 18px;
		align-items: center;
		text-align: center;
	}
	.NowTime{
		font-size: 13px;
		width: 50px;
		padding-right: 10px;
	}
	.Progress{
		position: relative;
		flex: 1;
		width: 100%;
		opacity: 0.9;
		top:50%;
		height: 10px;
		overflow: hidden;
	}
	.back{
		position: absolute;
		width: 100%;
		background-color: #a6a6a6;
		opacity: 0.9;
		top:50%;
	  height: 2px;
		margin-top: -1px;
	}
	.front{
		position: absolute;
    width: 100%;
		height: 2px;
		background-color: #f8f8f8;
		left: -164px
	}
	.circle{
		position: absolute;
		height: 5px;
		width: 5px;
		background-color: #ffffff;
		border-radius: 50%;
		right: -5px;
		bottom: -2px;
	}
	.circleTouch{
		
	}
	.EndTime{
		font-size: 13px;
		width: 50px;
		padding-left: 10px;
	}
	.PlayControl{
		padding: 15px 22px 0 22px;
		display: flex;
		text-align: center;
		font-size: 25px;
	}
	.PlayControl > div {
		flex: 1;
		height: 40px;
		line-height: 40px;
	}
	.PlayControl > div img{
		width: 40px;
	}
</style>