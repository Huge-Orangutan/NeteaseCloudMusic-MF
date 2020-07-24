<template>
	<div>
		<div class="OneOfThem" v-for="(item,index) in data">
			<div class="pic" :style="PicSize"><img :src='item.picUrl' :style="PicSize" /></div>
			  <div class="text">
					<div class="name" ref="name">{{ChangeHighTextColor(item.name,index)}}</div>
					<div class="detail">{{item.artist.name}} {{publishTime(item.publishTime)}}</div>
				</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'AlbumMod',
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
		data(){
			return{
				PicSize:{
					height:this.Size,
					width:this.Size
				}
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
			publishTime(time){
		    time = new Date(time)
				return time.getFullYear()+'.'+Number(time.getMonth()+1)+'.'+time.getDate()
			}
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
		overflow: hidden;
		white-space:nowrap;
	}
  .name{
		color: #000000;
		font-size: 14px;
		padding-bottom: 4px;
		overflow: hidden;
		white-space:nowrap;
		text-overflow: ellipsis;
	}
	.detail{
		color: #666666;
		font-size: 12px;
		font-weight: 200;
	}
</style>
