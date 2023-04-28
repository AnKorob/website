<template>
  <div class="block">
    <div class="block-title">Портфолио</div>

    <div class="block-content">
      <PortfolioCard v-for="art in arts" :key="art" :art="art" />
    </div>
  </div>
</template>
<script>
import PortfolioCard from "@/components/cards/PortfolioCard.vue";

export default {
  name: "PortfolioPage",
  data() {
    return {
      arts: [1, 2, 3, 4, 5, 6],
    };
  },

  components: {
    PortfolioCard,
  },
};
</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}
.block {
  margin-top: 70px;
  width: 100%;
  padding-bottom: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  &-title {
    font-size: 30px;
  }
  &-content {
    flex: 1 1 400px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-left: 50px;
    max-width: calc(100% - 50px);
  }
}
</style>
