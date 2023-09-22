<template>
    <div class="px-6 py-3">
      <div class="flex items-center justify-between">
        <h1 class="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline">{{ title }}</h1>
        <h2 class="pr-8 pt-4 text-xs text-gray-400 uppercase tracking-wider hover:underline mb-3">Show All</h2>
      </div>
      <div class="w-full flex flex-wrap">
        <div v-for="album in albums" :key="album.id" class="p-2 w-48 relative">
          <Card :recent="album" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Card from './Card.vue';
  import axios from 'axios';
  
  export default {
    name: 'AlbumsList',
    data() {
      return {
        albums: []
      };
    },
    methods: {
      fetchAlbums() {
        axios
          .get('http://localhost:3000/Albums')
          .then(response => {
            this.albums = response.data;
          })
          .catch(error => {
            console.error('Error fetching albums:', error);
          });
      }
    },
    components: {
      Card
    },
    props: {
      title: String
    },
    mounted() {
      this.fetchAlbums(); // Fetch albums when the component is mounted
    }
  };
  </script>
  
  <style scoped>
  /* Add any specific styling here */
  </style>
  