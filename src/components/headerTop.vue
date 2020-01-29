<template>

<div id="head">

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img  style="cursor:pointer" class="navbar-brand" src="../assets/logo.png"/>
  </nav>


<router-link to="/">

  <button id="homeBtn" type="button"  class="btn btn-outline-primary">
Home

  </button>

</router-link>


<div v-for='x in buttons' v-bind:key="x.value" style="display:inline;" >
<router-link :to="{name:x.value}"  >

<button  class="menuBtn btn btn-outline-secondary"  >
{{x.value}}
</button>
</router-link>
</div>

<img src="../assets/login.png" style="position:absolute; right:8rem; width:1.7rem;top:1.5rem;"/>

<a style="position:absolute; right:1rem;;top:1.6rem;cursor:pointer">
Login/Register

</a>



</div>



</template>

<script>

module.exports={
  data:function(){
    return {
      msg:'msg',
      buttons:[
        {
          value:'Menu1',

        },
        {
          value: 'Menu2',
        },
        {
          value:  'Menu3',        
    
        }
      ]
    }
  }
}

</script>


<style scoped>

nav{
  position: absolute;
  left:0px;
  right:0px;
  background: white;
}

.link:hover{
  color:white !important;
}

#homeBtn{
  position: absolute;
  left:19vw;
top:3vh;
  border-color: #274ABB;
  color:#274ABB;
  height:2rem;
  padding-top: 2px
}

#homeBtn:hover{
  background: #274ABB;
  color:white;
}

.menuBtn{
  position: relative;
  top:3vh;
  margin-right: 5px;
    height:2rem;
    padding-top: 2px;
}

@media(min-width:1300px){
  .menuBtn{
    position: relative;
    left:-12rem;
    top:3vh;
    margin-right: 10px;
      height:2rem;
      padding-top: 2px
  }
}



img{
  width:5rem;
}

</style>
