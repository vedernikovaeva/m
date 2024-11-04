// views/AddSongPage.vue

<template>
  <div>
    <h1>Add a New Song</h1>
    <AddSongForm @songAdded="goToSongsList" />
    <button @click="goToSongsList">Back to Songs List</button>
  </div>
</template>

<script>
import AddSongForm from "@/components/AddSongForm.vue";

export default {
  components: {
    AddSongForm,
  },
  methods: {
    goToSongsList() {
      this.$router.push({ name: "SongsList" });
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 10px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
