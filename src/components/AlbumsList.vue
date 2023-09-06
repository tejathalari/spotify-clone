<template>
    <div class="px-6 py-3">
        <div class="flex items-center justify-between">
            <h1 class="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline">{{ title }}</h1>
            <h2 class="pr-8 pt-4 text-xs text-gray-400 uppercase tracking-wider hover:underline mb-3">Show All</h2>
        </div>
        <div class="w-full flex flex-wrap">
            <div v-for="recentAlbum in recentAlbums" class="p-2 w-48 relative">
                <Card :recent="recentAlbum" />
            </div>`
        </div>
    </div>
</template>

<script>
import Card from './Card.vue'
export default {
    name: 'AlbumsList',
    components: {
        Card
    },
    props: {
        recentAlbums: Array,
        title: String
    }
};
</script>

<style scoped>
/* Add any specific button styling here */
</style>
