<template>
    <div class=" bg-gradient-to-b  from-slate-700 to-black bg-cover flex flex-col text-white min-h-screen">
      <!-- Header Row -->
      <div class="flex flex-row mt-1 items-center justify-between px-4 py-4">
        <!-- <Nuxt-Link to="/menu">  <UIcon name="tabler:arrow-back-up" class="w-10 h-10" /> -->
          <NuxtLink to="/menu"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"/></svg></NuxtLink>
          <span  class="text-2xl w-full font-bold text-center flex-grow">{{ title }}</span>
          <div class="w-10 h-10" >
      </div>
      </div>
  
      <!-- Image Row -->
      <div class="flex justify-center mt-2 cursor-pointer">
        <img :src="image" alt=""  style="object-fit: cover;" class=" h-72" />
      </div>
  
  
  
      <!-- Description Row -->
      <div style="direction: rtl;" class="grid grid-cols-2 flex-row flex-col-2  mt-5 p-4">
        <div class=" text-orange-500 flex-col-1 text-2xl font-semibold mb-2 mr-3 ">توضیحات</div>
        <div class=" flex flex-col-1 items-center justify-self-end ml-12 justify-center w-10 h-10 bg-orange-500">
    <button @click="decrement" class="bg-orange-500 text-white h-10 px-3 py-1 rounded-r-3xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/></svg></button>
    <div class="text-[23px] text-center ">{{ quantity }}</div>
    <button @click="increment" class="bg-orange-500 text-white h-10 px-3 py-1 rounded-l-3xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 24"><path fill="white" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg></button>
  </div>

          </div>
          <div  style="direction: rtl;" class="Estedad_FD_Light text-justify leading-7  min-h-40 mx-7 ">
          {{ description }}
          </div>
      <!-- Grid Info Row -->
      <div class="grid grid-cols-3 gap-2 px-4 mb-4">
        <div class="bg-gray-800 col-span-1 p-6 text-center rounded-3xl flex flex-col space-y-2"> <span class="text-orange-500 text-16px">   نوع </span><span class="font-bold text-20px">{{ type }}</span>
        </div>
        <div class="bg-gray-800 col-span-1 p-6 text-center rounded-3xl flex flex-col space-y-2"> <span class="text-orange-500 text-16px"> تحویل</span>  <span class="font-bold text-20px rtl">{{time}} دقیقه</span></div>
        <div class="bg-gray-800 col-span-1 p-6 text-center rounded-3xl flex flex-col space-y-2"> <span class="text-orange-500 text-16px"> ترکیب</span>  <span class="font-bold text-20px"></span> {{ conposition }}</div></div>
  
      <!-- Price and Button Row -->
      <div style="background: #f97316;" class="flex mb-3 items-center rounded-full mx-3 justify-between px-4 py-4">
      <div class="text-lg font-semibold">
        <span class="Estedad_FD_Light float-left font-light text-black">هزار تومان</span>
        <span class="text-[25px] ml-1">{{ price }}</span>
      </div>
      <!-- <button @click="addToCart" class="bg-black text-white px-6 py-2 rounded-full">افزودن به سبد سفارش</button> -->
      <NuxtLink to="/menu" class="bg-black text-white px-6 py-2 rounded-full" @click="addToCart"> افزودن به سبد سفارش</NuxtLink>
    </div>

    </div>
    
  </template>
  
  
<script setup lang="ts">

const quantity = ref<number>(1);
const title = ref<string>('');
const description = ref<string>('');
const price = ref<number>(0);
const time = ref<number>();
const image = ref<string>('');
const type = ref<string>('');
const conposition = ref<number>(0);

