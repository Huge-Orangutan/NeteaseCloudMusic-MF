<template>
	<transition name="Search" mode="in-out">
  <div class="Search">
		<search-bar :PageIndex = 'PageIndex'></search-bar>
		<control-bar 
		v-if="isShow" 
		:BarText="BarText" 
		class="ControlBar" 
		@PushIndex="PushIndex"
		:PageIndex = 'PageIndex'></control-bar>
		<inside-page v-if="isShow" :index="index" @PushPageIndex="PushPageIndex"></inside-page>
		<outer-page v-else></outer-page>
  </div>
	</transition>
</template>

<script>
	import SearchBar from './SearchChild/SearchBar.vue'
	import ControlBar from '../../components/controlbar/ControlBar.vue'
	import InsidePage from './InsidePage.vue'
	import OuterPage from './OuterPage.vue'
  export default {
    name: 'Search',
	  components:{
	  	SearchBar,
			ControlBar,
			InsidePage,
			OuterPage
	  },
		data(){
			return{
				BarText:['综合','单曲','云村','视频','歌手','专辑','歌单','主播电台','用户'],
				index:0,
				PageIndex:0,
			}
		},
		computed:{
			isShow(){
				if(this.$route.path == '/search/page'){
	        return true
				}else{
					return false
				}
		  }
		},
		methods:{
			//传点击的位置
			PushIndex(index){
				this.index = index
			},
			//内页传Index回父级
			PushPageIndex(index){
				this.PageIndex = index
			},
		},
		watch:{
			'$route':function(newroute,oldroute){
				if(newroute.path == '/search'){
					this.index = 0
				}
			}
		}
  }
</script>
<style scoped>
	.Search{
		position: fixed;
		z-index: 5555;
		width: 100vw;
		height: 100vh;
	}
	.Search-enter, .Search-leave-to {
	      transform: translate3d(0, 100%, 0);
				opacity: 0;
	}
	.Search-leave, .Search-enter-to {
	      transform: translate3d(0, 0, 0);
				opacity: 1;
	}
	.Search-enter-active, .Search-leave-active {
	      transition: all 0.3s
	}
	.ControlBar{
		margin-top: 45px;
	}
</style>
