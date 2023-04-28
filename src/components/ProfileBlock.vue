<template>
  <div class="profile">
    <div class="profile-header">
      <div class="profile-header-title">Мои работы</div>
      <router-link :to="{ name: 'Portfolio' }" class="nav-link">
        Еще
      </router-link>
    </div>
    <div class="profile-content">
      <PortfolioCard v-for="art in arts[(0, 3)]" :key="art" :art="art" />
    </div>
  </div>
</template>
<script>
import PortfolioCard from "@/components/cards/PortfolioCard.vue";
export default {
  name: "ProfileBlock",
  data() {
    return {
      arts: [1, 2, 3, 4, 5, 6],
    };
  },
  components: { PortfolioCard },
};
</script>
<style lang="scss" scoped>
.profile {
  padding: 20px 40px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  &-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &-header {
    display: flex;
    flex-direction: row;
    width: 100%;
    & > .nav-link {
      display: flex;
      position: relative;
      justify-content: flex-end;
      height: 100%;
      align-self: center;
      width: 100%;
      margin-right: 50px;
    }
    &-title {
      width: 100%;
      text-align: center;
      margin-left: 50%;
      font-size: 30px;
      transform: translate(-50%, 0%);
    }
  }
}
</style>