const list = ref<any[]>([
  {
    id: 1,
    title: 'چیـز کـیـک',
    description: 'چیز کیک  با  ترکیبی از پنیر خامه‌ای ممتاز و بیسکویت‌های ترد تهیه شده و طعمی بی‌نظیر و دلپذیر دارد. این دسر نرم و سبک، برای هر جشن و مناسبت خاصی مناسب بوده و با میوه‌های تازه و سس شکلات تزئین شده است.!',
    price: 86 , 
    time : 5,
    image : '/img/pexels-elifgokce787-16871293-removebg-preview.png',
    type : "کیک",
    conposition :5 
  },
  {
    id: 2,
    title: 'کاپـوچـینـو',
    description: 'کاپوچینو  از ترکیب قهوه اسپرسو، شیر بخار داده شده و کف شیر نرم تهیه می‌شود. این گزینه شیک و دلپذیر، احساس گرما و آرامش را به هر لحظه‌ی شما اضافه می‌کند!',
    price: 73, 
    time : 15,
    image :'/img/pexels-orlovamaria-4916561-removebg-preview.png',
    type : 'قهوه',
    conposition : 5
  },
  {
    id: 3,
    title: 'آیـس لـته',
    description: 'آیس لته , نوشیدنی خنکی که از ترکیب قهوه اسپرسو، شیر سرد و یخ تهیه می‌شود. این ترکیب خامه‌ای و خوش‌طعم، انتخابی ایده‌آل برای روزهای گرم تابستانی است و تازه‌ترین طراوت را به شما هدیه می‌دهد!',
    price: 76, 
    time : 10,
    image : '/img/ice-latte2.png',
    type : "قهوه",
    conposition : 5
  },
  {
    id: 4,
    title: 'شـیـک تـوت فـرنگـی',
    description: 'شیک توت فرنگی یک دسر خنک و میوه‌ای است که از ترکیب توت فرنگی تازه، بستنی و شیر تهیه می‌شود. این نوشیدنی خوشمزه و خامه‌ای، طعمی ملس و لذیذ دارد که هر کسی را به یک تجربه تابستانی شگفت‌انگیز می‌برد!',
    price: 90, 
    time : 15,
    image : '/img/shake-toot.png',
    type : "شیک",
    conposition : 5
  },
  {
  id: 5,
  title: 'سیب‌زمینی سرخ‌کرده',
  description: 'سیب‌زمینی سرخ‌کرده تُرد و طلایی با طعمی نمکی و دلچسب که همیشه انتخاب مناسبی برای میان‌وعده است!',
  price: 98, 
  time: 10,
  image: '/img/frise.png',
  type: 'میان‌وعده',
  conposition: 3
}
]);
const increment = () => {
  quantity.value++;
}

const decrement = () => {
  if (quantity.value > 1) quantity.value--;
}

const findItem = (code: any) => {
  let obj = list.value.find((item: any) => item.id == code);
  title.value = obj.title;
  description.value = obj.description;
  price.value = obj.price;
  image.value = obj.image;
  type.value = obj.type;
  time.value = obj.time;
  conposition.value = obj.conposition;
}
import { ref, onMounted } from 'vue';

const cart = ref<any[]>([]); // سبد خرید

// لود کردن سبد خرید از لوکال‌استوریج در زمان بارگذاری
onMounted(() => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart.value = JSON.parse(savedCart);
  }
});

// تابع افزودن محصول به سبد خرید
const addToCart = () => {
  const existingItem = cart.value.find(item => item.title === title.value);
  if (existingItem) {
    existingItem.quantity += quantity.value;
  } else {
    cart.value.push({
      id: title.value,
      title: title.value,
      price: price.value,
      quantity: quantity.value,
    });
  }

  // ذخیره‌سازی سبد خرید در لوکال‌استوریج
  localStorage.setItem('cart', JSON.stringify(cart.value));
};

  console.log('Cart:', cart.value); // نمایش وضعیت سبد خرید برای بررسی
  console.log('Cart:', JSON.stringify(cart.value));

;



onMounted(async () => {
  const route = useRoute();
  const code = route.params.code;
  findItem(code);
 console.log('code : ', code)
});
</script>
  <style scoped>
  </style>
  