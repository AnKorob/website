<template>
  <!-- <div :class="['block', { 'block-intro': block.needImg }]">
    <div class="block-heading">
      {{ block.title }}
    </div>
    <div class="block-content">{{ block.content }}</div>
    <ContactsBlock />
  </div> -->
</template>
<script>
import ContactsBlock from "./ContactsBlock.vue";
export default {
  name: "PageBlock",
  data() {
    return {};
  },
  props: {},
  components: {
    ContactsBlock,
  },
};
</script>
<style lang="scss">
.block {
  /* background-image: url(@/assets/avatar.jpg);  */
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 400px;
  position: relative;
  &:only-of-type {
    min-height: 100vh;
  }
  &:first-of-type {
    margin-top: 60px;
  }
  &:nth-child(2n + 1) {
    background-color: #e4dcd2;
  }
  &-intro {
    color: #fff;
    width: x;
    height: auto;
    display: flex;
    text-align: center;
    background-image: url(@/assets/avatar.jpg);
    background-color: blue;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    box-shadow: 0 0 8px 8px white inset;
  }
  &-heading {
    display: flex;
    width: 100%;
    justify-content: center;
    padding-bottom: 16px;
    align-items: center;
    & > .nav-link-active {
      display: flex;
      justify-content: right;
    }
  }
  &-content {
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
    &-text {
      text-align: center;
      & > p:nth-child(n) {
        margin-top: 10px;
      }
    }
  }
}
</style>
