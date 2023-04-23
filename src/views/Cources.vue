<template>
  <div class="block">
    <div class="block__content">
    <div class="block__container">
    <Card/>
    <Card/>
    <Card/>
    <Popup/>
    <Popup/>
    <Popup/>
    </div>
    </div>
  </div>
</template>

<script>

import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Popup from "@/components/Popup";


export default {
  name: "App",
  data() {
    return {
      
    };
  },


  components: {
    Loader,
    Header,
    Footer,
    Card,
    Popup
  },
};
</script>
<style>
.block {
    /* background-image: url(@/assets/avatar.jpg);  */
    padding-top: 16px;
    padding-bottom: 16px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    width:100%;
    min-height: 400px;
    position: relative;
}
.block__container{
    width:100%;
    height: 100%;
    max-width: 1160px;
    display:flex;
    text-align: center;
    flex-wrap:wrap;
    flex-flow: wrap;
    justify-content:flex-start;
}
.block__content {
    display:flex;
    width:100%;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
}
</style>