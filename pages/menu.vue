<template>
  <div class="bg-black text-white min-h-screen p-4">
    
    <!-- هدر -->
    <div :class="['sticky top-0 z-50 bg-black transition-all duration-300', { 'scrolled': isScrolled }]" ref="header">
  <div :class="['flex justify-between items-center mb-1', isScrolled ? 'header-small' : 'header-large']">
    <button class="text-white" @click="toggleMenu">
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="38" class="mt-1 transition-transform duration-300" viewBox="0 0 24 24">
      <path fill="white" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />
    </svg>
    </button>


    
  <!-- عنوان اصلی صفحه -->
  <h1 :class="['text-2xl rtl font-bold text-[28px] text-center transition-all', { 'scrolled-title': isScrolled }]">کــافـِـه سـَـرو</h1>
  
    <nuxt-link  to="/orders">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 transition-transform duration-300">
        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
      </svg>
      <!-- آیکون سفارش -->
    </nuxt-link>
  </div>

  <div v-if="isMenuOpen" class="fixed inset-0 z-50 bg-black bg-opacity-80" @click="toggleMenu">

<div
  :class="['fixed top-0 left-0 z-1000 bg-gray-900 w-64 h-full transform transition-transform overflow-hidden ', isMenuOpen ? 'translate-x-0' : '-translate-x-full']"
>
  <div class="p-4 text-white">
    <h2 class="text-3xl font-bold mb-4">منو</h2>
    <ul>
      <li class="py-2"><nuxt-link to="/">خانه</nuxt-link></li>
      <li class="py-2"><nuxt-link to="/orders">سفارش‌ها</nuxt-link></li>
      <li class="py-2"><nuxt-link to="/about">درباره ما</nuxt-link></li>
      <!-- لینک‌های دیگر به دلخواه -->
       <div class="mt-20 text-center">
<span >developed by</span><br><span class="font-bold text-orange-500 text-xl">Alireza Yousefi</span> </div>
    </ul>
  </div>
</div>
</div>

  <!-- تب‌ها برای دسته‌بندی -->
  <div class="flex overflow-auto pb-2 space-x-2 mb-4 rtl">
  <button
    v-for="category in ['همه', 'قهوه بار', 'قهوه سرد', 'چای و دمنوش', 'نوشیدنی گرم', 'آبمیوه', 'شربت و عرقیجات', 'شیک', 'کیک', 'غذا', 'صبحانه']"
    :key="category"
    :class="{
      'bg-orange-500 text-white font-bold': selectedCategory === category,
      'bg-gray-700 text-white': selectedCategory !== category
    }"
    class="px-4 mx-2 py-2 rounded transition-colors duration-300"
    @click="selectCategory(category)"
  >
    {{ category }}
  </button>
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
        <swiper-slide v-for="food in filteredFoodList" :key="food.id">
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
  v-for="food in filteredFoodList"
  :key="food.id"
  :to="`/food/${food.id}`"
  class="mb-2 bg-gray-800 p-4 rounded-3xl flex items-center"
>

      
        <img :src="food.image" alt="Product" class=" h-16 object-cover rounded-lg mr-4">
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

