<template>
    <div class="h-screen">
      <div class="sticky top-0 z-50 transition-all duration-300 mx-4 pt-3">
        <!-- هدر -->
        <div class='flex justify-between items-center mb-1'>
          <div class="flex">
          <NuxtLink to="/menu"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
            <path fill="white"
              d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z" />
          </svg></NuxtLink>
          
          <nuxt-link to="/orders" class="pl-8">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 text-white transition-transform duration-300">
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
          </nuxt-link>
        </div>
          <h1 class="text-xl rtl text-white font-bold  text-center transition-all">کــافـِـه سـَـرو</h1>
        </div>
      </div>
      <div class="justify-center w-full flex mt-16">
        <img class="w-64" src="/img/search.png" alt="">
      </div>
  
      <div class="w-full mt-8 justify-center text-center">
        <span class="text-lg text-white">نوشیدنی / غذا ی خود را جستجو کنید</span>
      </div>
  
      <div class="mt-4 rtl text-center">
        <div class="">
        <input
          v-model="searchQuery"
          type="text"
          @keyup.enter="performSearch"
          class="w-64 px-4 py-2 mt-2 text-lg text-white rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="دنبال چی میگردی؟؟!"
          style="background: center;"
        /></div>
  
        <!-- استفاده از NuxtLink برای هدایت به صفحه نتایج جستجو -->
        <nuxt-link :to="{ path: '/search/result', query: { query: searchQuery } }" class="text-center ">
          <button class="w-64 mt-4 bg-orange-500 py-2  rounded-lg text-white text-lg font-semibold hover:bg-yellow-500 transition-all">
            جستجو
          </button>
          
        </nuxt-link>
      </div>

    </div>
  </template>
  
  <script setup lang="ts">

import { ref } from 'vue';
import { useRouter } from 'vue-router';

//#region Variables
const searchQuery = ref<string>(''); // کلمه جستجو
const router = useRouter();
//#endregion

function performSearch() {
  // هدایت به صفحه نتایج جستجو
  router.push({ path: '/search/result', query: { query: searchQuery.value } });
}
  </script>
  