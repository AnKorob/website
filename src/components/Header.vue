<template>
    <div>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item"><router-link to="/" class="nav__link">Домой</router-link></li>
                <li class="nav__item"><router-link to="/Cources" class="nav__link">Курсы</router-link></li>
                <li class="nav__item"><router-link to="/Portfolio" class="nav__link">Портфолио</router-link></li>
                <li class="nav__item"><a href="#comment" class="nav__link">Отзывы</a></li>
                <li class="nav__item"><a href="#contact" class="nav__link">Связаться со мной</a></li>
            </ul>
        </nav>
    </div>
</template>
<style scoped >
.nav {
    width: 100%;
    z-index: 10;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-around;
    height: 60px;
    list-style: none;
    background-color:  #cabcab;
    align-items: center;
    justify-items: center;
}
.nav__item {
    list-style: none;
    align-items: center;
    justify-items: center;
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
}
.nav__list{
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    font-size: 16px; 
    height: 100%;
    list-style: none;
}
.nav__item_active {
    width: 100%;
    background-color: rgb(255, 255, 255);
}
.nav__item:hover {
    background-color: rgb(255, 255, 255);
}
.nav__link{
    color: #000000;
    
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.nav__link_ext{
    color: #000000;
    
    position: relative;
    left: 36%;
}
</style>