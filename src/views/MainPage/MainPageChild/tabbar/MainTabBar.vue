<template>
	<div class="MainTabBar">
	<tab-bar>
		<div slot="left" @click = "MenuClick">菜单</div>
		<div slot="center"><tab-bar-item :Middle = "Middle"></tab-bar-item></div>
		<div slot="right" @click = "SearchClick">🔍</div>
	</tab-bar>
	</div>
</template>

<script>
	import TabBar from './TabBar.vue'
	import TabBarItem from './TabBarItem.vue'
	export default{
		name:'MainTabBar',
		components:{
			TabBar,
			TabBarItem
		},
		data(){
			return{
				Middle:['我的','发现']
			}
		},
		methods:{
			//跳转path到search
			SearchClick(){
				if(this.$route.path !== '/search'){
				this.$router.push('/search')
				}
			},
			//运行Vuex里的mutations
			MenuClick(){
				this.$store.commit('isShowChance')
		  }
	  },
}
</script>

<style scoped>
.MainTabBar{
	position: absolute;
	height:40px;
	line-height: 35px;
	z-index: 666;
	top: 0;
	left: 0;
	right: 0;
}
</style>
