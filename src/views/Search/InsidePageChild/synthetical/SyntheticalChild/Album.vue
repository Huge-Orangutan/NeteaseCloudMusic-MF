<template>
	<TitleAndMore :data="album" :title="'专辑'" v-if = "isUndefined" >
		<AlbumMod :data="album.albums" slot="middle"></AlbumMod>
	</TitleAndMore>
</template>

<script>
	import TitleAndMore from './Mod/TitleAndMore.vue'
	import AlbumMod from '../../mod/AlbumMod.vue'
	export default{
		name:"Album",
		components:{
			TitleAndMore,
			AlbumMod
		},
		data(){
			return{
				isUndefined: true,
			}
		},
		props:{
			album:{
				type:Object,
				default:()=>{}
			}
		},
		watch:{
			'album':function(newalbum,oldalbum){
				if(newalbum == undefined){
				  this.isUndefined = false
				}else{
				  this.isUndefined = true
				}
			}
		}
	}
</script>

<style>
</style>
