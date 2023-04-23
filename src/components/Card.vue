<template>
<div >
    <div class="container__card container__prodcard">
        <div class="card">
            <img class="card__image" src="@/assets/cover/1111.jpg" alt="img" />
            <div class="card__content">
                <h3 class="card__content_title">Современный маникюр</h3>
                <p class="card__content_text">
                    Вы научитесь выравнивать ногтевую пластину и создавать
                    «идеальные блики». Сделаете технику маникюра чище и решите
                    проблемы со срезом Вас обучать как покрывать гель-лаком под
                    кутикулу и решать проблемы затёков, сколов и отслойки, а так
                    же быстро и ровно опиливать популярные формы. Вы освоите
                    технику скоростного опила форм и снятия гель-лака. 2 дня 6999
                    рублей
                </p>
            </div>
        </div>
        <button class="button">
            <a href="#popup" class="popup__link">Подробнее</a>
        </button>
    </div>
</div> 
</template>
<style>
.container__card {
    /* z-index: 1; */
    display:flex;
    width: 250px;
    height: 300px;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    position: relative;
    border-radius: 20px;
    background: linear-gradient(145deg, #b6a99a, #d8c9b7);
    box-shadow:  6px 6px 14px #5d564f,
             -6px -6px 14px #ffffff;
    font-size: 14px;
    border-width: 5px;
    border: #ffffff;
    border-style: solid;
    margin-right: auto;
    margin-top: 30px;
}
.card {
    border-width: 5px;
    border: #ffffff;
    width: 250px;
    height: 300px;
    border-radius: 20px;
    font-size:auto;
    text-align: center;
    background-color:#cabcab;
    transition: transform 0.6s;
}
.container__prodcard:hover > .card {
    
    background-color:#cabcab;
    transform: translate(0, -10px);
}
.card__content {
    padding: 10px;
}
.card__content_title {
    text-align: left;
    margin: 5px 0;
}
.card__content_text {
    text-align: justify;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.3em;
    height: 3.9em;
}
.card__image {
    border-radius: 20px 20px 0 0;
    height: 150px;
    width: 250px;
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
}
.button:hover {
    cursor: pointer;
}
.container__prodcard:hover > .button {
    opacity: 1;
    transition: opacity 2s;
}
.block__heading_text{
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 10px;
    flex-direction: column;
    align-items: center;
}
.block__heading_text > p {
    padding-bottom: 10px;
}
</style>
<script>
import Loader from "@/components/Loader";
export default {
  name: "App",
  data() {
    return {
      loading: true,
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
};
</script>
