<template>
	<div>
		<div class="OneOfThem" v-for="(item,index) in data">
			<div class="pic" ref="pic" :style="PicSize"><img :src='item.picUrl' ref="img" :style="PicSize" /></div>
				<div class="Name">{{item.name}}<span class="transname">{{transname(index)}}</span></div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'SingerMod',
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
		mounted() {
			
		},
		methods:{
			//transname
			transname(index){
				if(this.data[index].trans !== null){
					return "("+this.data[index].trans+")"
				}else{
					if(this.data[index].alias[0] !== undefined){
						return "("+this.data[index].alias[0]+")"
					}else{
						return ''
					}
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
		transform: scale(1.3);
	}
	.transname{
		color: #878787;
	}
</style>
