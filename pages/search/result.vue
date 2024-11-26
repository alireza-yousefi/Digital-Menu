<template>
  <div class="text-white rtl">
    <div class="sticky top-0 z-50 transition-all duration-300 mx-4 pt-3">
      <!-- هدر -->
      <div class='flex justify-between items-center mb-1'>
        <div class="text-center">
          <h1 class="text-2xl rtl text-orange-300 font-bold text-[28px] text-center transition-all">نتایج جستجو</h1>
        </div>


        <nuxt-link to="/orders">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="size-8 transition-transform duration-300">
            <path
              d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
        </nuxt-link>

      </div>
    </div>

    <div v-if="results.length > 0" class=" grid grid-cols-2 w-full p-5 gap-3">

      <nuxt-link :to="`/food/${item.id}`" v-for="item in results" :key="item.id" class="relative mt-10 col-span-1">

        <div class="w-full absolute -mt-8 flex justify-center">
          <img :src="item.image" alt="Food Image" class="z-5000  w-20 flex h-20 object-contain" />
        </div>

        <div class="box bg-gray-800 flex flex-col h-18 pt-12 items-center rounded-3xl z-10">
          <span class="justify-center text-2xl py-2"> {{ item.title }} </span>
          <span class="justify-center text-green-500 pb-3 text-[13px] font-normal" style="direction: rtl;">
            {{ item.price }} هزار تومان
          </span>
          <!-- <span class="Estedad_Thin text-[14px] font-normal mx-5 text-center leading-7">{{ item.descriptions.short }}</span> -->
        </div>


      </nuxt-link>





      <!-- <img :src="item.image" alt="Food Image" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.descriptions.short }}</p>
        <p>قیمت: {{ item.price }} تومان</p>
        <p>دسته‌بندی: {{ item.category }}</p> -->
    </div>

    <div v-else class="text-center mt-16 text-xl">
      <spanp>نتیجه‌ای پیدا نشد</spanp>
    </div>

  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted, watch } from 'vue';
import { useFoodStore } from '~/stores/foods';

const route = useRoute();
const query = ref<string>(route.query.query as string || ''); // کلمه جستجو
const results = ref<any[]>([]); // نتایج جستجو
const foodStore = useFoodStore(); // دسترسی به استور غذاها

// تابع جستجو
const fetchResults = () => {
  results.value = foodStore.searchFood(query.value); // استفاده از متد جستجو از استور
};

// نظارت بر تغییرات در عبارت جستجو
watch(() => route.query.query, fetchResults); // وقتی که کلمه جستجو تغییر کرد

onMounted(fetchResults); // زمانی که صفحه بارگذاری می‌شود، نتایج جستجو را بیار
</script>
<style scoped>
.box {
  border-radius: 40px !important;

}
</style>