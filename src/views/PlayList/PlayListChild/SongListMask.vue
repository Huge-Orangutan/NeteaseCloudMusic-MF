<template>
	<div class="SongListMask">
	<div class="mask" ref="mask"></div>
	<div class="ImgMask" ref="ImgMask" :class="{ImgMaskShow:isShow}"><img :src='this.detail.BgI'></div>
	<div class="ImgMaskBackGround" :class="{ImgMaskBackGroundShow:isShow}" ref="ImgMaskBackGround"></div>
	</div>
</template>

<script>
	export default{
		name: 'SongListMask',
		data(){
			return{
				isShow: false
			}
		},
		props:{
			detail:{
				type: Object,
        default:() => {}				
			},
			position:{
				type: Number,
			  default: 0			
			}
		},
		created() {

		},
		methods:{
			Mask(){
					if(this.position >= 166){
						this.isShow = true
					}
					else{
						this.isShow = false
					}
					if(this.position>30){
						this.$refs.mask.style.opacity = 0.04
					}
					else{
						this.$refs.mask.style.opacity = 0
					}
			},
		},
		watch:{
			position(){
				this.Mask()
			}
		}
	}
</script>

<style scoped>
	.mask{
		background-color: black;
		height: 35px;
		position: absolute;
		width: 100%;
		opacity: 0;
		z-index: 7;
		
	}
	.ImgMask{
		height: 35px;
		position: absolute;
		width: 100%;
		z-index: 9;
		overflow: hidden;
		visibility:hidden;
		transform: translateY(130%);
	}
	.ImgMask img{
		overflow: hidden;
		transform: scale(1.2);
		filter: blur(70px);
	}
	.ImgMaskShow{
		visibility: visible;
		transform: translateY(0);
		transition: 0.3s;
		padding-bottom: 15px;
	}
	.ImgMaskBackGround{
		height: 35px;
		position: absolute;
		width: 100%;
		z-index: 8;
		background-color: #bebebe;
		opacity: 0;
		
	}
	.ImgMaskBackGroundShow{
		padding-bottom: 15px;
		opacity: 0.95;
	}
</style>
