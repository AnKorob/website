<template>
  <div class="portfolio-card" v-if="!showImg" @click="toggleLightbox">
    <img
      :src="require(`@/assets/art/${art}.jpg`)"
      alt=""
      class="portfolio-card-img"
    />
  </div>
  <div class="wrapper" v-else @click="toggleLightbox">
    <img :src="require(`@/assets/art/${art}.jpg`)" alt="" class="wrapper-img" />
  </div>
</template>
<script>
export default {
  name: "PortfolioCard",
  data() {
    return {
      showImg: false,
    };
  },
  props: {
    art: Number,
  },
  components: {},
  methods: {
    toggleLightbox() {
      this.showImg = !this.showImg;
    },
  },
};
</script>
<style lang="scss">
.portfolio-card {
  margin: 20px;
  width: 250px;
  height: 300px;
  display: flex;
  justify-content: center;
  border-width: 5px;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow: 6px 6px 14px #757575, -6px -6px 14px #ffffff;
  border: #ffffff;
  border-style: solid;
  border-radius: 10px;
  &-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
}
.wrapper {
  z-index: 14;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: #252525;
  opacity: 1;
  &-img {
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    height: 400px;
    width: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 15;
    opacity: 0.8;
    position: absolute;
  }
}
</style>
