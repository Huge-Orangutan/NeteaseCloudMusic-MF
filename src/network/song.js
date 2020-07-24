import {request} from './request.js'

//获取歌单列表
export function getPlayList(uid){
	return request({
		url:'/user/playlist',
		params:{
			uid
		}
	})
}

//获取歌单详情
export function getPlayListDetail(id){
	return request({
		url: '/playlist/detail',
		params:{
			id
		}
	})
}

//获取歌曲详情
export function getSongDetail(ids){
	return request({
		url:'/song/detail',
		params:{
			ids
		}
	})
}

//获取歌曲地址
export function getSongUrl(id){
	return request({
		url:'/song/url',
		params:{
			id
		}
	})
}

//获取私人FM
export function getPersonalFM(){
	return request({
		url:'/personal_fm',
	})
}

//获取心动模式歌单
export function getLoveSong(id,pid){
	return request({
		url:'/playmode/intelligence/list',
		params:{
			id,
			pid
		}
	})
}

//获取推荐歌单
export function getRecommendSongList(){
	return request({
		url:'/personalized',
		params:{
			limit: '150'
		}
	})
}

export function getRecommendSong(){
	return request({
		url:'/recommend/songs'
	})
}

export function getDaySongList(){
	return request({
		url:'/top/playlist/',
		params:{
			limit:'100',
			cat:"官方",
		}
	})
}

export function getDayList(){
	return request({
		url:'/playlist/catlist',
	})
}

export function NewAlbum(){
	return request({
		url:'/top/album',
		params:{
			limit:'6'
		}
	})
}

export function getNewSong(){
	return request({
		url:'/top/song',
		params:{
			type:'0',
			limit:'200'
		}
	})
}



