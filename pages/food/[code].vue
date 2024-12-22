<template>
  <div>
    <div v-if="loading" class="content-center text-center bg-gray-500 h-screen w-screen">
      <div class="lds-roller">
      </div>
    </div>
    <div v-else class=" bg-cover flex flex-col text-white min-h-screen pb-24">
      <!-- Header Row -->
      <div class="flex flex-row mt-1 items-center justify-between px-4 py-4">
        <!-- <Nuxt-Link to="/menu">  <UIcon name="tabler:arrow-back-up" class="w-10 h-10" /> -->
        <NuxtLink to="/menu"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path fill="white"
              d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z" />
          </svg></NuxtLink>
        <span class="text-2xl w-full font-bold text-center flex-grow">{{ title }}</span>
        <div class="w-10 h-10">
        </div>
      </div>

      <!-- Image Row -->
      <div class="flex justify-center mt-2 cursor-pointer">
        <img :src="image" alt="" style="object-fit: cover;" class=" h-72" />
      </div>


<!-- <div class="h-0 ml-8 text-xs">
  تعداد را وارد کنید
</div> -->
      <!-- Description Row -->
      <div style="direction: rtl;" class="grid grid-cols-2 flex-row flex-col-2  mt-5 p-4">
        <div class=" text-orange-500 flex-col-1 text-2xl font-semibold mb-2 mr-3 ">توضیحات</div>
        
        <div class=" flex flex-col-1 items-center justify-self-end ml-12 justify-center w-10 h-10 bg-orange-500">
          <button @click="decrement" class="bg-orange-500 text-white h-10 px-3 py-1 rounded-r-3xl"><svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 24">
              <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 12h14" />
            </svg></button>
          <div class="text-[23px] text-center ">{{ quantity }}</div>
          <button @click="increment" class="bg-orange-500 text-white h-10 px-3 py-1 rounded-l-3xl"><svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 24">
              <path fill="white" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
            </svg></button>
        </div>

      </div>
      <div style="direction: rtl;" class="Estedad_FD_Light text-justify leading-7  min-h-40 mx-7 ">
        {{ description }}
      </div>
      <!-- Grid Info Row -->

      <div class=" gap-2 px-2 mb-4">
        <div class="bg-gray-800  px-2 py-4 text-center rounded-3xl flex rtl justify-between items-center ">
          <div class="px-2 flex flex-col  items-center justify-center text-center w-1/4">
            <span class="text-orange-500 text-16px"> نوع </span>
            <span class="font-bold text-20px mt-1">{{ type }}</span>
          </div>
          <div class="px-2 flex flex-col border-r items-center justify-center text-center w-1/4">
            <span class="text-orange-500 text-16px"> کالری</span>
            <span id="totalCalories" class="font-bold text-20px mt-1">{{ totalCalories }}</span>
          </div>
          <div class="px-2 flex flex-col border-r items-center justify-center text-center w-1/4 ">
            <span class="text-orange-500 text-16px"> امتیاز</span>
            <span class="font-bold text-20px mt-1">3.5</span>
          </div>
          <div class="px-2 flex flex-col border-r items-center justify-center text-center w-1/4">
            <span class="text-orange-500 text-16px"> تحویل</span>
            <span class="font-bold text-20px mt-1">{{ time }} دقیقه</span>
          </div>
        </div>
        <!-- <div class="bg-gray-800 col-span-1 p-6 text-center rounded-3xl flex flex-col space-y-2"> <span class="text-orange-500 text-16px"> تحویل</span>  <span class="font-bold text-20px rtl">{{time}} دقیقه</span></div>
        <div class="bg-gray-800 col-span-1 p-6 text-center rounded-3xl flex flex-col space-y-2"> <span class="text-orange-500 text-16px"> ترکیب</span>  <span class="font-bold text-20px"></span> {{ conposition }}</div> -->
      </div>
      <!-- جدول ترکیبات -->
      <div class="w-full max-w-sm mx-auto  rounded-lg shadow-md rtl px-8">
  <div class=" text-white font-bold text-lg px-4 py-2 flex justify-between">
    <span>ترکیب</span>
    <span>کالری</span>
  </div>
  <div class="divide-y divide-gray-200">
    <div 
      v-for="item in combinations" 
      :key="item.title" 
      class="flex justify-between items-center px-4 py-2 text-sm text-white">
      <span class="">{{ item.title }}</span>
      <span class="">{{ item.calorie }}</span>
    </div>
  </div>
