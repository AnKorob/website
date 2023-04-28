<template>
  <div id="popup" class="popup">
    <div class="popup-body">
      <div class="popup-body-content">
        <div class="popup-body-content-title">{{ card.title }}</div>
        <div class="popup-body-content-block">
          <div class="popup-body-content-block-part">
            <img
              class="card-image"
              :src="require(`@/assets/cover/${card.image}.jpg`)"
            />
          </div>
          <div class="popup-body-content-block-part">
            <button
              class="popup-body-content-block-part-close close-popup"
              @click="$emit('closeModal')"
            >
              x
            </button>

            <div class="popup-body-content-block-part-text">
              {{ card.content }}
            </div>
            <button
              href="https://api.whatsapp.com/send?phone=79502054952&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB(%D0%B0)%20%D0%B1%D1%8B%20%D0%BF%D1%80%D0%B8%D0%BE%D0%B1%D1%80%D0%B5%D1%81%D1%82%D0%B8%20%D0%B2%D0%B0%D1%88%20%D0%BA%D1%83%D1%80%D1%81%20%22%D0%A1%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BC%D0%B0%D0%BD%D0%B8%D0%BA%D1%8E%D1%80%22"
              target="_blank"
              class="buy"
            >
              Купить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Popup",
  data() {
    return {
      isThemeDark: false,
    };
  },
  props: { card: Object },
};
</script>
<style lang="scss">
.popup {
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.8s ease 0s;
  &-body {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    &-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;

      max-width: 800px;
      padding: 20px 20px;
      opacity: 1;
      transform: translate(0px, -100%);
      transition: all 0.8s ease 0s;
      border-radius: 15px;
      margin-top: 500px;
      height: 500px;
      background-color: #fff;
      color: #000000;
      &-block {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        &-part {
          display: flex;
          flex-direction: column;
          width: 100%;
          align-items: center;
          &:nth-child(2) {
            justify-content: center;
          }
          & > .card-image {
            width: calc(100% - 20px);
            float: left;
            height: calc(100% - 20px);
          }
          &-close {
            float: right;
            z-index: 101;
            position: absolute;
            font-size: 25px;
            right: 5px;
            top: 5px;
            color: #000000;
            text-decoration: none;
          }
          & > .buy {
            display: flex;
            width: 100px;
            justify-content: center;
            align-items: center;
            text-align: center;
            position: absolute;
            bottom: 30px;
            background-color: #cabcab;
            width: 200px;
            height: 30px;
            border: none;
            border-radius: 6px;
          }

          &-text {
            font-size: 15px;
          }
        }
      }
      &-title {
        font-size: 25px;
      }
    }
  }
}
.open.popup {
  opacity: 1;
  visibility: visible;
}
.open.popup .popup-body-content {
  opacity: 1;
}

.body.lock {
  overflow: hidden;
}
.popup-link {
  text-decoration: none;
  color: #000000;
}
.card-image {
  height: 150px;
  width: 250px;
  border-radius: 10px;
}
</style>
