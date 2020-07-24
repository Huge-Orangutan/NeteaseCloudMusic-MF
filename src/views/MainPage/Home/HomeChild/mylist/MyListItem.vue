<template>
	<div>
		<div class="createdsSongList" v-if="currentIndex === 0">
			<div class="OneOfThem" v-for="item in createdsSongList" @click = "ChangeSongListId(item)">
				<div class="img"><img :src='item.coverImgUrl'></div>
			<div class="text">	
				<div class="textName">{{item.name}}</div>
				<div class="textNum">{{item.trackCount}}首</div>
			</div>
			</div>
			<!-- ————————添加———————— -->
			<div class="OneOfThem">
			<div class="Addimg"><div class="AddIcon">➕</div></div>
			<div class="textAdd">	
          创建歌单
			</div>
			</div>
			<!-- ————————-添加———————— -->
		</div>
		<div class="collectSongList" v-else-if="currentIndex === 1">
			<div class="OneOfThem" v-for="item in collectSongList" @click = "ChangeSongListId(item)">
				<div class="img"><img :src='item.coverImgUrl'></div>
			<div class="text">
				<div class="textName">{{item.name}}</div>
				<div class="textNum">{{item.trackCount}}首</div>
			</div>
			</div>
		</div>
		<div class="SongListAssistant" v-else-if="currentIndex === 2">
			3
		</div>
	</div>
</template>

<script>
	export default {
		 name: 'MyListItem',
		 props:{
			 currentIndex:{
				 type: Number,
				 default: 0
			 },
			 mySongList:{
				 type: Array,
				 default: () => []
			 },
		 },
		 data(){
			 return{
				 createdsSongList: [],
				 collectSongList: []
			 }
		 },
		 created() {
		 	this.FilterSongList()
		 },
		 methods:{
			 FilterSongList(){
				 this.createdsSongList = this.mySongList.filter((item,index,arr) => item.userId == this.$store.state.uid)
				 this.collectSongList = this.mySongList.filter((item,index,arr) => item.userId !== this.$store.state.uid)
			 },
			 ChangeSongListId(item){
				 this.$store.commit('ChangeSongList',item.id)
				 this.$router.push('/playlist')
			 }
		 },
		 watch:{
			 mySongList(){
				 this.FilterSongList()
			 }
		 }
	}
</script>

<style scoped>
	.createdsSongList,.collectSongList,.SongListAssistant{
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}
	div{
		color: black
	}

	.OneOfThem{
		display: flex;
		font-size: 11px;
		width: 45vw;
		padding-top: 10px;
	}	
	.img{
		width: 50px;
	}
	.img img{
		width: 50px;
		height: 50px;
		border-radius: 50px;
	}
	.text{
		padding-left: 5px;
	}
	.textName{
 letter-spacing: 0;
 overflow: hidden;
 display: -webkit-box;
 text-overflow: ellipsis;
 -webkit-line-clamp: 2; 
 -webkit-box-orient: vertical;
	}
	.textNum{
		position: relative;
		transform: scale(0.95);
		bottom: 0;
	}
	.Addimg{
		background-color: #9f9f9f;
		width: 50px;
		height: 50px;
		border-radius: 50px;
		position: relative;
		text-align: center;
		line-height: 50px;
	}
	.AddIcon{
		font-size: 15px;
		}
	.textAdd{
		vertical-align: middle;
		line-height: 50px;
		padding-left: 5px;
	}
</style>
