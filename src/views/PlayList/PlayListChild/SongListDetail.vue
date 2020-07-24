<template>
	<div class="SongListDetail">
		<div class="ListFirstImg">
			<img class="ListFirstPic" :src='detail.ImgUrl'>
		  <div class="time">▶{{detail.playCount}}</div>
		</div>
		<div class="ListText">
			<div class="ListName">{{detail.ListName}}</div>
			<div class="Name"><img :src='detail.Img'><div>{{detail.Name}}</div></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SongListDetail',
		props:{
			detail:{
				type:Object,
				default:() => {}
			},
		},
	}
</script>
<style scoped>
	.SongListDetail{
		display: flex;
		padding: 50px 0 0 15px;
	}
	.ListFirstImg{
		position: relative;
		width: 100px;
		height: 100px;
	}
	.ListFirstPic{
		width: 100px;
		height: 100px;
	} 
	.time{
		position: absolute;
    top:0;
		left:50px;
		font-size: 11px;
	}
	.ListText{
		padding-left:13px;
	}
	.ListName{
		padding-right: 20px;
		font-size: 16px;
		font-weight: bold;
	}
	.Name{
		font-size: 11px;
		margin-top: 10px;
		display: flex;
		line-height: 20px;
	}
	.Name > img {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		padding-right: 6px;
	}
	
</style>
