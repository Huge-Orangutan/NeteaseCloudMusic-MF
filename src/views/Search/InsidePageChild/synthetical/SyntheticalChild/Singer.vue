<template>
	<TitleAndMore :data="singer" :title="'歌手'"	 v-if = "isUndefined">
	  <SingerMod :data='singer.artists' slot="middle"></SingerMod>
	</TitleAndMore>
</template>

<script>
	import TitleAndMore from './Mod/TitleAndMore.vue'
	import SingerMod from '../../mod/SingerMod.vue'
	export default{
		name:'Singer',
		components:{
			TitleAndMore,
			SingerMod
		},
		props:{
			singer:{
				type:Object,
				default:()=>{}
			},
		},
        data(){
		 	return{
		 		isUndefined: true
		 	}
		 },
		watch:{
			'singer':function(newsinger,oldsinger){
				if(newsinger == undefined){
				  this.isUndefined = false
				}else{
				  this.isUndefined = true
				}
			}
		},

	}
</script>

<style scoped>
</style>
