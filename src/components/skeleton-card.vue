<template>

<div  class="container-fluid" style="display: flex;margin-top:50px ;text-align: center;flex-direction: column;align-items: center;justify-content: center;position:absolute;left:0px;right:0px;bottom: 0px;top:15vh;  min-height: 70vh;width:100%;">


<div v-for="element in posts" v-bind:key="element.id" class="container" style=" margin-bottom: 25px;width:30rem;min-height:180px;border:1.5px solid #F2F2F2; border-radius:10px;">

<div style="margin-top:10px; height:50px;width:70px;background:#F2F2F2">
</div>

<div style="margin-top:-48px; margin-left: 80px;height:13px;width:90px;background:#F2F2F2">
</div>

<div style="margin-top:3px; margin-left: 80px;height:13px;width:90px;background:#F2F2F2">
</div>

<div style="margin-top:3px; margin-left: 80px;height:13px;width:120px;background:#F2F2F2">
</div>



<div style="margin-top:68px; margin-left: 80px;height:12px;width:70px;background:#F2F2F2">
</div>

<div style="margin-top:-12.5px; margin-left: 170px;height:12px;width:70px;background:#F2F2F2">
</div>

<div style="margin-top:-12.5px; margin-left: 260px;height:12px;width:70px;background:#F2F2F2">
</div>

<div style="margin-top:14px; margin-left: 80px;height:12px;width:230px;background:#F2F2F2">
</div>

<div style="margin-top:-13px; margin-left: 350px;height:12px;width:60px;background:#F2F2F2">

</div>


<div style="margin-top:-145px; margin-left: 340px;height:37px;width:80px;background:#F2F2F2; border-radius:20px;">

</div>

</div>





</div>


</template>


<script>

export default {
  data:function(){
return{  posts:[
      { id: 1 },
      { id: 2 },
      { id: 3 }
]  }},
  components:{
  }
}

</script>
