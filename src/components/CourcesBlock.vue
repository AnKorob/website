<template>
  <div class="cources">
    <div class="cources-header">
      <div class="cources-header-title">Мои курсы</div>
      <router-link :to="{ name: 'Cources' }" class="nav-link">Еще</router-link>
    </div>
    <div class="cources-content">
      <CourceCard v-for="card in cards" :key="card.title" :card="card" />
    </div>
  </div>
</template>
<script>
import CourceCard from "@/components/cards/CourceCard.vue";
export default {
  name: "CourcesBlock",
  data() {
    return {
      cards: [
        {
          title: "Современный маникюр",
          content:
            "Вы научитесь выравнивать ногтевую пластину и создавать идеальные блики. Сделаете технику маникюра чище и решите проблемы со срезом Вас обучать как покрывать гель-лаком под кутикулу и решать проблемы затёков, сколов и отслойки, а так же быстро и ровно опиливать популярные формы. Вы освоите технику скоростного опила форм и снятия гель-лака. 2 дня 6999 рублей",
          image: 1,
        },
        {
          title: "Аппаратный маникюр",
          content:
            "Вы научитесь делать аппаратный и комбинированный маникюр, выполнять работу гель-лаком, правильно подбирать материалы, инструменты и оборудование 6 дней 9999 рублей",
          image: 2,
        },
        {
          title: "Повышение квалификации",
          content:
            "Вы научитесь работать быстрее без потери качества. Будете выполнять срез без режущего инструмента, чтобы кутикула блестела. Вас научат укреплять ногти полигелем, восстанавливать форму на скрученных и клюющих ногтях Вы будете практиковать опил идеальной формы. 3 дня 12999 рублей",
          image: 3,
        },
      ],
    };
  },
  components: {
    CourceCard,
  },
};
</script>
<style lang="scss" scoped>
.cources {
  display: flex;
  width: 100%;
  min-height: 400px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &-content {
    display: flex;
    flex-direction: row;
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
      font-size: 30px;
      margin-left: 50%;
      transform: translate(-50%, 0%);
    }
  }
}
</style>
