<template>
  <div class="intro" hash="#Home">
    <div class="about">
      <div class="about-text">Анастасия Коробейникова</div>
      <div class="about-text">
        <p>Мастер ногтевого дизайна</p>
        <br />
        <p>Нутрициолог</p>
      </div>
    </div>
    <div class="about-content">
      <div class="about-content-title">Обо мне</div>
      <p>
        Привет всем! Меня зовут Анастасия. Я мастер ногтевого дизайна и
        нутрициолог из Екатеринбурга. Обучаю людей ногтевому дизайну и
        правильному питанию. Готова помочь разобраться вам с вашим здоровьем и
        красотой ваших ногтей.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutBlock",
  data() {
    return {};
  },
  components: {},
};
</script>
<style lang="scss">
.about {
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  background-image: url(@/assets/avatar.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  box-shadow: 0 0 8px 8px white inset;
  color: #fff;
  justify-content: space-around;
  &-text {
    text-align: center;
    font-weight: 600;
    font-size: 50px;
    mix-blend-mode: soft-light;
  }
  &-content {
    display: flex;
    justify-content: center;
    text-align: justify;
    font-size: 18px;

    flex-direction: column;
    padding: 30px;
    &-title {
      display: flex;
      justify-content: center;
      font-size: 30px;
      text-align: center;
      margin-bottom: 10px;
    }
  }
}
</style>
