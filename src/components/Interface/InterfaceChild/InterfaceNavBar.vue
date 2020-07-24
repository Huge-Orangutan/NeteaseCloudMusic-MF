<template>
	<div class="NavBar">
		<div class="PushBack" @click = "PushBack">◀</div>
		<div class="info">
			<div class="SongName">{{this.$store.state.PlayNow.songName}}</div>
			<div class="AuthorName">{{this.$store.state.PlayNow.authorName}}</div>
		</div>
		<div class="share">分享</div>
	</div>
</template>

<script>
	export default{
		name: "InterfaceNavBar",
		methods:{
			PushBack(){
				this.$store.commit('ControlInterfaceShow')
			},
		},
	}
</script>

<style scoped>
	.NavBar{
		position: absolute;
		width: 100%;
		top: 0;
		height: 30px;
		display: flex;
		align-items: center;
		padding-top: 5px;
	}
	.PushBack{
		width:45px ;
		text-align: center;
	}
	.info{
		flex: 1;
		overflow: hidden;
		white-space: nowrap;
		
	}
	.SongName{
		font-size:15px ;
		font-weight: 600;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.AuthorName{
		font-size:12px ;
		color: #f0f0f0;
		font-weight: 500;
	}
	.share{
		width:45px ;
		font-size: 10px;
	}
</style>
