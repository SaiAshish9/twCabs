<template>

<div id="topBar">

<div>

<img id="phone-icon"   src="../assets/phone.png" />

<p id="phone-no" style="color:white;cursor:pointer">
(123) 123-456
</p>

</div>

<div>

<img  id="mail-icon"   src="../assets/mail.jpg" />

<p  id="mail" style="margin-left:7px;color:white;cursor:pointer">
hello@thailandwale.com
</p>


</div>


<a class="btn btn-light  " >
<p id="button">
button

</p>

</a>


</div>



</template>

<script>




</script>


<style scoped>
#topBar{
  position: absolute;
  height:7vh;
  width:100%;
  top:0px;
  background:#274ABB;
  left:0px;
  right:0px;
}

#phone-icon{
  position: absolute;
  left:10px;
  top:2vh;
  margin:auto;
  width:20px;
  height:20px;  
}

#mail-icon{
  position: absolute;
  left:13.5rem;
  top:2vh;
  margin:auto;
  width:20px;
  height:20px;  
}

#phone-no{
  position: absolute;
  left:40px;
  top:1.6vh;
  margin:auto;
  font-weight: bolder;
}

#mail{
  position: absolute;
  left:15rem;
  top:1.6vh;
  margin:auto;
}


a{
  position: absolute;
  right:2rem;
  top:2vh;
  margin:auto;
  background: white;
  border-radius: 4px;
  height:40%;
  text-align: center;
  color:#274ABB;
  font-weight: bold;
  margin:auto;
}

#button{
  position: relative;
  top:-8px;
}


</style>
