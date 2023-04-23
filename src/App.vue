<template>
  <div id="app">
    <Header/>
    <router-view />
    <Footer/>
    <Popup/>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Block from "@/components/Block";
import Popup from "@/components/Popup"
export default {
  name: "App",
  data() {
    return {
    };
  },
  components: {
    TodoList,
    AddTodo,
    Header,
    Footer,
    Block,
    Popup
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
.dark {
    background-color: #000000;
    color: #ffffff;
}
.dark .nav__link{
    color: #ffffff;
}
.dark .nav__link_ext{
    color: #ffffff;
}
.dark .nav {
    background-color: #322f2b;
}
.dark .nav__item:hover {
    background-color: #777777;
}
.dark .block:nth-child(2n+1){
    background-color: #777777;
    color: #ffffff;
}
.dark .block {
    background-color:#43413f;
    color: #ffffff;
}
.dark .footer {
    color: #ffffff;
    background-color: #322f2b;
}
.dark .card {
    background-color: #000000;
    border-width: 5px;
    border: #ffffff;
}
.dark .container__card {
    border-width: 5px;
    border: #ffffff;
    border-style: solid;
    background-color:#322f2b;
}
.dark .container__prodcard:hover > .card {
    background-color:#322f2b;
}
.dark .nav__item_active {
    background-color:#777777;
}
</style>
