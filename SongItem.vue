<template>
  <div class="song-item">
    <h3>{{ song.title }}</h3>
    <p><strong>Artist:</strong> {{ song.artist }}</p>
    <p><strong>Album:</strong> {{ song.album }}</p>
    <button @click="removeSong">Delete</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    song: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["deleteSong"]),

    removeSong() {
      this.deleteSong(this.song.id);
    },
  },
};
</script>

<style scoped>
.song-item {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
}
button {
  margin-right: 5px;
}
</style>
