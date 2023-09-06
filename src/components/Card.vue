<template>
    <div class="absolute w-full h-full flex items-end justify-end p-8 opacity-0 hover:opacity-100">
        <div class="bg-green-400 rounded-full h-10 w-10 flex items-center justify-center">
          <svg text-white text-2xl xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
          </svg>
          
        </div>
      </div>
      <div class="bg-gray-700 w-full h-auto p-5 rounded-lg shadow-md">
        <img :src="recent.src" class="h-auto w-full shadow mb-2"/>
        <h1 class="text-sm font-semibold text-white tracking-wide">{{ recent.title }}</h1>
        <h2 class="text-xs text-white tracking-wide pb-5">{{ recent.artist }}</h2>
      </div>
</template>
  
  <script>
  export default {
    name: 'Card',
    props: {
        recent: Array
    }
  };
  </script>
  
  <style scoped>
  /* Add any specific button styling here */
  </style>
  