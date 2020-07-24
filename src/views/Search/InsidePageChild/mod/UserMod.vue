<template>
	<div>
		<div class="OneOfThem" v-for="(item,index) in data">
			<div class="pic" :style="{height:Size,width:Size}"><img :src='item.avatarUrl' :style="{height:Size,width:Size}" /></div>
			<div class="Name">
				<div class="name" ref="name">{{ChangeHighTextColor(item.nickname,index)}}</div>
				<div class="detail">{{item.signature}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'UserMod',
		props:{
			data:{
				type:Array,
				default:()=>[]
			},
			Size:{
				type:String,
				default:()=>''
			}
		},
		methods:{
			ChangeHighTextColor(name,index){
				if(name !== undefined){
				  this.$nextTick(()=>{
						var ch = this.$route.query.key
						var reg = "/"+ch+"/ig";
						this.$refs.name[index].innerHTML = name.replace(eval(reg), '<font color=#7373ff>'+ch+'</font>')
					})
				}
			},
		},
	}
</script>

<style scoped>
	.OneOfThem{
		display: flex;
		align-items: center;
		font-size: 13px;
		padding-bottom: 10px;
	}
	.pic{
		width: 60px;
		height: 60px;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 10px;
	}
	.pic img{
		width: 60px;
		height: 60px;
		transform: scale(1.2);
	}
	.Name{
		flex: 1;
		transform: scale(0.9);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.name{
		color: #000000;
		font-size: 15px;
		padding-bottom: 4px;
	}
	.detail{
		color: #666666;
		font-size: 12px;
		font-weight: 200;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
