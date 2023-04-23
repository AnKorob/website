<template>
<div id="popup" class="popup">
    <div class="popup__body">
        <div class="popup__content">
            <a href="#" class="popup__close close__popup">X</a>
            <div class="popup__title">Современный маникюр</div>
            <img class="card__image" src="@/assets/cover/1111.jpg"  />
            <div class="popup__text">
                <p>
                Вы научитесь выравнивать ногтевую пластину и создавать «идеальные
                блики».
                </p>
                <p>Сделаете технику маникюра чище и решите проблемы со срезом.</p>
                <p>
                Вас обучат, как покрывать гель-лаком под кутикулу и решать
                проблемы затёков, сколов и отслойки.
                </p>
                <p>
                Так же вы научитесь быстро и ровно опиливать популярные формы.
                </p>
                <p>Вы освоите технику скоростного опила форм и снятия гель-лака.</p>
                <p>2 дня 6999 рублей</p>
            </div>
            <a
            href="https://api.whatsapp.com/send?phone=79502054952&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB(%D0%B0)%20%D0%B1%D1%8B%20%D0%BF%D1%80%D0%B8%D0%BE%D0%B1%D1%80%D0%B5%D1%81%D1%82%D0%B8%20%D0%B2%D0%B0%D1%88%20%D0%BA%D1%83%D1%80%D1%81%20%22%D0%A1%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BC%D0%B0%D0%BD%D0%B8%D0%BA%D1%8E%D1%80%22"
            target="_blank"
            class="buy"
            >Купить
            </a>
        </div>
    </div>
</div>
</template>
<script>
import Loader from "@/components/Loader";
export default {
  name: "App",
  data() {
    return {
      loading: true,
      isThemeDark: false,
    };
  },
  props: {
    block: {
      type: Object,
    
    },
    index: Number,
  },
  components: {
    Loader,
  },
  mounted(){
   
    },
  methods:{

  }
};
</script>
<style>
.popup{
    z-index: 100;
    position: fixed;
    width: 100%;
    height:100%;
    background-color: rgba(0,0,0,0.8);
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    overflow-y: auto;
    overflow-x: hidden;
    transition: all 0.8s ease 0s;
}
.open.popup{
    opacity: 1;
    visibility: visible;
}
.open.popup .popup__content{    
    opacity: 1;
}
.popup__body{
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    margin-top: 100px;
}
.popup__content{
    display: flex;
    margin-top: 300px;
    position: relative;
    background-color: #fff;
    color: #000000;
    max-width: 800px;
    padding: 20px 20px;
    opacity: 0;
    transform: translate(0px, -100%);
    transition: all 0.8s ease 0s;
    flex-direction: column;
    align-items: center;
    align-content: center;
}
.popup__close{
    z-index: 101;
    position: absolute;
    font-size: 25px;
    right: 5px;
    top: 5px;
    color: #000000;
    text-decoration: underline;
}
.popup__title{
    font-size: 25px;
}
.popup__text{
    font-size: 15px;
    text-align: center;
}
.body.lock{
    overflow: hidden;
}
.popup__link{
    text-decoration: none;
    color: #000000;
}
</style>


