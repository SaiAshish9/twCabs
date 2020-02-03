<template>


<div class="container-fluid" id="total" > 

<headerTop>
</headerTop>

<div v-if="show">
<skeletonCard>
</skeletonCard>
</div>

<div v-else style="margin-top:30vh">
<searchCards>
</searchCards>
</div>


</div>

</template>



<script>

const headerTop=()=>import('./headerTop')
const skeletonCard=()=>import('./skeleton-card')
const posts=()=>import('./posts')
const searchCards=()=>import('./searchCards')

export default {
  data:function(){
    return {
      show:true,
 }
  },
  components:{
    headerTop,
    skeletonCard,
    posts,
    searchCards
  },
  methods:{
    showSkeleton:function(){
      var v=this;
      
      setTimeout(function(){
        v.show=false
      },1500)
      
      
    }
  },
  mounted(){
    this.showSkeleton()
  }
}


</script>



<style scoped>

#total{
  position: absolute;
  bottom:0px;
  left:0px;
  right:0px;
  top:7vh;
  
}


</style>
