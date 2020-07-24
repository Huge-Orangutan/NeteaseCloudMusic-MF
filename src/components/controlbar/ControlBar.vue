<template>
	<scroll class="content" ref="scroll" :scrollX = "true">
	  <div class="ControlBar">
		  <div class="OneOfThem"
			ref="OneOfThem"
			:style="{color:ChangeColor(index),fontWeight:ChangeWeight(index)}" 
			v-for="(item,index) in BarText" 
			@click="ChangePostion(index)">{{item}}</div>
	  </div>
	</scroll>
</template>

<script>
	import Scroll from '../scroll/Scroll.vue'
	export default{
		name:'ControlBar',
		components:{
			Scroll
		},
		props:{
			BarText:{
				type:Array,
				default:()=> []
			},
			PageIndex:{
				type:Number,
				default:0
			}
		},
		data(){
			return{
				currentTime:0,
			}
		},
		computed:{
		
		},
		created() {
			
		},
		mounted() {
			this.$refs.scroll.scrollTo(0.000000000000001,0,0),
			this.PreSet()
		},
		methods:{
			ChangeColor(index){
				if(this.currentTime == index )
				return '#e61616'
			},
			ChangeWeight(index){
				if(this.currentTime == index )
				return '900'
			},
			PreSet(){
				document.getElementsByClassName("OneOfThem")[0].classList.add('test')
			},
			ChangePostion(index){
				this.currentTime = index
				let OneOfThem = this.$refs.OneOfThem
				for(let i = 0; i < OneOfThem.length; i++){
				  OneOfThem[i].classList.remove('test')
				}				
				OneOfThem[index].classList.add('test')	
				this.$emit('PushIndex',index)
				//换scroll的位置
				let scroll = this.$refs.scroll
				if(index<3){
					scroll.scrollTo(0,0,200)
				}else{
					if(index > OneOfThem.length-3){
					  scroll.scrollTo(scroll.scroll.maxScrollX,0,200)
					}
					else{
					  scroll.scrollTo(-scroll.scroll.wrapperWidth/5*(index-2),0,200)
					}
				}//结束
			},
		},
		watch:{
			'PageIndex':function(){
				this.currentTime = this.PageIndex
				this.$emit('PushIndex',this.PageIndex)
				let OneOfThem = this.$refs.OneOfThem
				for(let i = 0; i < OneOfThem.length; i++){
				  OneOfThem[i].classList.remove('test')
				}
				OneOfThem[this.PageIndex].classList.add('test')	
				let scroll = this.$refs.scroll
				if(this.PageIndex<3){
					scroll.scrollTo(0,0,200)
				}else{
					if(this.PageIndex > OneOfThem.length-3){
					  scroll.scrollTo(scroll.scroll.maxScrollX,0,200)
					}
					else{
					  scroll.scrollTo(-scroll.scroll.wrapperWidth/5*(this.PageIndex-2),0,200)
					}
				}
			},
		},
	}
</script>

<style scoped>
	.content{
		width: 100%;
		overflow: hidden;
		position: relative;
	}
	.ControlBar{
		display: flex;
		color: #000000;
		border-bottom: 1px solid #e1e1e1;
	}
	.OneOfThem{
		position: relative;
		width: 20vw;
		text-align: center;
		font-size: 12px;
		padding-bottom: 8px;
		font-weight: 500;
		font-family: "Tahoma";
	}	
	.OneOfThem::before{
		 content: "";
		 position: absolute;
		 top: 0;
		 width: 0;
		 left: 100%;
		 height: 100%;
		 border-bottom: 2px solid #e61616;
		 transition: 0.08s all linear;
	}

	.OneOfThem.test::before {
	   width: 50%;
	   top: 0;
	   left: 25%;
	   z-index: -1;
		 transition-delay: 0.08s;
	}
	.OneOfThem.test ~ .OneOfThem::before {
	    left: 0;
	}
</style>
