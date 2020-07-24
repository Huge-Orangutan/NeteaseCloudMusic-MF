<template>
	<div>
		<div class="ClickPlay" @click = "PushSongList">
			<div class="button">▶</div>
			<div class="buttonText">播放全部<span>(共{{this.SongNum}}首)</span></div>
			<div>收藏</div>
		</div></div>
</template>

<script>
	export default {
		name:'SongListPlayControl',
		props:{
			SongNum:{
				type: Number,
				default: 0
			},
			playlistitem:{
				type: Array,
				default:() => []
			},
		},
		computed:{

		},
		methods:{
			PushSongList(){
				// this.$emit('PushSongId',index)
				//点击变歌曲ID
				// this.$store.commit('IndexNull')
				// console.log(this.$store.state.SongId)
				//点击传当前歌单
        this.$store.commit('PushSongList',this.playlistitem)
				this.$store.commit('PushSongListIndex',0)
			},
		},
	}
</script>

<style scoped="">
	.ClickPlay{
		display: flex;
		padding: 10px 0 16px 0;
		color: black;
		background-color: white;
		border-radius: 18px 18px 0 0;
		
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
</style>
