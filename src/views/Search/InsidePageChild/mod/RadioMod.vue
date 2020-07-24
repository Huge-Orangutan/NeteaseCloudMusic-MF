<template>
	<div>
		<div class="OneOfThem" v-for="(item,index) in data">
			<div class="pic" :style={height:Size,width:Size}><img :src='item.picUrl' :style='{height:Size,width:Size}' /></div>
			  <div class="text">
					<div class="name" ref='name'>{{ChangeHighTextColor(item.name,index)}}</div>
					<div class="detail">{{item.dj.nickname}}</div>
				</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'RadioMod',
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
		overflow: hidden;
		margin-right: 5px;
	}
	.pic img{
		width: 60px;
		height: 60px;
		transform: scale(1.3);
	}
	.text{
		transform: scale(0.9);
	}
  .name{
		color: #000000;
		font-size: 14px;
		padding-bottom: 4px;
	}
	.detail{
		color: #666666;
		font-size: 12px;
		font-weight: 200;
	}
</style>
