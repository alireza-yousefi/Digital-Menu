<template>
    <div class="text-white min-h-screen p-4 pb-24 bg-black rtl">
      <div class="flex justify-between">
      <h1 class="text-2xl font-bold text-center mb-4">سبد سفارش شما</h1>
      <NuxtLink to="/menu"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"/></svg></NuxtLink>
    </div>
      <div v-if="cart.length > 0" class="space-y-4">
        <div
          v-for="item in cart"
          :key="item.id"
          class="flex justify-between items-center bg-gray-800 p-4 rounded-lg"
        >
        <div class="flex-row w-52">
          <span class="text-xl">{{ item.title }}</span>
          <div class="flex  "><span class="text-lg font-bold text-orange-500">{{ item.price * item.quantity }}</span> <span class="text-[11px] content-center">هزار تومان</span></div>

        </div>
        <div class="flex items-center">
  <!-- دکمه کاهش تعداد -->
  <button
    @click="decrementQuantity(item.id)"
    class="bg-orange-500 text-white rounded-md"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
      <path fill="white" d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2"/>
    </svg>
  </button>
  <span class="text-lg mx-2">{{ item.quantity }} </span>
  <!-- دکمه افزایش تعداد -->
  <button
    @click="incrementQuantity(item.id)"
    class="bg-orange-500 rounded-md"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
      <path fill="white" d="M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z"/>
    </svg>
  </button>
</div>

          <!-- دکمه حذف -->
          <button
            @click="removeFromCart(item.id)"
            class=" text-white px-1 py-1 rounded-md"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#f97316" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.687 6.213L6.8 18.976a2.5 2.5 0 0 0 2.466 2.092h3.348m6.698-14.855L17.2 18.976a2.5 2.5 0 0 1-2.466 2.092h-3.348m-1.364-9.952v5.049m3.956-5.049v5.049M2.75 6.213h18.5m-6.473 0v-1.78a1.5 1.5 0 0 0-1.5-1.5h-2.554a1.5 1.5 0 0 0-1.5 1.5v1.78z"/></svg>
            
          </button>
        </div>
      </div>
      <div v-else class="text-center text-gray-400">سبد خرید شما خالی است</div>

      <div class="relative">
  <!-- محتوای صفحه Orders -->
  

  
      <!-- مجموع قیمت کل -->
      <div class="fixed bottom-0 left-0 w-full bg-gray-900 p-4 text-lg font-bold text-white flex justify-between items-center">
        <span>مجموع قیمت:</span>
        <span>{{ totalPrice }} هزار تومان</span>
      </div>
</div>
<div class="absolute bottom-[60px] left-1/2 transform -translate-x-1/2 w-full">
    <button class="bg-orange-500 px-6 py-2 text-[18px] font-bold  w-full md:w-auto">
      ثبت سفارش
    </button>
  </div>
    </div>
    
  </template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// تعریف لیست سبد خرید
const cart = ref([]);

// تابع بارگذاری cart از localStorage
const loadCart = () => {
  const savedCart = localStorage.getItem("cart");
  cart.value = savedCart ? JSON.parse(savedCart) : [];
};

// تابع ذخیره سبد خرید در localStorage
const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart.value));
};

// افزودن محصول جدید به سبد خرید
const addToCart = (newItem) => {
  const existingItem = cart.value.find(item => item.id === newItem.id);
  if (existingItem) {
    existingItem.quantity += newItem.quantity;
  } else {
    cart.value.push(newItem);
  }
  saveCart(); // ذخیره‌سازی سبد خرید پس از افزودن آیتم جدید
};

// تابع حذف آیتم از سبد خرید
const removeFromCart = (id: number) => {
  cart.value = cart.value.filter(item => item.id !== id);
  saveCart(); // ذخیره‌سازی سبد خرید در localStorage پس از حذف آیتم
};

// تابع افزایش تعداد
const incrementQuantity = (id: number) => {
  const item = cart.value.find(item => item.id === id);
  if (item) {
    item.quantity++;
    saveCart(); // ذخیره‌سازی سبد خرید در localStorage پس از افزایش تعداد
  }
};

// تابع کاهش تعداد
const decrementQuantity = (id: number) => {
  const item = cart.value.find(item => item.id === id);
  if (item && item.quantity > 1) {
    item.quantity--; // تعداد محصول را کاهش می‌دهد
    saveCart(); // ذخیره‌سازی سبد خرید در localStorage پس از کاهش تعداد
  }
  // حذف بخش else-if که آیتم را حذف می‌کند
}


// محاسبه مجموع قیمت کل
const totalPrice = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

// بارگذاری سبد خرید هنگام لود شدن صفحه
onMounted(() => {
  loadCart();
});
</script>

  <style scoped>
  /* استایل صفحه سبد سفارش */
  </style>
  