</div>


<!-- کامنت -->
<div class="p-4 mt-6 text-white rounded-lg rtl">
  <h2 class="text-lg font-bold ">ثبت نظر</h2>

  <form @submit.prevent="submitComment" class="mt-4">
      <!-- نام کاربر -->
      <div>
        <label for="name" class="block mb-2 text-sm font-medium">نام شما</label>
        <input
          type="text"
          id="name"
          v-model="newComment.name"
          :class="[
            errors.name ? 'bg-red-50 border-red-500 text-red-900' : 'dark border ',
            'block w-full rounded-lg focus:ring focus:border focus:ring-red-500 focus:border-red-500 p-2.5 text-sm',
          ]"
          placeholder="نام خود را وارد کنید"
        />
        <p v-if="errors.name" class="mt-2 text-sm text-red-600">
          <span class="font-medium">خطا:</span> نام الزامی است.
        </p>
      </div>

      <!-- امتیاز به شکل ستاره‌ها -->
      <div class="mt-4 justify-self-center w-full item">
        <label class="block mb-2  text-m font-medium">امتیاز</label>
        <Rating :size="45" :value="newComment.rating" @change="(data) => newComment.rating = data" />
        <p v-if="errors.rating" class="mt-2   text-sm text-red-600">
          <span class="font-medium justify-self-start">خطا:</span> امتیاز الزامی است.
        </p>
      </div>
      <!-- پیام (اختیاری) -->
      <div class="mt-4">
        <label for="message" class="block mb-2 text-sm font-medium">پیام (اختیاری)</label>
        <textarea
          id="message"
          v-model="newComment.message"
          class="dark border block w-full rounded-lg focus:ring focus:border focus:ring-gray-500 focus:border-gray-500 p-2.5 text-sm"
          placeholder="پیام خود را وارد کنید (اختیاری)"
        ></textarea></div>
      <div class="w-full" style="direction: ltr;">
        <!-- دکمه ارسال -->
        <button
          type="submit"
          class="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:ring focus:ring-orange-300"
        >
          ارسال نظر
        </button>
      </div>
    </form>

    <div v-if="comments.length" class="mt-8 ">
      <h2 class="text-lg font-bold">نظرات کاربران</h2>
      <div class="mt-4 space-y-4">
        <div
          v-for="(comment, index) in comments"
          :key="index"
          class="p-4 dark border-b justify-between flex-col"
        >
          <div class="flex justify-between">
            <p class="text-m"><strong>نام:</strong> {{ comment.name }}</p>
            <div class="text-m flex items-center flex-col">
              <strong>امتیاز</strong>
              <Rating :readOnly="true" :size="14" :value="comment.rating" class="mt-1" />
            </div>
          </div>
          <p v-if="comment.message" class="text-sm text-yellow-500 mt-2">{{ comment.message }}</p>
        </div>
      </div>
    </div>
    <p v-else class="mt-8 text-gray-500">هنوز نظری ثبت نشده است.</p>
</div>



      <!-- Price and Button Row -->
      <div style="background: #f97316;"
        class="flex bottom-2 left-[2.5vw] items-center rounded-full w-[95vw] justify-between px-4 py-4 fixed bottom-0">
        <div class="text-lg font-semibold">
          <span class="Estedad_FD_Light float-left font-light text-black">هزار تومان</span>
          <span class="text-[25px] ml-1">{{ price }}</span>
        </div>
        <!-- <button @click="addToCart" class="bg-black text-white px-6 py-2 rounded-full">افزودن به سبد سفارش</button> -->
        <NuxtLink to="/menu" class="bg-black text-white px-6 py-2 rounded-full" @click="addToCart"> افزودن به سبد سفارش
        </NuxtLink>
      </div>

    </div>

  </div>

</template>


<script setup lang="ts">
//#region Import
import { useFoodStore } from '~/stores/foods'; // استور غذاها
//#endregion

//#region Instance
const route = useRoute();
// دسترسی به استور غذاها
const foodStore = useFoodStore();
//#endregion

