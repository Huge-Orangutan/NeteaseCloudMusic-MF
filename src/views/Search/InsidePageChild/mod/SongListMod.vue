<template>
	<div>
		<div class="OneOfThem" v-for="(item,index) in data" @click="PushSongList(item.id)" slot="middle">
			<div class="pic" :style="PicSize"><img :src='item.coverImgUrl' :style="PicSize" /></div>
			<div class="text">
				<div class="name" ref="name">{{ChangeHighTextColor(item.name,index)}}</div>
				<div class="detail">{{item.trackCount}}首 by {{item.creator.nickname}}, 播放{{ChangeFormat(item.playCount)}}次</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'SongListMod',
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
			//换单位
			ChangeFormat(playCount){
				if(playCount >= 10000){
					return Math.ceil(playCount/1000) / 10 +'万'
				}else{
					return playCount
				}
			},
			PushSongList(id){
				this.$store.commit('ChangeSongList',id)
				this.$router.push('/playlist')
			}
		},
	}
</script>

<style scoped>
	.OneOfThem{
		display: flex;
		margin-bottom: 10px;
	}
	.pic{
		width: 65px;
		height: 65px;
	}
	.pic img{
		width: 65px;
		height: 65px;
		border-radius: 5px;
	}
	.text{
		flex-grow: 1;
		margin:auto 0 auto 0;
		overflow: hidden;
		white-space:nowrap;
	}
	.name{
		position: relative;
		width: 100%;
		font-size: 13px;
		padding-bottom: 2px;
		overflow: hidden;
		text-overflow:ellipsis;
		padding-left: 8px;
	}
	.detail{
		font-size: 11px;
		color: #8c8c8c;
		transform: scale(0.95);
	}
</style>
