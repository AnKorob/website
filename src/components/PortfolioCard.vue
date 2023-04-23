<template>
    <div class="portfolio__card"> 
            <a href="#img1">
                <img src="@/assets/art/111.jpg" alt="" class="img_port"/>
            </a>
            <a href="#port" class="lightbox" id="img1">
                <span style=" background-image: url('@/assets/art/111.jpg');">
                </span>
            </a>          
        </div>
</template>

<style>
.lightbox {
    display:none;
    position: fixed;
    z-index: 999;
    top: 0px;
    bottom: 0;
    left:0;
    right: 0;
    background: rgba(0,0,0,0.8);
}
.lightbox:target {
 display: block;
}
.lightbox span {
    display: flex;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;
    justify-content: center;
    align-items: center;
}
.portfolio__card{
    width: 250px;
    height: 300px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    border-width: 5px;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow:  6px 6px 14px #757575,
             -6px -6px 14px #ffffff;
    border: #ffffff;
    border-style: solid;
    margin-right: auto;
}
.portfolio__card > a{
    height:100%;
    width:100%;
}
.portfolio__card:nth-last-child(n){
    justify-content: flex-start;
}
.img_port{
    width: 100%;
    height:100%;
    object-fit: cover;
}
</style>
<script>
import Loader from "@/components/Loader";
export default {
  name: "App",
  data() {
    return {
      loading: true,
    };
  },
  components: {
    Loader,
  },
}
</script>

