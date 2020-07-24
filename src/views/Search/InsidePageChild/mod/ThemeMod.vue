<template>
	<div>
		<div class="OneOfThem" v-for="item in data">
			<div class="pic"><img :src='item.shareCover.url' /></div>
			<div class="talk">
				<div class="talkName"># {{item.talkName}}</div>
				<div class="detail">{{item.follows}}关注 {{item.participations}}参与</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'ThemeMod',
		props:{
			data:{
				type:Array,
				default:()=>[]
			}
		}
	}
</script>

<style scoped>
	.OneOfThem{
		display: flex;
		overflow: hidden;
		align-items: center;
		padding-bottom: 8px;
	}
	.pic{
		width: 60px;
		height: 60px;
		overflow: hidden;
		border-radius: 4px;
	}
	.pic img{
		width: 60px;
		transform: scale(1.5);
		padding-right: 5px;
	}
	.talk{
		transform: scale(0.9);
	}
	.talkName{
		font-size: 14px;
		padding-bottom: 5px;
	}
	.detail{
		font-size: 12px;
		color: #818181;
	}
</style>
