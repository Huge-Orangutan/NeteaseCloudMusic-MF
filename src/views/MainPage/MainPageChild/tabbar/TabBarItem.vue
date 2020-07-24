<template>
	<div>
		<div 
		@click = "TabBarItemClick(index)"
		 class="TabBarItem"
		 :ref="TabBar(index)" 
		 v-for="(item,index) in Middle"
		 :style="{color:$store.state.Choicecolor}"
		 >{{item}}</div>
	</div>
</template>

<script>
	export default{
		name:'TabBarItem',
		data(){
			return{
				currentIndex:''
			}
		},
	  props:{
			Middle:{
				type:Array,
				default: () => []
			}
		},
		mounted() {
			this.PreSet()
		},
		methods:{
			TabBar(index){
				return 'TabBar'+(index+1)
			},
			//更改字体的颜色
			ChangeColor(index){
				this.$refs.TabBar1[0].style.opacity = 1.6-this.$store.state.opacity
				this.$refs.TabBar2[0].style.opacity = this.$store.state.opacity+0.8
        this.$refs.TabBar1[0].style.fontSize = (16-this.$store.state.opacity*2)+'px'
				this.$refs.TabBar2[0].style.fontSize = (16-(1-this.$store.state.opacity)*2)+'px'
			},
			PreSet(){
				if(this.$route.path == '/mainpage/home'){
					this.currentIndex = 0
					this.$refs.TabBar1[0].style.fontSize = 16+'px'
					this.$refs.TabBar2[0].style.fontSize = 14+'px'
					this.$refs.TabBar1[0].style.opacity = 1
					this.$refs.TabBar2[0].style.opacity = 0.8
				}
				if(this.$route.path == '/mainpage/more'){
					this.currentIndex = 1
					this.$refs.TabBar1[0].style.fontSize = 14+'px'
					this.$refs.TabBar2[0].style.fontSize = 16+'px'
					this.$refs.TabBar1[0].style.opacity = 0.6
					this.$refs.TabBar2[0].style.opacity = 1
				}
			},
			//点击改变path并改变class
			TabBarItemClick(index){
				switch(index)
				{
				  case 0:
					if(this.$route.path !== '/mainpage/home'){
				    this.$router.push('/mainpage/home')	
						this.$refs.TabBar1[0].style.opacity = 1
						this.$refs.TabBar2[0].style.opacity = 0.8
						this.$refs.TabBar1[0].style.fontSize = 16+'px'
						this.$refs.TabBar2[0].style.fontSize = 14+'px'
					}
				  break;
				  case 1:
					if(this.$route.path !== '/mainpage/more'){
				    this.$router.push('/mainpage/more') 
						this.$refs.TabBar1[0].style.opacity = 0.6
						this.$refs.TabBar2[0].style.opacity = 1
						this.$refs.TabBar1[0].style.fontSize = 14+'px'
						this.$refs.TabBar2[0].style.fontSize = 16+'px'
					}
				  break;
				}
			}
    },
		watch:{
			'$store.state.opacity':function(){
				this.ChangeColor()
			},
			'$route':function(){
				if(this.$route.path == '/mainpage/home'){
					this.currentIndex = 0
					this.$refs.TabBar1[0].style.opacity = 1
					this.$refs.TabBar2[0].style.opacity = 0.8
					this.$refs.TabBar1[0].style.fontSize = 16+'px'
					this.$refs.TabBar2[0].style.fontSize = 14+'px'
				}
				if(this.$route.path == '/mainpage/more'){
					this.currentIndex = 1			
				  this.$refs.TabBar1[0].style.opacity = 0.6
				  this.$refs.TabBar2[0].style.opacity = 1
					this.$refs.TabBar1[0].style.fontSize = 14+'px'
					this.$refs.TabBar2[0].style.fontSize = 16+'px'
				}
			}
		}
	}
</script>

<style scoped>
	.TabBarItem{
		display:inline-block;
		margin-left: 5px;
		margin-right: 5px;
		font-weight: bold;
		font-family: "Heiti SC";
	}
</style>
