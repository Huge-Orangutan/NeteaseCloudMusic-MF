<template>
	<TitleAndMore :data="video" :title="'视频'" v-if="isUndefined">
		<VideoMod :video = "video.videos" slot="middle"></VideoMod>
	</TitleAndMore>
</template>

<script>
	import TitleAndMore from './Mod/TitleAndMore.vue'
	import VideoMod from '../../mod/VideoMod.vue'
	export default{
		name:'Video',
		components:{
			TitleAndMore,
			VideoMod
		},
		data(){
			return{
				isUndefined: true
			}
		},
		props:{
			video:{
				type:Object,
				default:()=>{}
			}
		},
		watch:{
			'video':function(newvideo,oldvideo){
				if(newvideo == undefined){
					this.isUndefined = false
				}else{
					this.isUndefined = true
				}
			}
		}
	}
</script>

<style scoped>

</style>
