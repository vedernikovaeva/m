// components/AddSongForm.vue

<template>
  <div class="add-song-form">
    <h2>Add a New Song</h2>
    <label>
      Song Title:
      <input v-model="title" placeholder="Enter song title" />
    </label>
    <label>
      Artist:
      <input v-model="artist" placeholder="Enter artist name" />
    </label>
    <label>
      Album:
      <input v-model="album" placeholder="Enter album name" />
    </label>
    <button @click="addNewSong">Add Song</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      title: "",
      artist: "",
      album: "",
    };
  },
  methods: {
    ...mapActions(["addSong"]),

    addNewSong() {
      if (this.title && this.artist && this.album) {
        const newSong = {
          id: Date.now(),
          title: this.title,
          artist: this.artist,
          album: this.album,
        };
        this.addSong(newSong);

        this.title = "";
        this.artist = "";
        this.album = "";

        this.$emit("songAdded");
      } else {
        alert("Please fill in all fields.");
      }
    },
  },
};
</script>
