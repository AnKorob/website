<template>
  <div class="footer">
    <div class="footer-text">Made by Andrey Korobeynikov</div>
    <div class="footer-checkbox">
      <input
        type="checkbox"
        id="switch"
        v-model="isThemeDark"
        @change="onChangeTheme"
      />
      <label for="switch" class="checkbox-label">Toggle </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      isThemeDark: false,
    };
  },
  methods: {
    onChangeTheme() {
      if (this.isThemeDark) document.body.classList.add("dark");
      else document.body.classList.remove("dark");
    },
  },
};
</script>
<style lang="scss">
input[type="checkbox"] {
  margin-right: 20px;
  height: 0;
  width: 0;
  visibility: hidden;
}
label {
  cursor: pointer;
  text-indent: -9999px;
  width: 40px;
  height: 20px;
  background: #e4dcd2;
  display: block;
  border-radius: 18px;
  position: relative;
}
label:after {
  content: "";
  position: absolute;
  top: 0.5px;
  bottom: 0.5px;
  left: 1px;
  width: 18px;
  height: 18px;
  background: #fff;
  border-radius: 18px;
  transition: 0.3s;
}
input:checked + label {
  background: #95978f;
}
input:checked + label:after {
  left: calc(100% - 2px);
  transform: translateX(-100%);
}
label:active:after {
  width: 26px;
}
.checkbox-label {
  display: flex;
  justify-content: center;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;
  background-color: #cabcab;
  justify-content: space-between;
  &-text {
    margin-left: 20px;
    height: 100%;
    display: flex;

    text-align: center;
    align-items: center;
  }
  &-checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
}
</style>
