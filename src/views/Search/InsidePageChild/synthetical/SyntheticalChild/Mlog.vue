<template>
	<TitleAndMore :data="mlog" :title="'Mlog'" v-if = "isUndefined">
		<MlogMod :data="mlog.mlogs" slot="middle"></MlogMod>
	</TitleAndMore>
</template>

<script>
	import TitleAndMore from './Mod/TitleAndMore.vue'
	import MlogMod from '../../mod/MlogMod.vue'
	export default{
		name:"Mlog",
		components:{
			TitleAndMore,
			MlogMod
		},
		data(){
			return{
				isUndefined: true
			}
		},
		props:{
			mlog:{
				type:Object,
				default:()=>{}
			}
		},
		watch:{
			'mlog':function(newmlog,oldmlog){
				if(newmlog == undefined){
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
