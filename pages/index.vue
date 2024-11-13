<template>
    <div class="flex flex-col h-screen text-white">
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
<div >

</div>
<img src="public\img\Remove-bg.ai_1724507884769.png " class="fade-opacity absolute opacity-30 z-10 top-[100px]" alt="">
        <div class="text-center font-bold z-20 text-5xl h-200 mt-16 fade-down">
            <Span> کــافــه سـَـرو</Span>
        
    </div>
<nuxt-link to="/menu" class="absolute bottom-40 bg-gray-400 rounded-3xl opacity-100 h-14 w-64 self-center z-20 place-content-center  text-3xl mt-20 text-center fade-up ">
    <span >منوی دیجیتال </span>
</nuxt-link>

<nuxt-link to="/reserve" class="absolute bottom-20 bg-gray-400 rounded-3xl opacity-100 h-14 w-64 self-center z-20 place-content-center  text-3xl mt-20 text-center fade-up ">
    <span > نقــشـه ی کـــافه </span>
</nuxt-link>
    
    </div>

</template>

<style scoped>
.fade-down {
    opacity: 0; /* در ابتدا نامرئی */
    transform: translateY(-40px); /* جابجایی به بالا */
    animation: fadeInDown 2s forwards; /* انیمیشن */
}

.fade-up {
    opacity: 0; /* در ابتدا نامرئی */
    transform: translateY(40px); /* جابجایی به پایین */
    animation: fadeInUp 2s forwards; /* انیمیشن */
}

/* انیمیشن برای حرکت به سمت پایین */
@keyframes fadeInDown {
    to {
        opacity: 1; /* قابل مشاهده */
        transform: translateY(0); /* به حالت اصلی برمی‌گردد */
    }
}

/* انیمیشن برای حرکت به سمت بالا */
@keyframes fadeInUp {
    to {
        opacity: 1; /* قابل مشاهده */
        transform: translateY(0); /* به حالت اصلی برمی‌گردد */
    }
}
.fade-opacity {
    opacity: 0; /* در ابتدا اوپسیتی 0 */
    animation: fadeOpacity 2s forwards; /* انیمیشن */
    transform: translateY(60px);
}

/* انیمیشن برای اوپسیتی */
@keyframes fadeOpacity {
    to {
        opacity: 0.3; /* به اوپسیتی 0.3 می‌رسد */
        transform: translateY(0);
    }
}
</style>


<script>
export default {
    mounted() {
        const fadeDownElement = document.querySelector('.fade-down');
        const fadeUpElements = document.querySelectorAll('.fade-up');
        const opacityImage = document.querySelector('.fade-opacity');

        opacityImage.style.animationDelay = `0s`; // انیمیشن اوپسیتی

        fadeDownElement.style.animationDelay = `0s`; // انیمیشن تیتر کافه سرو

        fadeUpElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.5 + 0.8}s`; // تاخیر انیمیشن برای دکمه‌ها
        });
    }
}
</script>