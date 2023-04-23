<template>
<div>    
    <footer class="footer">
        <div class="footer__text">Made by Andrey Korobeynikov</div>
        <div class="checkbox"> Тема
        <input type="checkbox" id="switch" 
          v-model="isThemeDark"
          @change="onChangeTheme"/>
          <label
            for="switch"
            class="checkbox__label"
            >Toggle
          </label> 
        </div> 
    </footer>
</div>
</template>
<script>
import Loader from "@/components/Loader";
export default {
  name: "App",
  data() {
    return {
      loading: true,
      isThemeDark: false,
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
  mounted(){
    console.log("footer")
    },
  methods:{
    onChangeTheme(){
      if(this.isThemeDark) document.body.classList.add("dark")
      else document.body.classList.remove("dark")
    }
  }
};
</script>
<style>
input[type=checkbox] {
    margin-right: 20px;
    height: 0;
    width: 0;
    visibility: hidden;
}  
label {
    cursor: pointer;
    text-indent: -9999px;
    width: 40px;
    height: 20px;
    background:#e4dcd2;
    display: block;
    border-radius: 18px;
    position: relative;
} 
label:after {
    content: '';
    position: absolute;
    top: .5px;
    bottom: .5px;
    left: 1px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 18px;
    transition: 0.3s;
}  
input:checked + label {
    background: #95978f;
} 
input:checked + label:after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
} 
label:active:after {
    width: 26px;
}
.checkbox__label {
    display:flex;
    justify-content: center;
}
.footer{
    position:absolute;
    width:100%;
    display: flex;
    height: 50px;
    align-items: center;
    background-color:#cabcab;
    justify-content:space-between;
    padding: 10px -10px 10px;
}
.footer__text{
    margin-left: 20px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center; 
} 
</style>

