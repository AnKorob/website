<template>
  <div>
    <div class="container-card container-prodcard">
      <div class="card">
        <img
          class="card-image"
          :src="require(`@/assets/cover/${card.image}.jpg`)"
          alt="img"
        />
        <div class="card-content">
          <h3 class="card-content-title">{{ card.title }}</h3>
          <p class="card-content-text">{{ card.content }}</p>
        </div>
      </div>
      <button class="button" @click="openModal">Подробнее</button>
    </div>
    <Popup v-if="modalActive" @closeModal="closeModal" :card="card" />
  </div>
</template>

<script>
import Popup from "@/components/Popup.vue";
export default {
  name: "CourceCard",
  data() {
    return {
      modalActive: false,
    };
  },
  props: { card: Object },
  components: {
    Popup,
  },
  methods: {
    openModal() {
      this.modalActive = true;
    },
    closeModal() {
      this.modalActive = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.container-card {
  /* z-index: 1; */
  position: relative;
  display: flex;
  width: 250px;
  height: 300px;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  border-radius: 20px;
  background: linear-gradient(145deg, #b6a99a, #d8c9b7);
  box-shadow: 6px 6px 14px #5d564f, -6px -6px 14px #ffffff;
  font-size: 14px;
  border-width: 5px;
  border: #ffffff;
  border-style: solid;
  gap: 10px;
  margin: 30px;
}
.card {
  border-width: 5px;
  border: #ffffff;
  width: 250px;
  height: 300px;
  border-radius: 20px;
  font-size: auto;
  text-align: center;
  background-color: #cabcab;
  transition: transform 0.6s;
  &-image {
    border-radius: 20px 20px 0 0;
    height: 150px;
    width: 250px;
  }
  &-content {
    padding: 10px;
    &-title {
      text-align: left;
      margin: 5px 0;
    }
    &-text {
      text-align: justify;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      line-height: 1.3em;
      height: 3.9em;
    }
  }
}
.container-prodcard {
  &:hover {
    & > .card {
      background-color: #cabcab;
      transform: translate(0, -10px);
    }
    & > .button {
      opacity: 1;
      transition: opacity 2s;
    }
  }
}

.button {
  position: absolute;
  bottom: 5px;
  left: 30px;
  width: 200px;
  height: 30px;
  background: rgb(255, 255, 255);
  border: none;
  border-radius: 6px;
  opacity: 0;
  text-transform: uppercase;
  font-weight: 800;
  color: rgb(0, 0, 0);
  &:hover {
    cursor: pointer;
  }
}

.block-heading-text {
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  & > p {
    padding-bottom: 10px;
  }
}
</style>
