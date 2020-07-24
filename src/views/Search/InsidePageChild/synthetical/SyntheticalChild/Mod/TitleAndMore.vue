<template>
	<div class="TitleAndMore">
		<div class="title">{{title}}</div>
		<div><slot name="middle"></slot></div>
		<div ref="more" class="more" :style="ChangeMore">{{ChangeHighTextColor(data.moreText)}}</div>
	</div>
</template>

<script>
	export default{
		name:'TitleAndMore',
		props:{
			data:{
				type:Object,
				default:()=>{}
			},
			title:{
				type:String,
				default:()=>''
			},
			ChangeMore:{
				type:Object,
				default:()=>{}
			}
		},
		data(){
			return{

			}
		},
		computed:{

		},
		mounted() {
  
		},
		methods:{
			ChangeHighTextColor(text){
				if(text !== undefined){
					var ch = this.data.highText
					var reg = "/"+ch+"/ig";
					this.$nextTick(()=>{
						this.$refs.more.innerHTML = text.replace(eval(reg), '<font color=#7373ff>'+ch+'</font>')
					})
				}
			},
		},
	}
</script>

<style scoped>
	.TitleAndMore{
		color: #000000;
		padding: 0 15px 0 15px;
	}
	.title{
		padding:10px 0 15px 0;
		font-size: 16px;
		font-weight: bold;
	}
	.more{
		color: #8c8c8c;
		text-align: center;
		font-size: 11px;
		transform: scale(0.98);
	}
</style>
