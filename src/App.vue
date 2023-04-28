<template>
  <div id="app" ref="app">
    <Header @click-inner-link="onClickInnerLink"></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/page/Header.vue";
import Footer from "@/components/page/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  methods: {
    onClickInnerLink() {
      console.log(this.$refs);
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}
html {
  height: 100%;
  width: 100%;
}

#app {
  height: 100%;
  width: 100%;
}
::-webkit-scrollbar {
  display: none;
}
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
}
.dark {
  background-color: #43413f;
  color: #ffffff;
  .nav {
    background-color: #322f2b;
    &-list-item {
      & :hover {
        background-color: #777777;
      }
      &-active {
        background-color: #777777;
      }
    }
    &-link {
      color: #ffffff;
      &-ext {
        color: #ffffff;
      }
    }
  }
  .block {
    background-color: #43413f;
    color: #ffffff;
    &:nth-child(2n + 1) {
      background-color: #777777;
      color: #ffffff;
    }
  }
  .container-card {
    border-width: 5px;
    border: #ffffff;
    border-style: solid;
    background-color: #322f2b;
    & > .card {
      background-color: #322f2b;
      border-width: 5px;
      border: #ffffff;
    }
  }

  .container-card:hover > .card {
    background-color: #000000;
  }
  .footer {
    color: #ffffff;
    background-color: #322f2b;
  }
}
</style>
