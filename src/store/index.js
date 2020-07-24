import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		uid: '',
		SongListId: 84936709,
		PlayControlIsShow: true,
		isShow: false,
		play: true,
		PlayNow: {
			img: '',
			songName: '' ,
			authorName: '' ,
		},
		playlist: '',
		index: '',
		InterfaceisShow: false,
		CurrentTime: '00:00',
		pause: true,
		EndTime: '' ,
		opacity: 1,
		Choicecolor:'',
		SearchIndex:0
		
  },
  mutations: {
		LastSong(state){
			this.state.index = this.state.index-1
			localStorage.setItem('index',this.state.index)
		},
		NextSong(state){
			this.state.index = this.state.index + 1
			localStorage.setItem('index',this.state.index)
		},
		isShowChance(state){
			this.state.isShow = !this.state.isShow
		},
		
		//保存用户账号密码
		SaveUserId(state,id){
			localStorage.setItem('UserId',id)
		},
		SaveUserPassword(state,password){
			localStorage.setItem('UserPassword',password)
		},
		
		//保存用户Id
		SaveUserUid(state,uid){
			this.state.uid = uid
		},
		
		//点击切换歌单列表
		ChangeSongList(state,SongListId){
			this.state.SongListId = SongListId
		},
		
		//传点击的歌单和index
		PushSongList(state,playlist){
			localStorage.setItem('playlist',JSON.stringify(playlist))
			this.state.playlist = playlist
		},
		PushSongListIndex(state,index){
			localStorage.setItem('index',index)
			this.state.index =  index
		},
		
		//传入正在播放歌曲
		PushPlayNow(state,data){
			localStorage.setItem('PlayNow',JSON.stringify(data))
			this.state.PlayNow.img = data.img
			this.state.PlayNow.songName = data.songName
			this.state.PlayNow.authorName = data.authorName
		},
		
		//interface出现的控制
		ControlInterfaceShow(state){
			this.state.InterfaceisShow = !this.state.InterfaceisShow
		},
		
		//传歌曲进度
		PushCurrentTime(state,CurrentTime){
			localStorage.setItem('CurrentTime',CurrentTime)
			let minutes = parseInt(CurrentTime/60)
			let second = parseInt(CurrentTime) % 60
			if (minutes < 10){
			  minutes = '0' + minutes
			}
			if (second < 10){
			  second = '0' + second
			}
			let currentTime= (minutes + ':' + second) 
			this.state.CurrentTime = currentTime
		},
		
		//暂停歌曲并按照指定位置播放
		PushPauseSong(state){
			this.state.pause = !this.state.pause
		},
		
		//传歌曲时长
		PushEndTime(state,EndTime){
			localStorage.setItem('EndTime',EndTime)
			let minutes = parseInt(EndTime/60)
			let second = parseInt(EndTime) % 60
			if (minutes < 10){
			  minutes = '0' + minutes
			}
			if (second < 10){
			  second = '0' + second
			}
			let endTime= (minutes + ':' + second) 
			this.state.EndTime = endTime
		},
		
		//当到歌单最后一首时
		LetIndexZero(state){
			this.state.index = 0
			localStorage.setItem('index',this.state.index)
		}

  },
  actions: {
  },
  modules: {
  }
})
