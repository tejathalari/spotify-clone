 <template>
  <div class="bg-neutral-900 h-screen">
    <div class="flex" style="height: 88vh;">
      <!-- sidenav -->
      <Sidenav :albums="albums" />
      <!-- main content -->
      <div class="w-full h-full relative overflow-y-scroll">
        <!-- header -->
        <div class="w-full sticky top-0 py-4 px-6 flex item-center justify-between">
          <div class="flex items-center">
            <button class="rounded-full bg-black w-8 -8 text-white mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              
            </button>
            <button class="rounded-full bg-black w-8 -8 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>   
            </button>
          </div>
          <div class="relative">
            <button @click="showDropdown = true" class="bg-gray-700 rounded-full py-1 px-2 mr-3 flex items-center text-white">
              <img src="./assets/profile.jpg" class="rounded-full h-6 w-6 mr-2"/>
              <p class="text-white font-semibold text-xs mr-4">Sai Teja</p>
              <svg v-if="showDropdown === false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              <svg v-if="showDropdown === true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
                  
            </button>
            <div v-if="showDropdown === true" class="absolute bg-gray-700 p-1 w-full rounded mt-1 right-0 text-white">
              <button @click="showDropdown = false" class="w-full text-sm py-1 px-2 h-8 text-lightest hover text-white border-b border-gray-500 opacity-75 hover:opacity-100">Account</button>
              <button @click="showDropdown = false" class="w-full text-sm py-1 px-2 h-8 text-lightest hover text-white border-b border-gray-700 opacity-75 hover:opacity-100">Log Out</button>
            </div>
          </div>   
        </div>
        <!-- cards -->
        <AlbumsList title="Recent Played" :albums="recentAlbums" />
        <AlbumsList title="Made for Sai" :albums="personalAlbums" />
      </div>
    </div>
    <!-- play bar -->
    <Playbar/>
  </div>
</template>

<script>

import Button from './components/Button.vue';
import AlbumsList from './components/AlbumsList.vue';
import Sidenav from './components/Sidenav.vue'
import Playbar from './components/Playbar.vue'
export default {
  name: 'App',
  components: {
    Button,
    AlbumsList,
    Sidenav,
    Playbar
  },
  data: function() {
    return {
      setID: 'Home',
      albums: [
        {name: 'Bahubali'},
        {name: 'Mirchi'},
        {name: 'Darling'},
        {name: 'MR perfect'},
        {name: 'Classic songs'},
        {name: 'Radio'}
      ],
      showDropdown: false,
      recentAlbums: [
        {src: 'dailymix1.jpeg', title: 'Daily Mix 1', artist: 'By Spotify'},
        {src: 'dailymix2.jpeg', title: 'Daily Mix 2', artist: 'By Spotify'},
        {src: 'dailymix3.jpeg', title: 'Daily Mix 3', artist: 'By Spotify'},
        {src: 'dailyimg4.jpeg', title: 'Daily Mix 4', artist: 'By Spotify'},
        {src: 'dailymix5.jpeg', title: 'Daily Mix 5', artist: 'By Spotify'},
        {src: 'dailymix6.jpeg', title: 'Daily Mix 6', artist: 'By Spotify'}
      ],
      personalAlbums: [
        {src: 'playlist1.jpeg', title: 'Daily Mix 1', artist: 'By Spotify'},
        {src: 'playlist2.jpeg', title: 'Daily Mix 2', artist: 'By Spotify'},
        {src: 'playlist3.jpeg', title: 'Daily Mix 3', artist: 'By Spotify'},
        {src: 'playlist4.jpeg', title: 'Daily Mix 4', artist: 'By Spotify'},
        {src: 'playlist5.jpeg', title: 'Daily Mix 5', artist: 'By Spotify'},
        {src: 'playlist6.jpeg', title: 'Daily Mix 6', artist: 'By Spotify'}
      ]
    }
  }
};
</script>

<style>
</style>
