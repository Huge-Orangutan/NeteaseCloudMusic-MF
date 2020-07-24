<template>
	<TitleAndMore class="Song" :data="song" :title="'单曲'" v-if="isUndefined">
	  <SongMod :list='song.songs' slot="middle" @PushIndex="PushIndex"></SongMod>
	</TitleAndMore>
</template>

<script>
	import TitleAndMore from './Mod/TitleAndMore.vue'
	import SongMod from '../../mod/SongMod.vue'
	export default{
		name:'Song',
		components:{
			TitleAndMore,
			SongMod
		},
		props:{
			song:{
				type:Object,
				default:()=>{}
			},
		},
		data(){
			return{
			  ChangeMore:{
					marginLeft: '-15px'
				},
			  isUndefined:true
			}
		},
		methods:{
			PushIndex(index){
				this.$store.commit('PushSongList',this.song.songs)
				this.$store.commit('PushSongListIndex',index)	
			},
		},
		watch:{
			'song':function(newsong,oldsong){
				if(newsong == undefined){
					this.isUndefined = false
				}else{
					this.isUndefined = true
				}
			}
		}
	}
</script>

<style scoped>
  .Song{
		padding: 0 0 0 15px;
	}
</style>
