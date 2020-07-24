<template>
	<div>
	<div class="OneOfThem" v-for="item in video">
		<div class="pic"><img :src='item.coverUrl' /></div>
		<div class="text">
			<div class="name">{{item.title}}</div>
			<div class="detail">{{durationTime(item.durationms)}} by {{item.creator[0].userName}}</div>
		</div>
	</div>
	</div>
</template>

<script>
	export default{
		name:'VideoMod',
		props:{
			video:{
				type:Array,
				default:()=>[]
			}
		},
		methods:{
			durationTime(time){
				time = time /1000
				let m = Math.floor(time/60)
				if(m < 10){
					m = '0'+ m
				}
				let s =  Math.floor(time - m*60)
				if(s < 10){
					s = '0' + s 
				}
				return m+':'+s
			}
		}
	}
</script>

<style scoped>
	.OneOfThem{
		display: flex;
		margin-bottom: 10px;
	}
	.pic{
		width: 100px;
	}
	.pic img{
		width: 100px;
		border-radius: 4px;
	}
	.text{
		flex-grow: 1;
		margin:auto 0 auto 0;
	}
	.name{
		position: relative;
		width: 100%;
		font-size: 12px;
		padding-bottom: 2px;
		padding-left:5px
	}
	.detail{
		font-size: 11px;
		color: #8c8c8c;
		transform: scale(0.95);
	}
</style>
