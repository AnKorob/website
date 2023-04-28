<template>
  <div class="contact" ref="contacts" v-scroll="'contacts'">
    <div class="contact-title">Контакты</div>
    <div class="contact-text">
      Если мои услуги заинтересовали вас или вы хотите задать мне вопросы, то
      пишите мне в соцсетях.
    </div>
    <div class="contact-content">
      <a href="https://instagram.com/nastya_istomina" target="_blank">
        <img class="contact-content-logo" src="@/assets/contacts/ig.svg" />
      </a>
      <a
        href="https://vk.com/id30823412"
        target="_blank"
        class="contact-content-link"
      >
        <img class="logo" src="@/assets/contacts/vk.svg" />
      </a>
      <a
        href="https://wa.me/79502054952?text=Я%20заинтересован%20в%20покупке%20вашего%20курса"
        target="_blank"
      >
        <img class="contact-content-logo" src="@/assets/contacts/wa.svg" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactsBlock",
  data() {
    return {};
  },
  components: {},
};
</script>
<style lang="scss">
.contact {
  width: 100%;
  min-height: 400px;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  &-title {
    margin-bottom: 10px;
    font-size: 30px;
  }
  &-text {
    margin-bottom: 10px;
  }
  &-content {
    display: flex;
    text-align: center;
    justify-content: center;
    &-link {
      & > .logo {
        width: 48px;
        height: 48px;
      }
    }
  }
}
</style>
