import {Swiper, SwiperSlide} from 'swiper/vue';
import vuekonva from "vue-konva"
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('Swiper', Swiper)
    nuxtApp.vueApp.component('swiper-slide', SwiperSlide)
nuxtApp.vueApp.use(vuekonva)
});