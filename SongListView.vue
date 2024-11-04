<template>
  <div>
    <h1>Songs List</h1>

    <label>
      Filter by Artist:
      <input v-model="artistFilter" placeholder="Enter artist name" />
    </label>

    <label>
      Filter by Album:
      <input v-model="albumFilter" placeholder="Enter album name" />
    </label>

    <div v-for="song in filteredSongs" :key="song.id">
      <SongItem :song="song" />
    </div>
  </div>
</template>

<script>
import SongItem from "@/components/SongItem.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    SongItem,
  },
  data() {
    return {
      artistFilter: "",
      albumFilter: "",
    };
  },
  computed: {
    ...mapGetters(["getSongs"]),

    filteredSongs() {
      return this.getSongs.filter((song) => {
        const matchesArtist = song.artist
          .toLowerCase()
          .includes(this.artistFilter.toLowerCase());
        const matchesAlbum = song.album
          .toLowerCase()
          .includes(this.albumFilter.toLowerCase());
        return matchesArtist && matchesAlbum;
      });
    },
  },
};
</script>
