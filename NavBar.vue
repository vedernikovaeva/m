<template>
  <nav class="navbar">
    <router-link to="/" exact class="nav-link" active-class="active"
      >Songs List</router-link
    >
    <router-link to="/add-song" class="nav-link" active-class="active"
      >Add New Song</router-link
    >
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-around;
}
.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.nav-link.active {
  color: #ffcc00;
}
</style>
