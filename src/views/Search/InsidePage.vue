<template>
	<scroll class="content" 
	ref="scroll" 
	:scrollX='true' 
	:probeType='3'
	:momentum="false"
	:snap="{
		threshold: 0.6,
	}"
	@scrollEnd = 'scrollEnd'
	:stopPropagation="true"
	:click="false"
	>
	  <div class="InsidePage">
		  <synthetical></synthetical>
			<song></song>
			<cloud></cloud>
			<video-page></video-page>
			<singer></singer>
			<album></album>
			<song-list></song-list>
			<radio></radio>
			<user></user>
	  </div>
	</scroll>
</template>

<script>
	import Scroll from '../../components/scroll/Scroll.vue'
	import Synthetical from './InsidePageChild/synthetical/Synthetical.vue'
	import Song from './InsidePageChild/song/Song.vue'
	import Cloud from './InsidePageChild/cloud/Cloud.vue'
	import VideoPage from './InsidePageChild/video/Video.vue'
	import Singer from './InsidePageChild/singer/Singer.vue'
	import Album from './InsidePageChild/album/Album.vue'
	import SongList from './InsidePageChild/songlist/SongList.vue'
	import Radio from './InsidePageChild/radio/Radio.vue'
	import User from './InsidePageChild/user/User.vue'
	export default{
		name:'InsidePage',
		components:{
			Scroll,
			Synthetical,
			Song,
			Cloud,
			VideoPage,
			Singer,
			Album,
			SongList,
			Radio,
			User,
		},
		props:{
			index:{
				type:Number,
				default:0
			},
		},
		data(){
			return{
				PageIndex:0,
			}
		},
		computed:{
			keyword(){
				return this.$route.query.key
			}
		},
		created() {
	       
		  },
	  mounted() {
	    
	  },
		methods:{
			scrollEnd(position){
				if(this.PageIndex !== this.$refs.scroll.scroll.getCurrentPage().pageX){
				  this.PageIndex = this.$refs.scroll.scroll.getCurrentPage().pageX
				  this.$emit('PushPageIndex',this.PageIndex)
				}
			},
		},
		watch:{
			index:{
				handler(newindex, oldindex){
					this.$refs.scroll.scroll.goToPage(this.index, 0, 200*Math.abs(newindex-oldindex))
				  this.$router.replace({name:'page',query:{key:this.keyword,page:newindex}})
				},
			},
		}
	}
</script>

<style scoped>
	.content{
		width: 100%;
		overflow: hidden;
		position: absolute;
	}
	.InsidePage{
		display: flex;
		width: fit-content;
	}
</style>
