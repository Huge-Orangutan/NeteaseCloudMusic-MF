<template>
	<div class="New">
		<tab-bar>
	    <div slot="text">{{date}}</div>
	    <div slot="explain"><span class="newsong" :class="{click:isClick == true}" @click="newsongclick">新歌</span>
			<span class="newalbum" :class="{click:isClick == false}" @click="newalbumclick">新蝶</span></div>
	    <div slot="control" v-if="isClick">更多新碟</div>
			<div slot="control" v-else>更多新歌</div>
		</tab-bar>
		<list :detail="albumdetail" v-if="isClick"></list>
		<list :detail="songdetail" v-else></list>
	</div>
</template>

<script>
	import {NewAlbum,getNewSong} from '../../../../../network/song.js'
	import TabBar from '../TabBar.vue'
	import List from '../List2.vue'
	export default{
		name:'New',
		components:{
			TabBar,
			List
		},
		data(){
			return{
				AlbumId:'',
				albumdetail:[],
				songdetail: [],
				isClick: false
			}
		},
		created() {
			this.NewAlbum()
			this.NewSong()
			this.currentTime()
		},
		methods:{
			currentTime(){
				 let date = new Date() ;
				 let month = date.getMonth() + 1 ; 
         let nowDate = date.getDate() ;
				 this.date = month + '月' + nowDate + '日'
			},
			//获取歌曲信息
			NewSong(){
				getNewSong().then(res=>{
					this.songdetail = res.data.data.slice(0,6)
					for(let i in this.songdetail){
					  this.songdetail[i].picUrl = this.songdetail[i].album.picUrl
					}
				})
			},
			NewAlbum(){
				NewAlbum().then(res=>{
					console.log(res)
					this.albumdetail = res.data.albums
				})
			},
			newsongclick(){
				this.isClick = false
			},
			newalbumclick(){
				this.isClick = true
			}
		},
	}
</script>

<style scoped>
	.newsong{
		padding-right:10px;
		border-right: 1px solid;
		border-color: #000000;
	}
	.newalbum{
		padding-left:10px;
	}
	.click{
		color: #888888;
	}
</style>
