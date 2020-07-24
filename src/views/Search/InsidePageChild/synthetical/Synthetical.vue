<template>
	<div class="Synthetical">
		<Loading v-if="isLoaing"></Loading>
		<scroll class="content" :scrollY="true" ref="scroll">
			<div>
				<song-list :songList ="songList"></song-list>
				<song :song="song"></song>
				<synthetical-video :video="video"></synthetical-video>
				<SyntheticalSearch :search="search"></SyntheticalSearch>
				<Mlog :mlog="mlog"></Mlog>
				<Theme :theme="theme"></Theme>
				<Singer :singer="singer"></Singer>
				<Album :album="album"></Album>
				<Radio :radio="radio"></Radio>
				<User :user="user"></User>
				<div class="nothing"></div>
			</div>
		</scroll>
		
	</div>
</template>

<script>
	import Scroll from '../../../../components/scroll/Scroll.vue'
	import Loading from '../../../../components/loading/Loading.vue'
	import {Search} from '../../../../network/search.js'
	import SongList from './SyntheticalChild/SongList.vue'
	import Song from './SyntheticalChild/Song.vue'
	import SyntheticalVideo from './SyntheticalChild/Video.vue'
	import SyntheticalSearch from './SyntheticalChild/Search.vue'
	import Mlog from './SyntheticalChild/Mlog.vue'
	import Theme from './SyntheticalChild/Theme.vue'
	import Singer from './SyntheticalChild/Singer.vue'
	import Album from './SyntheticalChild/Album.vue'
	import Radio from './SyntheticalChild/Radio.vue'
	import User from './SyntheticalChild/User.vue'
	export default{
		name:'Synthetical',
		components:{
			Scroll,
			SongList,
			Song,
			SyntheticalVideo,
			SyntheticalSearch,
			Loading,
			Mlog,
			Theme,
			Singer,
			Album,
			Radio,
			User
		},
		created() {
			this.Search()
		},
		mounted() {
			this.$refs.scroll.scrollTo(0,-1,0)
		},
		data(){
			return{
				isLoaing: true,
				keyword:this.$route.query.key,
				songList:{},
				song:{},
				video:{},
				search:{},
				mlog:{},
				theme:{},
				singer:{},
				album:{},
				radio:{},
			  user:{}
			}
		},
		methods:{
			Search(){
				Search(this.keyword,'',1018).then(res=>{
					this.songList = res.data.result.playList
					this.song = res.data.result.song
					this.video = res.data.result.video
					this.search = res.data.result.sim_query
					this.mlog = res.data.result.mlog
					this.theme = res.data.result.talk
					this.singer = res.data.result.artist
					this.album = res.data.result.album
					this.radio = res.data.result.djRadio
					this.user = res.data.result.user
					setTimeout(()=>{
						this.isLoaing = false
					},700)
				})
			},
		},
		watch:{
			'$route.query':{
				handler(NewQuery,OldQuery){
					if(NewQuery.page == 0){
						if(NewQuery.key !== this.keyword){
							this.keyword = NewQuery.key
						    this.Search()
							this.isLoaing = true
							this.$refs.scroll.scrollTo(0,0,0)	
						}
					}
				}
			},
		},
	}
</script>

<style scoped>
	.Synthetical{
		position: relative;
		width: 100vw;
		background-color: #FFFFFF;
	}
	.content{
		height: calc(100vh - 71px);
	}
	.nothing{
		height:50px;
		width:100vw;
	}
</style>
