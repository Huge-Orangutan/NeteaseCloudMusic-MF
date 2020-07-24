<template>
	<div class="Cloud">
		<White v-if="isshowwhite"></White>
		<scroll>
			<div>
				
			</div>
		</scroll>
	</div>
</template>
<script>
	import Scroll from '../../../../components/scroll/Scroll.vue'
	import {Search,test} from '../../../../network/search.js'
	import White from '../mod/White.vue'
	export default{
		name:'Cloud',
		components:{
			Scroll,
			White
		},
		created() {
			
		},
		data(){
			return{
				keyword:'',
				isshowwhite:true,
			}
		},
		methods:{
			Search(key){
				this.keyword = key
				
			},
		},
		watch:{
			'$route.query':{
				handler(NewQuery,OldQuery){
					if(NewQuery.page == 2){
						if(NewQuery.key !== this.keyword){
							this.isshowwhite = false
						  this.Search(NewQuery.key)
						}
					}
				}
			}
		},
	}
</script>

<style scoped>
	.Cloud{
		position: relative;
		width: 100vw;
		height: 100vh;
		background-color: #2747b8;
	}
</style>
