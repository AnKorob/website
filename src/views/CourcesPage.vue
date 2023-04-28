<template>
  <div class="block">
    <div class="block-title">Мои курсы</div>
    <div class="block-content">
      <CourceCard v-for="card in cards" :key="card.title" :card="card" />
    </div>
  </div>
</template>

<script>
import CourceCard from "@/components/cards/CourceCard.vue";

export default {
  name: "CourcesPage",
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
<style lang="scss">
// .block {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   width: 100%;

//   &-content {
//     display: flex;
//     width: 100%;
//     justify-content: center;
//     padding-top: 20px;
//     padding-bottom: 20px;
//     &-container {
//       width: 100%;
//       height: 100%;
//       max-width: 1160px;
//       display: flex;
//       text-align: center;
//       flex-wrap: wrap;
//       flex-flow: wrap;
//       justify-content: flex-start;
//     }
//   }
// }
// .block-content-container {
//   width: 100%;
//   height: 100%;
//   max-width: 1160px;
//   display: flex;
//   text-align: center;
//   flex-wrap: wrap;
//   flex-flow: wrap;
//   justify-content: flex-start;
// }
// .block-content {
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   padding-top: 20px;
//   padding-bottom: 20px;
// }
.block {
  margin-top: 70px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  &-content {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  &-title {
    font-size: 30px;
  }
}
</style>
