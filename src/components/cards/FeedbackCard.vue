<template>
  <div class="feedbackcard">
    <img
      :src="require(`@/assets/face/${background.person}.jpg`)"
      alt=""
      class="feedbackcard-img"
    />
    <img
      :src="require(`@/assets/answer/${background.comment}.jpg`)"
      alt=""
      class="feedbackcard-img"
    />
  </div>
</template>
<script>
export default {
  name: "FeedbackCard",
  data() {
    return {};
  },
  props: {
    background: Object,
  },
};
</script>
<style lang="scss">
.feedbackcard {
  flex-direction: column;
  margin: 10px;
  width: 250px;
  height: 300px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  border-width: 5px;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow: 6px 6px 14px #757575, -6px -6px 14px #ffffff;
  border: #ffffff;
  border-style: solid;
  &-img {
    width: 100%;
    height: 50%;
    object-fit: cover;
    &:nth-child(odd) {
      border-radius: 10px 10px 0 0;
    }
    &:nth-child(even) {
      border-radius: 0 0 10px 10px;
    }
  }
}
</style>
