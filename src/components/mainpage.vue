<template>


<div id="app" class="container-fluid">

<topBar>
</topBar>
<headTop></headTop>

<div style="position:relative;top:15vh;margin:auto;font-weight:bold;color:#f1f2f3;font-size:1.8rem;">
<p style="">
Book Your Cab With Thailandwale
</p>

</div>

<div  style="position:relative;top:15vh;margin:auto;font-weight:bold;color:#f1f2f3;font-size:2rem;">

<div  v-for='x in buttons' v-bind:key="x.value" style="display:inline">
<button v-if="dflt===x.value"   v-on:mouseover='selected=x.value' v-on:mouseleave="selected=dflt" class="selectBtn btn btn-outline-primary" style="margin:20px;width:120px"  >
{{x.value}}

</button>

<button v-else  @click="dflt=x.value; selected=x.value" v-on:mouseover='selected=x.value' v-on:mouseleave="selected=dflt" class="travelBtn btn btn-outline-primary" style="margin:20px;width:120px"  >
{{x.value}}

</button>

</div>


</div>
<br/>

<div class="triangle" v-if="selected==='Bangkok'"   style="position:relative;top:10vh;left:-34vh; margin:auto;font-weight:bold;color:#f1f2f3;font-size:2rem;">

</div>


<div class="triangle"  v-if="selected==='Pattaya'"  style="position:relative;top:10vh; bottom:2rem;left:-11vh;margin:auto;font-weight:bold;color:#f1f2f3;font-size:2rem;">

</div>

<div class="triangle"   v-if="selected==='Phuket'" style="position:relative;top:10vh;left:12vh;margin:auto;font-weight:bold;color:#f1f2f3;font-size:2rem;">

</div>

<div class="triangle"   v-if="selected==='Krabi'" style="position:relative;top:10vh; left:35vh;margin:auto;font-weight:bold;color:#f1f2f3;font-size:2rem;">

</div>



<br/>




<div class="centerBlock" style="position:absolute;top:42.4vh;left:2rem;margin:auto;width:40rem; height:29vh;background: white;font-weight:bold;border-radius:10px">


<p style="position:relative;right:36vh;top:6vh;font-size:1.5rem">
Pick Up
</p>

<input type="text" class="form-group" style="position:relative;left:10vh;top:-2rem; width:17rem;  " />

<button class="bookBtn btn btn-outline-primary" style="margin:20px;width:120px;position: relative;left:13vh;top:-5vh "  >
Book Now
</button>

<p style="position:relative;right:38vh;top:-4vh;font-size:1.5rem">
Drop
</p>

<input type="text" style="position:relative;top:-14vh;left:12vh;width:17rem;" />

<button class=" bookBtn btn btn-outline-primary" style="margin:20px;width:120px;position:relative;top:-14vh;left:15vh"  >
Book Later
</button>

<img src="../assets/plus.png" style="position:relative;width:1.6rem; top:-6.5vh;right:72vh;cursor:pointer;"/>
<p style="position:relative;bottom:13.8vh;right:30vh;color:#274ABB;cursor:pointer;">
More Options
</p>
</div>
</div>
</template>



<script>

import topBar from '../components/topBar.vue'
import headTop from '../components/headerTop.vue'

export default {
directives:{
  test:function(el){
    if(el.value.name=='Bangkok'){
      return true;
    }
  }
}
,
components:{
  'headTop':headTop,
  'topBar':topBar
},
data:function(){
  return {
    dflt:'Bangkok',
    selected:'Bangkok' ,
    buttons:[
  {
    value:'Bangkok',
  },
      {
        value:'Pattaya',
      },
      {
        value:'Phuket',
      },
      {
        value:'Krabi',
      },
    ]
  }
}
}

</script>



<style scoped>

.container-fluid{
  background: url('../assets/background.jpg');
background-color: grey;
position:absolute;
z-index:-1;
top:7vh;
bottom: 0px;
left:0px;
right:0px;
background-repeat: no-repeat;
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
}

.travelBtn{
  color:#373B48;
  border:1px solid #373B48;
  background-color: white;
}

.travelBtn:hover{
  color:white;
  border:1.2px solid #274ABB;
  background-color: #274ABB;
}

.triangle{
  width: 0;
	height: 0;
	border-left: 13px solid transparent;
	border-right: 13px solid transparent;
	border-bottom: 26px solid #274ABB;
  position: relative;
right:31vh;
}

.bookBtn{
  color:white;
  border:1px solid #274ABB;
  background-color: #274ABB;
}

.bookBtn:hover{
  color:#274ABB;
  border:1px solid #274ABB;
  background-color: white;
}

.selectedBtn{
  color:white;
  border:1px solid #274ABB;
  background-color: #274ABB;
}

.selectBtn{
  color:white;
  border:1px solid #274ABB;
  background-color: #274ABB;
}


.selectBtn:hover{
  border:1px solid #274ABB;
  background-color: #274ABB;
}

button:focus{
  box-shadow: none;
  background-color: #274ABB;
}

.selectedBtn:hover{
  color:#373B48;
  border:1px solid #373B48;
  background-color: white;
}

@media(min-width:800px){
  .centerBlock{
    left: 28vw !important;
  }
}

</style>