// تعریف لیست محصولات///////////////////////////////////////////////////////////////////////////////////////////////////////
interface Food {
  id: number;
  title: string;
  image: string;
  price: number;
  dis: string;
  animate: string;
}
const foodList = ref<Food[]>([
  {
    id: 1,
    title: 'چیــز کــیــک',
    category: 'کیک',
    image: '/img/pexels-elifgokce787-16871293-removebg-preview.png',
    price: 86,
    dis: 'پنیر خامه‌ای، بیسکوییت، لایه‌ای از سس شکلات',
    animate: 'animate-spin1'
  },
  {
    id: 2,
    title: 'کاپـوچیــنو',
    category: 'قهوه بار',
    image: '/img/pexels-orlovamaria-4916561-removebg-preview.png',
    price: 73,
    dis: 'قهوه‌ی داغ، کف شیر، طعم‌دهی ملایم شکلات',
    animate: 'animate-spin1'
  },
  {
    id: 3,
    title: 'آیـس لـته',
    image: '/img/ice-latte2.png',
    category: 'قهوه سرد',
    price: 76,
    dis: 'قهوه سرد، شیر خنک، همراه با یخ',
    animate: 'animate-bounce'
  },
  {
    id: 4,
    title: 'شیک توت فرنگی',
    image: '/img/shake-toot.png',
    price: 90,
    category: 'شیک',
    dis: 'توت فرنگی تازه، بستنی، شیر خامه‌ای',
    animate: 'animate-bounce'
  },
  {
    id: 5,
    title: 'سیب زمینی',
    image: '/img/frise.png',
    category: 'غذا',
    price: 98,
    dis: 'سیب زمینی سرخ شده، سس مخصوص، طعم‌دهی آویشن و لیمو',
    animate: 'animate-spin1'
  },
  {
    id: 6,
    title: 'اسپرسو',
    category: 'قهوه بار',
    image: '',
    price: 55,
    dis: 'قهوه‌ی غلیظ و تند، بهترین برای شروع روز',
    animate: 'animate-spin1'
  },
  {
    id: 7,
    title: 'دوپیو (دوبل)',
    category: 'قهوه بار',
    image: '',
    price: 60,
    dis: 'دو شات اسپرسو برای علاقه‌مندان به قهوه پرقدرت',
    animate: 'animate-spin1'
  },
  {
    id: 8,
    title: 'آمریکانو',
    category: 'قهوه بار',
    image: '',
    price: 65,
    dis: 'قهوه رقیق با آب گرم، انتخابی ملایم‌تر',
    animate: 'animate-spin1'
  },
  {
    id: 9,
    title: 'لته',
    category: 'قهوه بار',
    image: '',
    price: 68,
    dis: 'قهوه با کف شیر نرم، طعم ملایم و کرمی',
    animate: 'animate-spin1'
  },
  {
    id: 10,
    title: 'موکا',
    category: 'قهوه بار',
    image: '',
    price: 75,
    dis: 'مخلوط قهوه، شکلات و کف شیر',
    animate: 'animate-spin1'
  },
  {
    id: 11,
    title: 'ماکیاتو',
    category: 'قهوه بار',
    image: '',
    price: 70,
    dis: 'شات اسپرسو با کمی کف شیر',
    animate: 'animate-spin1'
  },
  {
    id: 12,
    title: 'ترک',
    category: 'قهوه بار',
    image: '',
    price: 65,
    dis: 'قهوه‌ای سنتی با عطر و طعمی خاص',
    animate: 'animate-spin1'
  },
  {
    id: 13,
    title: 'آیس کافی',
    category: 'قهوه سرد',
    image: '',
    price: 80,
    dis: 'قهوه خنک و انرژی‌بخش',
    animate: 'animate-spin1'
  },
  {
    id: 14,
    title: 'آیس موکا',
    category: 'قهوه سرد',
    image: '',
    price: 85,
    dis: 'ترکیبی از قهوه، شکلات و یخ',
    animate: 'animate-spin1'
  },
  {
    id: 15,
    title: 'آفوگاتو',
    category: 'قهوه سرد',
    image: '',
    price: 95,
    dis: 'ترکیب قهوه و بستنی، خوشمزه و خاص',
    animate: 'animate-spin1'
  },
  {
    id: 16,
    title: 'فراپاچینو',
    category: 'قهوه سرد',
    image: '',
    price: 90,
    dis: 'نوشیدنی قهوه خنک و خامه‌ای',
    animate: 'animate-spin1'
  },
  {
    id: 17,
    title: 'اسموتی سرو کاشمر',
    category: 'آبمیوه',
    image: '',
    price: 100,
    dis: 'اسموتی با طعم تازه و طبیعی میوه‌های کاشمر',
    animate: 'animate-spin1'
  },
  {
    id: 18,
    title: 'اسموتی سرو بهشت',
    category: 'آبمیوه',
    image: '',
    price: 105,
    dis: 'اسموتی با طعم‌های شاداب و خوشمزه',
    animate: 'animate-spin1'
  },
  {
    id: 19,
    title: 'اسموتی سرو فریومد',
    category: 'آبمیوه',
    image: '',
    price: 100,
    dis: 'ترکیب طبیعی میوه‌های تازه فریومد',
    animate: 'animate-spin1'
  },
  {
    id: 20,
    title: 'موکتل هفت سرو',
    category: 'آبمیوه',
    image: '',
    price: 110,
    dis: 'موکتلی با ترکیب طعم‌های تازه',
    animate: 'animate-spin1'
  },
  {
    id: 21,
    title: 'موکتل سرو زربین',
    category: 'آبمیوه',
    image: '',
    price: 115,
    dis: 'ترکیبی خوشمزه و خاص از میوه‌های تازه',
    animate: 'animate-spin1'
  },
  {
    id: 22,
    title: 'لیموناد',
    category: ' آبمیوه',
    image: '',
    price: 60,
    dis: 'لیموناد تازه و خنک با لیموی طبیعی',
    animate: 'animate-spin1'
  },
  {
    id: 23,
    title: 'موهیتو',
    category: 'آبمیوه',
    image: '',
    price: 65,
    dis: 'نوشیدنی خنک و نعناعی',
    animate: 'animate-spin1'
  },
  {
    id: 24,
    title: 'چای ساده',
    category: 'چای و دمنوش',
    image: '',
    price: 30,
    dis: 'چای سنتی برای آرامش خاطر',
    animate: 'animate-spin1'
  },
  {
    id: 25,
    title: 'کیک شکلاتی',
    category: 'کیک',
    image: '',
    price: 85,
    dis: 'کیک با طعم شکلاتی دلپذیر',
    animate: 'animate-spin1'
  },
  {
    id: 26,
    title: 'پنینی مرغ',
    category: 'غذا',
    image: '',
    price: 120,
    dis: 'پنینی با مرغ، سبزیجات تازه و سس مخصوص',
    animate: 'animate-spin1'
  },
  {
    id: 27,
    title: 'پنینی بیکن',
    category: 'غذا',
    image: '',
    price: 130,
    dis: 'پنینی با بیکن و پنیر، طعمی خوشمزه',
    animate: 'animate-spin1'
  },
  {
    id: 28,
    title: 'شربت سرومهر',
    category: 'شربت و عرقیجات',
    image: '',
    price: 70,
    dis: 'بیدمشک , هل , نسترن , زعفران',
    animate: 'animate-spin1'
  },
  {
    id: 29,
    title: 'شربت سروناز',
    category: 'شربت و عرقیجات',
    image: '',
    price: 70,
    dis: 'بهارنارنج , نعنا , تخم شربتی , لیمو',
    animate: 'animate-spin1'
  },
  {
    id: 30,
    title: 'شیک وانیل',
    category: 'شیک',
    image: '',
    price: 95,
    dis: 'شیک وانیلی با طعم ملایم و خوشمزه',
    animate: 'animate-spin1'
  },
  {
    id: 31,
    title: 'شیک شکلات',
    category: 'شیک',
    image: '',
    price: 100,
    dis: 'شیک شکلاتی غلیظ و خوش‌طعم',
    animate: 'animate-spin1'
  },
  {
    id: 32,
    title: 'شیک نوتلا',
    category: 'شیک',
    image: '',
    price: 110,
    dis: 'شیک نوتلا با طعم قوی شکلات فندقی',
    animate: 'animate-spin1'
  },
  {
    id: 33,
    title: 'شیک بادام زمینی',
    category: 'شیک',
    image: '',
    price: 115,
    dis: 'شیک خوشمزه با کره بادام زمینی و شیر',
    animate: 'animate-spin1'
  },
  {
    id: 34,
    title: 'شیک اسپرسو',
    category: 'شیک',
    image: '',
    price: 105,
    dis: 'شیک قهوه با طعم غلیظ اسپرسو',
    animate: 'animate-spin1'
  },
  {
    id: 35,
    title: 'شیک موز شکلات',
    category: 'شیک',
    image: '',
    price: 120,
    dis: 'شیک ترکیبی موز و شکلات برای طعمی متفاوت',
    animate: 'animate-spin1'
  },
  {
    id: 36,
    title: 'شیک توت فرنگی',
    category: 'شیک',
    image: '',
    price: 115,
    dis: 'شیک توت فرنگی با طعم میوه تازه و طبیعی',
    animate: 'animate-spin1'
  },
  {
    id: 37,
    title: 'شیک موز',
    category: 'شیک',
    image: '',
    price: 105,
    dis: 'شیک موزی شیرین و خوشمزه',
    animate: 'animate-spin1'
  },  {
    id: 38,
    title: 'آرامش سرو',
    category: 'چای و دمنوش',
    image: '',
    price: 30,
    dis: 'بهارنارنج , گل گاو زبان , به لیمو',
    animate: 'animate-spin1'
  },
  {
    id: 39,
    title: 'چای دارچین/زنجبیل',
    category: 'چای و دمنوش',
    image: '',
    price: 30,
    dis: 'چای سنتی برای آرامش خاطر',
    animate: 'animate-spin1'
  },
  {
    id: 40,
    title: 'دمنوش آویشن/عسل',
    category: 'چای و دمنوش',
    image: '',
    price: 58,
    dis: 'چای سنتی برای آرامش خاطر',
    animate: 'animate-spin1'
  },
  {
    id: 41,
    title: 'گلدن وانیل',
    category: 'چای و دمنوش',
    image: '',
    price: 68,
    dis: 'سیب ,  میخک , دارچین',
    animate: 'animate-spin1'
  },
  {
    id: 42,
    title: 'نعنا فلفلی',
    category: 'چای و دمنوش',
    image: '',
    price: 58,
    dis: 'چای سنتی برای آرامش خاطر',
    animate: 'animate-spin1'
  },
  {
    id: 43,
    title: 'هات چاکلت ',
    category: 'نوشیدنی گرم',
    image: '',
    price: 68,
    dis: '',
    animate: 'animate-spin1'
  },
  {
    id: 43,
    title: 'هات چاکلت ',
    category: 'نوشیدنی گرم',
    image: '',
    price: 68,
    dis: '',
    animate: 'animate-spin1'
  },
  {
    id: 43,
    title: 'هات چاکلت ',
    category: 'نوشیدنی گرم',
    image: '',
    price: 68,
    dis: '',
    animate: 'animate-spin1'
  },
  


]);

const selectedCategory = ref<string>('همه');
  const filteredFoodList = computed(() => {
  if (selectedCategory.value === 'همه') {
    return foodList.value;
  }
  return foodList.value.filter(item => item.category === selectedCategory.value);
});
const selectCategory = (category: string) => {
  selectedCategory.value = category;
};





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

//منو تاگل
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};


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