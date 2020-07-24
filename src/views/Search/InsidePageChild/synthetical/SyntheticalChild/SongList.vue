<template>
  <TitleAndMore :data="songList" :title="'歌单'"  v-if = "isUndefined">
    <SongListMod :data="songList.playLists" slot="middle"></SongListMod>
	</TitleAndMore>
</template>

<script>
	import TitleAndMore from './Mod/TitleAndMore.vue'
	import SongListMod from '../../mod/SongListMod.vue'
	export default{
		name:'SongList',
		components:{
			TitleAndMore,
			SongListMod
		},
		props:{
			songList:{
				type:Object,
				default:()=>{}
			}
		},
		data(){
			return{
		   isUndefined : true
			}
		},
		computed:{

		},
		mounted() {
  
		},
		watch:{
			'songList':function(newsongList,oldsongList){
				if(newsongList == undefined){
					this.isUndefined = false
				}else{
					this.isUndefined = true
				}
			}
		}
	}
</script>

<style scoped>
	.OneOfThem{
		display: flex;
		margin-bottom: 10px;
	}
	.pic{
		width: 65px;
		height: 65px;
	}
	.pic img{
		width: 65px;
		height: 65px;
		border-radius: 5px;
	}
	.text{
		flex-grow: 1;
		margin:auto 0 auto 0;
		overflow: hidden;
		white-space:nowrap;
	}
	.name{
		position: relative;
		width: 100%;
		font-size: 13px;
		padding-bottom: 2px;
		overflow: hidden;
		text-overflow:ellipsis;
		padding-left: 8px;
	}
	.detail{
		font-size: 11px;
		color: #8c8c8c;
		transform: scale(0.95);
	}
</style>
