<template>

<Skeleton>
</Skeleton>

</template>


<script>

const Skeleton =()=>import('./searchSkeleton')


export default {
  data:function(){
    show:true
  },
  mounted(){
    
  },
  components:{
    Skeleton
  }
}



</script>


<style scoped>

</style>
