<template>
	<div class="MoreBar">
		<div class="OneOfThem" v-for="item in info">
			<div class="img">{{item.img}}</div>
			<div class="text">{{item.text}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'MoreBar',
		data(){
			return{
				info:[
					{
						img:'🔝',
						text:'每日推荐'
					},
					{
						img:'🔝',
						text:'歌单'
					},
					{
						img:'🔝',
						text:'排行'
					},
					{
						img:'🔝',
						text:'电台'
					},
					{
						img:'🔝',
						text:'私人FM'
					},
				],
			}
		}
	}
</script>

<style scoped>
	.MoreBar{
		padding-top: 50px;
		display: flex;
		margin: 0 20px 0 20px;
	}
	.OneOfThem{
		flex: 1;
		text-align: center;
		font-size: 12px;
	}
	.img{
		background-color:#dc000e;
		width: 35px;
		height: 35px;
		border-radius: 50%;
		margin: auto;
		font-size: 16px;
		line-height: 35px;
		margin-bottom: 5px;
	}
	.text{
		color: #000000;
		font-weight: 500;
	}
</style>
