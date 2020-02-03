<template>
<div id="app" style="margin-top:45vh">
<headerTop>
</headerTop>


<b>{{name}}</b> with email <b>{{email}}</b> lives in <b>{{address}}</b>
</div>
</template>


<script>

const headerTop=()=>import('./headerTop')


export default {
  data:function(){
    return{
    name:this.$store.state.data.name,
    email:this.$store.state.data.email,
    address:this.$store.state.data.address
  }},

  }

</script>


<style scoped>

</style>
