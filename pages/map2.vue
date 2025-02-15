<template>
  <div class="grid-container">
        <!-- درب (Door) -->
        <img src="/img/door.png" class=" grid-item row-span-2 col-span-3 " />

    
    <!-- حوض (Pool) -->
    <img src="/img/pool.png" class="col-span-6 row-span-4 grid-item" />
    
    <!-- میزها (Tables) -->
    <img 
      v-for="table in tables" 
      :key="table.id" 
      :src="getTableImage(table.type)" 
      :class="['table', 'grid-item', table.type.replace(' ', '-'), { reserved: table.isReserved }]"
      @click="handleTableClick(table)"
    />
        <!-- بار (Bar) -->
        <img src="/img/bar.jpg" class="bar grid-item" />

    
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

const tables = ref([
  { type: '2 نفره', isReserved: false, id: 'table1' },
  { type: '2 نفره', isReserved: false, id: 'table2' },
  { type: '3 نفره', isReserved: false, id: 'table3' },
  { type: '4 نفره', isReserved: false, id: 'table4' },
  { type: '6 نفره', isReserved: false, id: 'table5' },
  { type: '4 نفره', isReserved: false, id: 'table6' },
  { type: '4 نفره', isReserved: false, id: 'table7' }
]);

const showModal = ref(false);
const selectedTable = ref(null);

const getTableImage = (type) => {
  const images = {
    '2 نفره': 'img/tableshadow.png',
    '3 نفره': 'img/tableshadow.png',
    '4 نفره': 'img/table-6.png',
    '6 نفره': 'img/sofa.png'
  };
  return images[type] || '';
};

const handleTableClick = (table) => {
  if (table.isReserved) return;
  selectedTable.value = table;
  showModal.value = true;
};

const confirmReservation = () => {
  if (selectedTable.value) {
    selectedTable.value.isReserved = true;
    showModal.value = false;
  }
};

const cancelReservation = () => {
  showModal.value = false;
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 100px);
  gap: 10px;
  padding: 20px;
  background: url('img/grass.jpg') no-repeat center center/cover;
}

.grid-item {
  width: 100%;
  height: 100%;
}

.bar {
  grid-column: span 6;
}

.door {
  grid-column: span 3;
  grid-row: span 2;
}

.pool {
  grid-column: span 6;
  grid-row: span 4;
}

.table {
  cursor: pointer;
}

.table.reserved {
  opacity: 0.5;
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