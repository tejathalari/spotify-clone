<template>
<!-- side nav -->
<div class="w-60 bg-black h-100 relative">
    <div class="px-6 py-10">
      <img src="../assets/spotify1.png" class="h-10 mt-8 ml-7 filter brightness-0 invert absolute top-0 left-0" />
    </div>
    <div class="mt-6 mb-5">
      <!-- Home button -->
      <button class="text-white flex items-center px-3 py-2 mb-2 mr-4 w-full rounded text-left hover:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        Home
      </button>
      <!-- Search button -->
      <button class="text-white flex items-center px-3 py-2 mb-2 mr-4 w-full rounded text-left hover:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        Search
      </button>
      <!-- Your Library button -->
      <button class="text-white flex items-center px-3 py-2 mb-2 mr-4 w-full rounded text-left hover:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        Your Library
      </button>
    </div>
    
    <div class="mx-5">
      <h1 class="mb-3 text-xs text-white tracking-widest uppercase">Playlists</h1>
      <button class="flex items-center justify-start text-white opacity-75 hover:opacity-100 mb-3 mt-7 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        
        Create Playlist
      </button>
      <button class="flex items-center justify-start text-white opacity-75 hover:opacity-100 mt-7">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
        Liked Songs
      </button>
      
      <div class="h-0.5 w-full bg-gray-700 my-3"></div>
    </div> 
    <div class="mx-5 flex flex-col">
      <div class="w-full h-8 overflow-y-scroll">
        <p v-for="album in albums" class="text-white hover:text-gray-300 text-sm py-1">{{ album.name }}</p>
      </div>
      <button class="flex items-center justify-start text-white text-sm opacity-75 hover:opacity-100 mr-4 mb-3 mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        
        install
      </button>
    </div>
    <div class="flex-grow relative mt-0.4 ml-1 pt-4">
      <div class="w-full h-full flex justify-end items-start opacity-0 hover:opacity-100 p-2 absolute">
        <div class="bg-brown rounded-full w-6 h-6 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          

        </div>
      </div>
      <img src="../assets/new.jpeg" class="w-full h-full object-cover" />
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Sidenav',
    props: {
  albums: Array, // This should match the type of your data
},
  };
  </script>
