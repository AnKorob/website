<template>
  <div class="feedback" ref="feedback" v-scroll="'feedback'">
    <div class="feedback-title">Отзывы</div>
    <div class="feedback-content">
      <FeedbackCard
        v-for="background in backgrounds"
        :key="background.comment"
        :background="background"
      />
    </div>
  </div>
</template>
<script>
import FeedbackCard from "@/components/cards/FeedbackCard.vue";
export default {
  name: "FeedbackBlock",
  data() {
    return {
      backgrounds: [
        { person: 1, comment: 1 },
        { person: 2, comment: 2 },
        { person: 3, comment: 3 },
        { person: 4, comment: 4 },
      ],
    };
  },
  components: { FeedbackCard },
};
</script>
<style lang="scss">
.feedback {
  min-height: 400px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &-title {
    font-size: 30px;
  }
}
</style>
