import { createRouter, createWebHistory } from "vue-router"; // Зміна імпортів
import SongsListPage from "@/views/SongListView.vue"; // Головна сторінка зі списком пісень
import AddSongPage from "@/views/AddSongView.vue"; // Сторінка для додавання нової пісні

const routes = [
  {
    path: "/",
    name: "SongsList",
    component: SongsListPage,
  },
  {
    path: "/add-song",
    name: "AddSong",
    component: AddSongPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
