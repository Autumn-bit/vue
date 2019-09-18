<template>
	<ul class="List" >
	<li 
      class="item" 
      v-for="item of letters" 
      :key="item" 
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
  >{{item}}</li>
	</ul>
</template>

<script>
	export default{
       name:'CityAlphabet',
       props:{
         cities:Object
       },
       computed:{
        letters(){
          const letters=[]
          for(let i in this.cities){
            letters.push(i)
          }
          return letters
        }
       },
       data(){
        return{
          touchStatus:false,
          startY:0,
          timer:null
        }
       },
       updated () {
      const startY=this.$refs['A'][0].offsetTop
       },
       methods:{
        handleLetterClick(e){
          this.$emit('change',e.target.innerText)
        },
        handleTouchStart(){
            this.touchStatus=true
        },
        handleTouchMove(e){
            if(this.touchStatus){
              if(this.timer){
                clearTimeout(this.timer)
              }
              this.timer=setTimeout(()=>{
                const touchY=e.touches[0].clientY-130
               const index=Math.floor((touchY-this.startY)/20)
               if(index>=0&&index<this.letters.length)
               this.$emit('change',this.letters[index])
              },16)
               
            }
        },
        handleTouchEnd(){
            this.touchStatus=false
        },
       }
	}
</script>

<style lang="stylus" scoped>
   .List{
   	display:flex;
   	flex-direction:column;
   	justify-content:center;
   	width:13px;
   	position:absolute;
   	top:150px;
   	right:0;
   	buttom:0;

   }
   .item{
   	line-height:20px;
   	text-align:center;
   	color:#00bcd4;
   }
</style>