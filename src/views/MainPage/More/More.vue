<template>
  <div class="more">
		<scroll class="content" ref="scroll" :scrollY="true">
		<div class="incontent">
	    <more-bar></more-bar>
			<recommend></recommend>
			<scene></scene>
			<new></new>
		</div>
		</scroll>
	</div>	
</template>

<script>
	import Scroll from '../../../components/scroll/Scroll.vue'
	import MoreBar from './MoreChild/morebar/MoreBar.vue'
	import Recommend from './MoreChild/recommend/Recommend.vue'
	import StyleRecommend from './MoreChild/stylerecommend/StyleRecommend.vue'
	import Scene from './MoreChild/scene/Scene.vue'
	import New from './MoreChild/new/New.vue'
export default {
  name: 'More',
	components:{
		Scroll,
		MoreBar,
		Recommend,
		StyleRecommend,
		Scene,
		New
	},
	data(){
		return{
			
		}
	},
	mounted() {
    this.test()
	},
  methods:{
     test(){
			 this.$refs.scroll.scrollTo(0,-0.0000000000001,0)
		 }
	}
}
</script>
<style scoped>
.more{
		position: fixed;
		height: 100vh;
		width: 100vw;
		z-index: 551;
	}
	.content{
	height: 100%;
	overflow: hidden;
	position: relative;
	}	
	.incontent{
		padding-bottom: 50px;
	}
</style>
