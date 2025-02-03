<template>
  <div class="bg-konva">
    <v-stage :config="stageConfig">
      <v-layer>
        <!-- بار (Bar) -->
        <v-image :config="barConfig" />

        <!-- درب (Door) -->
        <v-image :config="doorConfig" />

        <!-- حوض (Pool) -->
        <v-image :config="poolConfig" />

        <!-- میزها (Tables) -->
        <v-image
          v-for="table in tables"
          :key="table.id"
          :config="{
            image: table.image,
            x: table.left,
            y: table.top,
            width: table.width,
            height: table.height,
            opacity: table.isReserved ? 0.5 : 1,
            id: table.id,
            listening: !table.isReserved
          }"
          @click="handleTableClick(table)"
        />
      </v-layer>
    </v-stage>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// تنظیمات استیج
const stageConfig = ref({
  width: 400,
  height: 600
});

// لیست میزها
const tables = ref([
  { type: '2 نفره', isReserved: false, top: 0, left: 10, id: 'table1', width: 95, height: 95 },
  { type: '2 نفره', isReserved: true, top: 160, left: 10, id: 'table2', width: 95, height: 95 },
  { type: '3 نفره', isReserved: true, top: 320, left: 10, id: 'table3', width: 95, height: 95 },
  { type: '4 نفره', isReserved: false, top: 110, left: 300, id: 'table4', width: 102, height: 102 },
  { type: '6 نفره', isReserved: false, top: 220, left: 280, id: 'table5', width: 140, height: 140 },
  { type: '4 نفره', isReserved: true, top: 370, left: 300, id: 'table6', width: 102, height: 102 },
  { type: '4 نفره', isReserved: false, top: 470, left: 240, id: 'table7', width: 102, height: 102 }
]);

// تنظیمات بار (Bar)
const barConfig = ref({
  image: null,
  x: -30,
  y: 360,
  width: 320,
  height: 280
});

// تنظیمات درب (Door)
const doorConfig = ref({
  image: null,
  x: 180,
  y: -82,
  width: 300,
  height: 220
});

// تنظیمات حوض (Pool)
const poolConfig = ref({
  image: null,
  x: 100,
  y: 80,
  width: 250,
  height: 360
});

// لیست میزهای انتخاب شده
const selectedTables = ref([]);

// بارگذاری تصاویر
onMounted(async () => {
  await loadImages();
});

// تابع بارگذاری تصاویر
const loadImages = async () => {
  // بارگذاری تصاویر میزها
  for (const table of tables.value) {
    table.image = await loadImage(getTableImage(table.type));
  }

  // بارگذاری تصاویر دیگر
  barConfig.value.image = await loadImage('img/bar.png');
  doorConfig.value.image = await loadImage('img/door.png');
  poolConfig.value.image = await loadImage('img/pool.png');
};

// تابع بارگذاری تصویر
const loadImage = (src) => {
  return new Promise((resolve) => {
    const image = new window.Image();
    image.src = src;
    image.onload = () => resolve(image);
  });
};

// تابع دریافت تصویر میز بر اساس نوع
const getTableImage = (type) => {
  const images = {
    '2 نفره': 'img/tableshadow.png',
    '3 نفره': 'img/tableshadow.png',
    '4 نفره': 'img/table-6.png',
    '6 نفره': 'img/sofa.png'
  };
  return images[type] || null;
};

// تابع کلیک روی میز
const handleTableClick = async (table) => {
  if (table.isReserved) return;

  const index = selectedTables.value.indexOf(table.id);
  if (index > -1) {
    // اگر میز انتخاب شده بود، آن را از لیست حذف کنید
    selectedTables.value.splice(index, 1);
    table.image = await loadImage(getTableImage(table.type)); // بازگشت به تصویر اصلی
  } else {
    // اگر میز انتخاب نشده بود، آن را به لیست اضافه کنید
    selectedTables.value.push(table.id);
    table.image = await loadImage(getSelectedTableImage(table.type)); // تغییر به تصویر قرمز
  }
};

// تابع دریافت تصویر میز انتخاب شده
const getSelectedTableImage = (type) => {
  const images = {
    '2 نفره': 'img/table-4-red.png',
    '4 نفره': 'img/table-6-red.png',
    '6 نفره': 'img/table-8-red.png'
  };
  return images[type] || 'img/tableshadow.png';
};
</script>

<style>
.bg-konva {
  background-image: url('img/grass.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 20px;
  min-height: 100vh;
}
</style>