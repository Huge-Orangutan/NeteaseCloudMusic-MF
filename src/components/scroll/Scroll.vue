<template>
  <div class="wrapper" ref="wrap">
    <slot></slot>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name:'Scroll',
    data(){
      return{
        scroll: null,
      }
    },
		props:{
			scrollY:{
				type: Boolean,
				default: false
			},
			scrollX:{
				type: Boolean,
				default: false
			},
			probeType:{
				type: Number,
				default: 0
			},
			momentum: {
				type: Boolean,
				default: true
			},
			stopPropagation:{
				type: Boolean,
				default: false
			},
			swipeTime:{
				type:Number,
				default:2500
			},
			swipeBounceTime:{
				type:Number,
				default:500
			},
			bounce:{
				type:Boolean,
				default:false
			},
			snap:{
				type:Object,
				default:()=>{}
			},
			click:{
				type:Boolean,
				default:true
			},
			startY:{
				type:Number,
				default:0
			},
			pullUpLoad:{
				type:Object,
				default:()=>{}
			}
		},
    mounted() {
      this.__initScroll()
    },
    methods:{
       __initScroll() {
        this.scroll = new BScroll(this.$refs.wrap,{
        click: this.click,
				scrollY: this.scrollY,
				scrollX: this.scrollX,
        probeType : this.probeType,
				bounce: this.bounce,
				momentum: this.momentum,
				stopPropagation: this.stopPropagation,
				swipeTime:this.swipeTime,
				swipeBounceTime:this.swipeBounceTime,
				snap:this.snap,
				startY:this.startY,
				pullUpLoad:this.pullUpLoad
        })

        // 2.监听滚动的位置
        this.scroll.on('scroll',(positon) => {
          this.$emit('scroll',positon)
        })
				this.scroll.on('scrollStart',()=>{
					this.$emit('scrollStrat')
				})
				this.scroll.on('scrollEnd',(position)=>{
					this.$emit('scrollEnd',position)
				})
				this.scroll.on('touchEnd',(position)=>{
					this.$emit('touchEnd',position)
				})
        this.scroll.on('pullingUp', (position) => {
          this.$emit('pullingUp',position)
        })
      },
      scrollTo(x,y,time){
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
         this.scroll && this.scroll.finishPullUp()
      },
      refresh(){
         this.scroll && this.scroll.refresh()
      },

    },
    

  }
</script>

<style scoped>
	
</style>
