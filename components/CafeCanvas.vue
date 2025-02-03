<script setup>
import { ref, onMounted } from 'vue';
import { Stage, Layer, KonvaImage  } from 'vue-konva';

// تصاویر مورد استفاده
const images = {
  background: '/img/grass.jpg',
  tables: {
    '2': '/img/tableshadow.png',
    '3': '/img/tableshadow.png',
    '4': '/img/table-6.png',
    '6': '/img/sofa.png'
  },
  bar: '/img/bar.png',
  door: '/img/door.png',
  pool: '/img/pool.png'
};

// لیست میزها
const tables = ref([
  { type: '2', isReserved: false, x: 10, y: 0 },
  { type: '2', isReserved: true, x: 10, y: 160 },
  { type: '3', isReserved: true, x: 10, y: 320 },
  { type: '4', isReserved: false, x: 300, y: 110 },
  { type: '6', isReserved: false, x: 280, y: 220 },
  { type: '4', isReserved: true, x: 300, y: 370 },
  { type: '4', isReserved: false, x: 240, y: 470 }
]);

// ذخیره تصاویر برای بارگذاری
const loadedImages = ref({});

// بارگذاری تصاویر
onMounted(() => {
  Object.entries(images.tables).forEach(([key, src]) => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      loadedImages.value[key] = img;
    };
  });

  ['bar', 'door', 'pool'].forEach((key) => {
    const img = new window.Image();
    img.src = images[key];
    img.onload = () => {
      loadedImages.value[key] = img;
    };
  });
});
</script>

<template>
  <div class="canvas-container">
    <Stage :width="400" :height="600">
      <Layer>
        <!-- پس‌زمینه -->
        <<KonvaImage
          :image="loadedImages.background"
          :x="0"
          :y="0"
          :width="400"
          :height="600"
        />

        <!-- میزها -->
        <Ima<KonvaImagege
          v-for="(table, index) in tables"
          :key="index"
          :image="loadedImages.tables[table.type]"
          :x="table.x"
          :y="table.y"
          :opacity="table.isReserved ? 0.5 : 1"
          :width="100"
          :height="100"
        />

        <!-- بار -->
        <<KonvaImage
          :image="loadedImages.bar"
          :x="-5"
          :y="330"
          :width="600"
          :height="340"
        />

        <!-- در -->
        <<KonvaImage
          :image="loadedImages.door"
          :x="270"
          :y="-82"
          :width="300"
          :height="220"
        />

        <!-- حوض -->
        <<KonvaImage
          :image="loadedImages.pool"
          :x="4"
          :y="80"
          :width="130"
          :height="380"
        />
      </Layer>
    </Stage>
  </div>
</template>

<style scoped>
.canvas-container {
  background: url('/img/grass.jpg') no-repeat center center;
  background-size: cover;
  width: full;
  height: full;
}
</style>
