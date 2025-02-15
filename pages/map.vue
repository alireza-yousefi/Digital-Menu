<template>
  <div class="bg-konva z-10" :class="{ 'blur-background': showModal }">
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
            opacity: table.opacity,
            id: table.id,
            listening: !table.isReserved
          }"
          @click="handleTableClick(table)"
        />
      </v-layer>
    </v-stage>

    <!-- مودال رزرو -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <p class="text-black">آیا می‌خواهید میز را رزرو کنید؟</p>
        <div class="modal-buttons">
          <button @click="confirmReservation">بله، رزرو می‌کنم</button>
          <button @click="cancelReservation">لغو</button>
        </div>
      </div>
    </div>
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
  { type: '2 نفره', isReserved: false, top: 0, left: 10, id: 'table1', width: 80, height: 105, opacity: 1 },
  { type: '2 نفره', isReserved: false, top: 160, left: 10, id: 'table2', width: 80, height: 105, opacity: 1 },
  { type: '3 نفره', isReserved: false, top: 320, left: 10, id: 'table3', width: 80, height: 105, opacity: 1 },
  { type: '4 نفره', isReserved: false, top: 110, left: 300, id: 'table4', width: 102, height: 102, opacity: 1 },
  { type: '6 نفره', isReserved: false, top: 220, left: 280, id: 'table5', width: 140, height: 140, opacity: 1 },
  { type: '4 نفره', isReserved: false, top: 370, left: 300, id: 'table6', width: 102, height: 102, opacity: 1 },
  { type: '4 نفره', isReserved: false, top: 470, left: 240, id: 'table7', width: 102, height: 102, opacity: 1 }
]);

// تنظیمات بار (Bar)
const barConfig = ref({
  image: null,
  x: -30,
  y: 360,
  width: 270,
  height: 300
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
  x: 30,
  y: 80,
  width: 320,
  height: 360
});

// حالت‌های مودال
const showModal = ref(false);
const selectedTable = ref(null);

// بارگذاری تصاویر
onMounted(async () => {
  await loadImages();
  checkReservations();
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
const handleTableClick = (table) => {
  if (table.isReserved) return;

  selectedTable.value = table;
  showModal.value = true;
};

// تابع تأیید رزرو
const confirmReservation = () => {
  if (selectedTable.value) {
    selectedTable.value.isReserved = true;
    selectedTable.value.opacity = 0.5;
    saveReservation(selectedTable.value.id);
    showModal.value = false;
  }
};

// تابع لغو رزرو
const cancelReservation = () => {
  showModal.value = false;
};

// تابع ذخیره رزرو در localStorage
const saveReservation = (tableId) => {
  const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
  reservations.push(tableId);
  localStorage.setItem('reservations', JSON.stringify(reservations));
};

// تابع بررسی رزروها از localStorage
const checkReservations = () => {
  const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
  tables.value.forEach(table => {
    if (reservations.includes(table.id)) {
      table.isReserved = true;
      table.opacity = 0.5;
    }
  });
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
  position: relative;
}

.blur-background {
  --tw-bg-opacity: 0.8;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.modal-buttons {
  margin-top: 20px;
}

.modal-buttons button {
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal-buttons button:first-child {
  background: green;
  color: white;
}

.modal-buttons button:last-child {
  background: red;
  color: white;
}
</style>