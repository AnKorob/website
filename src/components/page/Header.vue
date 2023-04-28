<template>
  <div class="nav">
    <ul class="nav-list">
      <li class="nav-list-item" v-scroll:click="'home'">
        <router-link :to="{ name: 'Homepage' }" class="nav-link">
          Домой
        </router-link>
      </li>
      <li class="nav-list-item">
        <router-link :to="{ name: 'Cources' }" class="nav-link"
          >Курсы</router-link
        >
      </li>
      <li class="nav-list-item">
        <router-link :to="{ name: 'Portfolio' }" class="nav-link"
          >Портфолио</router-link
        >
      </li>
      <li class="nav-list-item" v-scroll:click="'feedback'">
        <router-link :to="{ name: 'Homepage' }" class="nav-link">
          Отзывы
        </router-link>
      </li>
      <li class="nav-list-item" v-scroll:click="'contacts'">
        <router-link :to="{ name: 'Homepage' }" class="nav-link">
          Связаться со мной
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  components: {},
};
</script>
<style lang="scss">
.nav {
  width: 100%;
  z-index: 2;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  height: 60px;
  list-style: none;
  background-color: #cabcab;
  align-items: center;
  justify-items: center;
  &-link {
    color: #000000;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  &-list {
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    height: 100%;
    &-item {
      align-items: center;
      display: flex;
      text-align: center;
      justify-content: space-evenly;
      height: 100%;
      width: 100%;
      &-active {
        width: 100%;
        background-color: rgb(255, 255, 255);
      }
      &:hover {
        background-color: rgb(255, 255, 255);
      }
    }
  }
}
</style>
