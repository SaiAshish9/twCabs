<template>

<div id="app">

<div style="position:relative;top:-160px">

<div class="row" v-for="x in data" style="margin:20px auto; width:50%;height:12%;border:2px solid grey;">

<div class="col-5"  style="width:8%;height:22.5%;margin:10px;">

<img v-bind:src="x.url" style="width:100%;height:200px;"/>

</div>

<div class="col" style="max-height:70%;">

<p styele="margin-top:50px">
<b>Name :</b>
<br/>
<span style="font-size:1rem">
{{x.username}}
</span>
</p>


<p >
<b>Email :</b>
<br/>
<span style="font-size:0.7rem">
{{x.email}}
</span>
</p>


<p>
<b>Address :</b>
<br/>
<span style="font-size:0.8rem">
{{x.address}} 
</span>
</p>

<router-link :to="{name:'Pay'}">
<button  @click="handleclick(x.username,x.email,x.address)" class="btn btn-outline-primary" style="margin:20px">
Pay
</button>
</router-link>

</div>

</div>

</div>
</div>
</template>


<script>

export default {
  data:function(){
    return {
      data:[]
    }
  },
  methods:{
    handleclick:function(name,email,address){
      this.$store.state.data.name=name;
      this.$store.state.data.email=email;
      this.$store.state.data.address=address;
    }
  },  
  mounted(){
    const url="http://www.json-generator.com/api/json/get/bOsyWxnibm?indent=2"
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
     var x=[];
     var i=0;
     data.forEach(y=>{
       var a;
       if(y.address){
         a=Object.values(y.address);  
        y.address=a[0] +' '+a[1]
       }
       if(y.name){
         var url=data[10].images[i].url
         y={...y,url:url}
         x.push(y)
       }
i=i+1;
     })
     
    this.$data.data=x
        })
  }
  
}
</script>


<style scoped>


</style>
