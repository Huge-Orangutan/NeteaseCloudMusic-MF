<template>
	<TitleAndMore :data = 'theme' :title="'主题'" v-if = "isUndefined">
		<ThemeMod :data = "theme.talks" slot="middle"></ThemeMod>
	</TitleAndMore>
</template>

<script>
	import TitleAndMore from './Mod/TitleAndMore.vue' 
	import ThemeMod from '../../mod/ThemeMod.vue'
	export default{
		name:'Theme',
		components:{
			TitleAndMore,
			ThemeMod
		},
		data(){
			return{
				isUndefined:true
			}
		},
		props:{
			theme:{
				type:Object,
				default:()=>{}
			}
		},
		watch:{
			'theme':function(newtheme,oldtheme){
				if(newtheme == undefined){
					this.isUndefined = false
				}
				else{
					this.isUndefined = true
				}
			}
		}
	}
</script>

<style>
</style>
