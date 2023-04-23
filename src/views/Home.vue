<template>
  <div>
    <Blocks v-for="(block, id) of blocks"
    v-bind:key="id"
    v-bind:block="block">
    </Blocks>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Blocks from "@/components/Block";
import Card from "@/components/Card";
import PortfolioCard from "@/components/PortfolioCard";


export default {
  name: "App",
  data() {
    return {
       blocks: [
        { id: 1, title: "Обо мне",content:"",needImg: true, },
        { id: 2, title: "Мои курсы",content:"",needCources: true},
        { id: 3, title: "Отзывы",content:"",needAnswer: true, },
        { id: 4, title: "Портфолио",content:"", needPortfolio: true, },
        { id: 5, title: "Связаться  со мной",content:"",needLogo: true },
      ],
    };
  },


 
  components: {
    Loader,
    Header,
    Blocks,
    Footer,
    Card,
    PortfolioCard,
  },
};
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
::-webkit-scrollbar{
    display: none;
}
body{
    width: 100%;
    height: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 16px;
    padding-right: 0px;
}
</style>