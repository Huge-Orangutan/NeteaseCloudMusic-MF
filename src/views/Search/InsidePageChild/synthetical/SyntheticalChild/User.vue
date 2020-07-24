<template>
	<TitleAndMore :data="user" :title="'用户'" v-if = "isUndefined">
	  <UserMod :data='user.users' slot="middle"></UserMod>
	</TitleAndMore>
</template>

<script>
	import TitleAndMore from './Mod/TitleAndMore.vue'
	import UserMod from '../../mod/UserMod.vue'
	export default{
		name:'User',
		components:{
			TitleAndMore,
			UserMod
		},
		props:{
			user:{
				type:Object,
				default:()=>{}
			},
		},
		data(){
			return{
				isUndefined : true
			}
		},
		methods:{
			
		},
		mounted() {

		},
		watch:{
			'user':function(newuser,olduser){
				if(newuser == undefined){
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
