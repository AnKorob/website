<template>
	<div :class="['block', { 'block_intro': block.needImg },]">
		<div class="block__heading">
			{{block.title}}
		</div>
		<div class="block__content">
		</div>
	</div>
</template>
<script>
import Loader from "@/components/Loader";
export default {
  name: "App",
  data() {
    return {
      loading: true,
    };
  },
  props: {
    block: {
      type: Object,
    
    },
    index: Number,
  },
  components: {
    Loader,
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

.block:only-of-type{min-height: 100vh;}
.block:first-of-type{
    margin-top: 60px;
}
.block_intro{
    color: #fff;
    width: x;
    height:auto;
    display: flex;
    text-align: center;
    background-image: url(@/assets/avatar.jpg); 
    background-color: blue;
    background-size:cover;
    background-position: center;
    background-attachment: fixed;
    box-shadow: 0 0 8px 8px white inset;
}
.block:nth-child(2n+1){
    background-color: #e4dcd2;
}
.block__heading {
    display:flex;
    width:100%;
    justify-content: center;
    padding-bottom: 16px;
    align-items: center;
}
.block__heading > .nav__link_active{
    display: flex;
    justify-content: right;
}
.block__content {
    display:flex;
    width:100%;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
}
.block__content_text{
    text-align: center; 
}
.block__content_text > p:nth-child(n){
    margin-top: 10px;
}
</style>