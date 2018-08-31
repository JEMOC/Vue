<template>
    <div class="carousel">
        <div class="panel" @mouseover="stop()" @mouseout="play()">
            <ul class="pic" :style="containerStyle">
                <li v-for="(item,i) in data" class="scrollx" :key="i">
                    <div class="lazy-img">
                        <img :src="item.img" alt="">
                    </div>
                    <a>更多</a>
                </li>
            </ul>
            <ul class="title">
                <li v-for="(item, i) in data" :key="i" :class="{on: index === i}" >
                    <a>{{item.title}}</a>
                </li>
            </ul>
            <ul class="dot">
                <span v-for="(item,i) in data" :key="i" :class="{on: index === i}" @click="index = i"></span>
            </ul>
        </div>
    </div>
</template>

<script src="./Carousel.js"></script>

<style lang="scss" scoped src="./Carousel.scss"></style>