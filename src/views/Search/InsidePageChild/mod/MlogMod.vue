<template>
	<div class="MlogMod">
		<div class="OneOfThem" v-for="item in data">
			<div class="pic-content">
				<div class="pic"><img :src='item.resource.mlogBaseData.coverUrl'></div>
				<div class="content" ># {{issurvival()}}</div>
				</div>
			<div class="text">{{item.resource.mlogBaseData.text}}</div>
			<div class="detail">
				<div class="name"><img :src='item.resource.userProfile.avatarUrl'> {{item.resource.userProfile.nickname}}</div>
				<div class="likedCount">{{item.resource.mlogExtVO.likedCount}}赞</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'MlogMod',
		props:{
			data:{
				type:Array,
				default:()=>[]
			}
		},
		methods:{
			issurvival(){
			  for(let i in this.data){
                 if(this.data[i].resouce.mlogBaseData.talk.talkname == null){
					 console.log(1)
				 }
			  }
			}
		}
	}
</script>

<style scoped>
	.MlogMod{
		position: relative;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding-bottom: 15px;
	}
	.OneOfThem{
		position: relative;
		width: 48%;
		box-shadow: 0px 0px 10px #c2c2c2;
		border-radius: 4px;
	}
	.pic-content{
		position: relative;
	}
	.pic{
		height: 48vw;
		overflow: hidden;
		border-radius: 4px;
	}
	.pic img{
		width: 100%;
	}
	.content{
		position: absolute;
		bottom: 0;
		border-radius: 20px;
		background-color: rgba(0,0,0,0.5);
		color: white;
		font-size: 12px;
		margin: 2px;
		padding: 2px 4px 2px 4px;
		transform: scale(0.9);
	}
	.text{
		font-size: 12px;
	  margin:10px 0 12px 5px;
		overflow:hidden; 
		text-overflow:ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2;
	}
	.detail{
		display: flex;
		color: #8c8c8c;
		font-size: 12px;
		transform: scale(0.9);
		align-items: center;
		justify-content: space-between;
		margin-bottom: 10px;
	}
	.name{
		flex: 1;
    white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	.name img{
		width: 15px;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	.likedCount{
		padding-left: 4px;
		white-space:nowrap;
	}
</style>
 