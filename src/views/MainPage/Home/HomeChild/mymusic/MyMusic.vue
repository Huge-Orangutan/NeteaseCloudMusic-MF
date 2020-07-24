<template>
	<div class="MyMusic">
		<mid-text :midtext="midtext" class="MidText" ><div slot="right">更多</div></mid-text>
		<my-music-item :detailtext = "detailtext" :MyLoveSong = "MyLoveSong"></my-music-item>
	</div>
</template>

<script>
	import MidText from '../midtext/MidText.vue'
	import MyMusicItem from './MyMusicItem.vue'
	export default{
		name: 'MyMusic',
		components:{
			MidText,
			MyMusicItem,
		},
		props:{
			MyLoveSong:{
				type: Array,
				default:() => []
			}
		},
		data(){
			return{
				midtext:['我的音乐'],
				detailtext:{
					Fmusic:{img:'♥',text:'我喜欢的音乐',func:'心动模式'},
					Pmusic:{img:'⏺',text:'私人FM',func:'来这里找好歌'},
					A:{img:'🈷',text:'Sati空间',func:''},
					B:{img:'🐱‍',text:'ACG专区',func:''},
					C:{img:'✨',text:'私藏推荐',func:''},
				},
			}
		},
	}
</script>

<style scoped>
	.MidText{
		color: black;
		padding-bottom: 10px;
	}
</style>
