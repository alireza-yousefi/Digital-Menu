<script setup>
useHead({
  link: [
  { rel: 'stylesheet', href: 'https://unpkg.com/@tailwindcss/browser@4.0.6/dist/browser.min.css' }
  ]
})
</script>


<template>
    <div class="bg-blue-500 w-screen h-screen grid" style="grid-template-columns: repeat(6, minmax(0, 1fr));">
        <div class="bg-blue-100 h-1/4">1</div>
        <div class="bg-blue-200 h-1/4">2</div>
        <div class="bg-blue-300 h-1/4">3</div>
        <div class="bg-blue-400 h-1/4">4</div>
        <div class="bg-blue-600 h-1/4 col-span-2 flex items-start justify-center">
        <img src="/img/door.png" class=" grid-item row-span-2 col-span-3 " />
        </div>
        <div class="bg-blue-700 h-1/4">7</div>
        <div class="bg-blue-800 h-1/4">8</div>
        <div class="bg-blue-900 h-1/4">9</div>
        <div class="bg-blue-900 h-1/4">10</div>
        <div class="bg-blue-900 h-1/4">11</div>
        <div class="bg-blue-900 h-1/4">12</div>
        <div class="bg-blue-900 h-1/4">13</div>
        <div class="bg-blue-900 h-1/4">14</div>
        <div class="bg-blue-900 h-1/4">15</div>
        <div class="bg-blue-900 h-1/4">16</div>
        <div class="bg-blue-900 h-1/4">17</div>
        <div class="bg-blue-900 h-1/4">18</div>
        <div class="bg-blue-900 h-1/4">10</div>
        <div class="bg-blue-900 h-1/4">11</div>
        <div class="bg-blue-900 h-1/4">12</div>
        <div class="bg-blue-900 h-1/4">13</div>
        <div class="bg-blue-900 h-1/4">14</div>
        <div class="bg-blue-900 h-1/4">15</div>
        <div class="bg-blue-900 h-1/4">16</div>
        <div class="bg-blue-900 h-1/4">17</div>
        <div class="bg-blue-900 h-1/4">18</div>
        
    </div>
</template>

<style>

.h-1/4{
    /* height: 30vh; */
}
</style>