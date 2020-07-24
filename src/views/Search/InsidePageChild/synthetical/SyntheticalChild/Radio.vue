<template>
	<TitleAndMore :data="radio" :title="'电台'" v-if ="isUndefined">
		<RadioMod :data="radio.djRadios" slot="middle"></RadioMod>
	</TitleAndMore>
</template>

<script>
	import TitleAndMore from './Mod/TitleAndMore.vue'
	import RadioMod from '../../mod/RadioMod.vue'
	export default{
		name:"Radio",
		components:{
			TitleAndMore,
			RadioMod
		},
		data(){
			return{
				isUndefined:true,
			}
		},
		props:{
			radio:{
				type:Object,
				default:()=>{}
			}
		},
		watch:{
			'radio':function(newradio,oldradio){
				if(newradio == undefined){
					this.isUndefined = false
				}
				else{
					this.isUndefined = true
				}
				}
			}
		
	}
</script>

<style scoped>
</style>
