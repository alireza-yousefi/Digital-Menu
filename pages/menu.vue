<template>
  <div class="bg-black text-white min-h-screen p-4">
    
    <!-- هدر -->
    <div :class="['sticky top-0 z-50 bg-black transition-all duration-300', { 'scrolled': isScrolled }]" ref="header">
  <div :class="['flex justify-between items-center mb-1', isScrolled ? 'header-small' : 'header-large']">
    <button class="text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="38" class="mt-1 transition-transform duration-300" viewBox="0 0 24 24">
        <path fill="white" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />
      </svg> <!-- آیکون منو -->
    </button>
    
  <!-- عنوان اصلی صفحه -->
  <h1 :class="['text-2xl rtl font-bold text-[28px] text-center transition-all', { 'scrolled-title': isScrolled }]">کــافـِـه سـَـرو</h1>
  
    <nuxtlink class="text-white">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 transition-transform duration-300">
        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
      </svg>
      <!-- آیکون سفارش -->
    </nuxtlink>
  </div>

  <!-- تب‌ها برای دسته‌بندی -->
  <div id="tabs" class="flex space-x-2 pb-2 rtl">
    <button class="bg-orange-500 px-4 py-2 ml-2 rounded">همه</button>
    <button class="bg-gray-700 px-4 py-2 rounded">قهوه</button>
    <button class="bg-gray-700 px-4 py-2 rounded">شیک</button>
    <button class="bg-gray-700 px-4 py-2 rounded">اسموتی</button>
  </div>
</div>

    <!-- اسلایدر محصولات -->
    <ClientOnly>
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="coverflowEffect"
        :pagination="false"
        :modules="modules"
        class="mySwiper mt-3 mb-6"
      >
        <!-- اسلایدهای هر محصول -->
        <swiper-slide v-for="food in foodList" :key="food.id">
          <div @click="() => router.push(`/food/${food.id}`)" class="relative h-full w-full">
            <img :src="food.image" :class="food.animate" alt="photo">
            <div class="box">
              <span class="justify-center text-3xl py-2"> {{ food.title }} </span>
              <span class="justify-center text-green-500 text-[20px] font-normal" style="direction: rtl;">
                {{ food.price }} هزار تومان
              </span>
              <span class="Estedad_Thin text-[14px] font-normal mx-5 text-center leading-7">{{ food.dis }}</span>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </ClientOnly>

    <!-- لیست محصولات -->
    <div class="rtl">
      <nuxt-link
        v-for="food in foodList"
        :key="food.id"
        :to="`/food/${food.id}`"
        class="mb-2 bg-gray-800 p-4 rounded flex items-center"
      >
        <img :src="food.image" alt="Product" class="w-16 h-16 object-cover rounded-lg mr-4">
        <div class="flex flex-col w-full">
          <span class="text-white text-xl pb-2 text-center">{{ food.title }}</span>
          <span class="justify-center text-green-500 text-[15px] font-normal text-center" style="direction: rtl;">
            {{ food.price }} هزار تومان
          </span>
        </div>
        <UIcon name="material-symbols:arrow-back-ios-new-rounded" class="w-8 h-8" />
      </nuxt-link>
    </div>

  </div>
</template>
<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

// تنظیمات برای ماژول‌های اسلایدر
const modules = [EffectCoverflow, Pagination];
const coverflowEffect = {
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
};

// تعریف لیست محصولات
interface Food {
  id: number;
  title: string;
  image: string;
  price: number;
  dis: string;
  animate: string;
}
const foodList = ref<Food[]>([
  { id: 1, title: 'چیــز کــیــک', image: '/img/pexels-elifgokce787-16871293-removebg-preview.png', price: 86, dis: 'پنیر خامه ای , بیسکوییت , سس شکلات', animate: 'animate-spin1' },
  { id: 2, title: 'کاپـوچیــنو', image: '/img/pexels-orlovamaria-4916561-removebg-preview.png', price: 73, dis: 'پنیر خامه ای , بیسکوییت , سس شکلات', animate: 'animate-spin1' },
  { id: 3, title: 'آیـس لـته', image: '/img/ice-latte2.png', price: 76, dis: 'پنیر خامه ای , بیسکوییت , سس شکلات', animate: 'animate-bounce' },
  { id: 4, title: 'شیک توت فرنگی', image: '/img/shake-toot.png', price: 90, dis: 'پنیر خامه ای , بیسکوییت , سس شکلات', animate: 'animate-bounce' },
  { id: 5, title: 'سیب زمینی', image: '/img/frise.png', price: 98, dis: 'سیب زمینی , سس , آویشن , لیمو', animate: 'animate-spin1' },
]);

// برای کنترل وضعیت اسکرول و کوچک‌سازی هدر
const isScrolled = ref(false);

function handleScroll() {
  // تغییر وضعیت اسکرول بر اساس موقعیت صفحه
  isScrolled.value = window.scrollY > 50;
}

// افزودن و حذف کردن کنترل اسکرول هنگام بارگذاری و خروج از صفحه
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// روتینگ
const router = useRouter();

</script>

<style>
/* استایل اسلایدر */
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 280px;
  height: 400px;
}
.swiper-slide img {
  display: block;
  width: 100%;
  left: 2.5px;
  @apply h-56 object-contain absolute top-2 z-20;
}

/* استایل جعبه توضیحات محصول در اسلایدر */
.swiper-slide .box {
  border-bottom-right-radius: 1000px !important;
  border-bottom-left-radius: 1000px !important;
  @apply absolute bottom-0 bg-gray-800 flex flex-col h-72 pt-32 items-center rounded-b-3xl rounded-t-full w-full z-10;
}

/* انیمیشن‌ها */
.animate-spin1 {
  animation: spin 4s cubic-bezier(0.42, 0, 0.35, 1.17) infinite;
}

@keyframes bounce {
  0%, 70% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-20px);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}
.transition-all {
  transition: all 0.3s ease;
}
.header-large {
  padding-top: 15px; /* فضای بزرگتر */
  padding-bottom: 15px; /* فضای بزرگتر */
  transition:  0.3s ease;

}

.header-small {
  padding: 10px; /* فضای کوچکتر */
  transform: scale(0.9); /* کوچک کردن */
  transition:  0.3s ease;

}

.scrolled .header-large {
  padding: 10px; /* تغییر padding هنگام اسکرول */
  transform: scale(0.9); /* کوچک کردن هنگام اسکرول */
  transition:  0.3s ease;

}

.scrolled-title {
  font-size: 1.5rem; /* کوچک‌سازی متن */
  transition: font-size 0.3s ease;
}

.scrolled svg {
  width: 35px; /* تغییر اندازه آیکون منو */
  height: 30px; /* تغییر اندازه آیکون منو */
  transition:  0.3s ease;

}
</style>