//#region Variables
const quantity = ref<number>(1);
const title = ref<string>('');
const description = ref<string>('');
const price = ref<number>(0);
const totalCalories = ref<number>(0);
const time = ref<number>();
const image = ref<string>('');
const type = ref<string>('');
const combinations = ref<any[]>([]);
const cart = ref<any[]>([]); // سبد خرید
const code = ref<number | null>(null);
const loading = ref<boolean>(true)
// متغیرهای مربوط به سیستم کامنت
const comments = ref<any[]>([]); // لیست کامنت‌ها
const newComment = ref<{ name: string; message: string; rating: number }>({
  name: '',
  message: '',
  rating: 0,
});
const commentsKey = computed(() => `comments_${code.value}`); // کلید ذخیره‌سازی در localStorage
const errors = ref<{ name: boolean; rating: boolean }>({
  name: false,
  rating: false,
});


//#endregion

//#region Functions
const increment = () => {
  quantity.value++;
}
const decrement = () => {
  if (quantity.value > 1) quantity.value--;
}
const findItem = () => {
  let obj = foodStore.getFoodByID(code.value);
  console.log(obj)
  title.value = obj.title;
  description.value = obj.descriptions.long;
  price.value = obj.price;
  image.value = obj.image;
  type.value = obj.category;
  time.value = obj.time;
  combinations.value = obj.Combinations;


  // rate.value = obj.rate;
  // comments.value = obj.comments;
  // محاسبه مجموع کالری ترکیبات
  totalCalories.value = obj.Combinations.reduce((sum: any, item: any) => sum + item.calorie, 0);
  loading.value = false;

}
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
    alert("سفارش شما ثبت شد")
  }

  // ذخیره‌سازی سبد خرید در لوکال‌استوریج
  localStorage.setItem('cart', JSON.stringify(cart.value));
};

// تابع بارگذاری نظرات از localStorage
const loadComments = () => {
  const savedComments = localStorage.getItem(commentsKey.value);
  comments.value = savedComments ? JSON.parse(savedComments) : [];
};
// تابع ذخیره نظرات در localStorage
const saveComments = () => {
  localStorage.setItem(commentsKey.value, JSON.stringify(comments.value));
};

// ولیدیشن و ثبت کامنت جدید
const submitComment = () => {
  // بررسی ولیدیشن فرم
  errors.value.name = !newComment.value.name.trim();
  errors.value.rating = newComment.value.rating <= 0;

  if (!errors.value.name && !errors.value.rating) {
    // اضافه کردن کامنت جدید
    comments.value.push({ ...newComment.value });

    // ذخیره کامنت‌ها
    saveComments();

    // پاک کردن فرم پس از ثبت موفق
    newComment.value.name = '';
    newComment.value.rating = 0;
    newComment.value.message = '';
  }
};

//#endregion

//#region Constructor
onMounted(async () => {
  // لود کردن سبد خرید از لوکال‌استوریج در زمان بارگذاری
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart.value = JSON.parse(savedCart);
  }
  code.value = parseInt(route.params.code as string);
  findItem();
  loadComments(); // بارگذاری نظرات هنگام لود شدن
});
//#endregion

</script>
<style scoped>
.lds-roller,
.lds-roller div,
.lds-roller div:after {
  box-sizing: border-box;
}

.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}

.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7.2px;
  height: 7.2px;
  border-radius: 50%;
  background: currentColor;
  margin: -3.6px 0 0 -3.6px;
}

.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}

.lds-roller div:nth-child(1):after {
  top: 62.62742px;
  left: 62.62742px;
}

.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}

.lds-roller div:nth-child(2):after {
  top: 67.71281px;
  left: 56px;
}

.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}

.lds-roller div:nth-child(3):after {
  top: 70.90963px;
  left: 48.28221px;
}

.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}

.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}

.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}

.lds-roller div:nth-child(5):after {
  top: 70.90963px;
  left: 31.71779px;
}

.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}

.lds-roller div:nth-child(6):after {
  top: 67.71281px;
  left: 24px;
}

.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}

.lds-roller div:nth-child(7):after {
  top: 62.62742px;
  left: 17.37258px;
}

.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}

.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12.28719px;
}

@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

</style>