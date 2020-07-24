<template>
	<scroll class="content" :scrollX = "true" ref= "scroll" :momentum = 'false' :stopPropagation = "true">
	<div class="MyMusicItem">
		<div class="MyMusicItem-Oneofthem" 
		:class="MyMusicItem(index)"
		v-for="(item,name,index) in detailtext" @click= "MyMusicClick(index)" >
		<div class="img">{{item.img}}</div>
		<div class="text">{{item.text}}</div>
		<div class="func">{{item.func}}</div>
		</div>
	</div>
	</scroll>
</template>

<script>
	import Scroll from '../../../../../components/scroll/Scroll.vue'
	export default {
		name: 'MyMusicItem',
		components:{
			Scroll
		},
		props:{
			detailtext:{
				type: Object,
				default:() => {}
		 },
		 MyLoveSong:{
			 type: Array,
			 default:() => {}
		 }
	 },
	 created() {
	 	// this.$refs.scroll.scrollTo(0,0,0)
	 },
	 activated() {
			this.$refs.scroll.scroll.refresh()
	 },
	 deactivated() {
	 	
	 },
	 mounted() {

	 },
	 methods:{
		 MyMusicItem(index){
			 return "MyMusicItem" + (index+1)
		 },
		 //传SongList到路由
		 MyMusicClick(index){
			 switch(index) {
			      case 0:
			this.$store.commit('ChangeSongList', this.MyLoveSong[0].id)
			this.$router.push('/playlist')
			         break;
			 } 
			},
	   },
	}
</script>


<style scoped>
	.MyMusicItem{
	 display: flex;
	 height: 132px;
	 padding-left: 10px;
	 padding-right: 10px;
	 width: 159vw;
	}
	.content{
		width: 100%;
		overFlow: hidden;
		position: relative;
	}
	.MyMusicItem-Oneofthem{
		background-color: #cecece;
		margin-left: 2px;
		margin-right: 2px;
		position: relative;
		text-align: center;
		border-radius: 5px;
		width: 33vw;
		color: rgb(102, 51, 0) ;
		font-weight : bold ;
	}
	.MyMusicItem1,.MyMusicItem2{
		color: white
	}
	.img{
		width: 100%;
		position: absolute;
		top:30%;
	}
	.img img {
		width: 21px;
		height: 21px;
	}
	.text{
		position: absolute;
		width: 100%;
		top: 45%;
		font-size: 12px;
		margin-top: 5px;
	}
	.func{
		width: 100%;
		position: absolute;
		bottom: 10%;
		font-size: 11px;
	  transform: scale(0.9);
	}
	
</style>