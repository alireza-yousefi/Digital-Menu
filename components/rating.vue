<script setup lang="ts">
import {Icon} from "@iconify/vue";
const emit = defineEmits(['change'])
const props = defineProps({
  value: {
    type: Number,
    default:0,
    required: false,
  },
  count: {
    type: Number,
    default:5,
    required: false,
  },
  icon: {
    type: String,
    default:'solar:star-bold-duotone',
    required: false,
  },
  colorDisable: {
    type: String,
    default:'#bdbdbd',
    required: false,
  },
  colorActive: {
    type: String,
    default:'#ff7800',
    required: false,
  },
  size: {
    type: Number,
    default:30,
    required: false,
  },
  readOnly: {
    type: Boolean,
    default:false,
    required: false,
  },
});
const rating = ref(3);
const whatColor = (rate:number) : string =>{
  if ((rate + 1) <= rating.value) return props.colorActive;
  else return props.colorDisable;
}
const selectRate = (rate:number) =>{
  if (!props.readOnly) {
    rating.value = rate + 1;
    emit('change',rating.value);
  }
}

onMounted( async () => {
  rating.value = props.value;
});

</script>

<template>
  <div class="ratingBar">
    <Icon v-for="(rating,i) in props.count" :icon="props.icon" :color="whatColor(i)" :width="size" @click="selectRate(i)"/>
  </div>
</template>

<style scoped>
.ratingBar{
  @apply flex flex-row;
}
</style>
