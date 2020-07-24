<template>
	<TitleAndMore :title="'相关搜索'" :data="search" v-if = "isUndefined">
		<div class="content" slot="middle">
			<div class="OneOfThem" v-for="item in search.sim_querys" @click="PushKey(item.keyword)">{{item.keyword}}</div>
		</div>
	</TitleAndMore>
</template>

<script>
	import TitleAndMore from './Mod/TitleAndMore.vue'
	export default{
		name:"Search",
		components:{
			TitleAndMore
		},
		props:{
			search:{
				type:Object,
				default:()=>{}
			}
		},
		methods:{
			PushKey(key){
				this.$router.replace({path:'/search/page',query:{key:key,page:this.$route.query.page}})
			}
		},
        data(){
		 	return{
		 		isUndefined: true
		 	}
		 },
		watch:{
			'search':function(newsearch,oldsearch){
				if(newsearch == undefined){
				  this.isUndefined = false
				}else{
				  this.isUndefined = true
				}
			}
		},
	}
</script>

<style scoped>
	.content{
		display: flex;
		width: 100vw;
		flex-wrap:wrap;
	}
	.OneOfThem{
		background-color: #dadada;
		color: #181818;
		height: 20px;
		font-size: 12px;
		padding: 2px 10px 2px 10px;
		margin: 0 4px 10px 4px;
		line-height: 18px;
		border-radius: 20px;
		font-weight: 530;
		vertical-align: middle;
	}
</style>
