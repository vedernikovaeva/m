import { createStore } from "vuex";

export default createStore({
  state: {
    songs: [
      {
        id: 1,
        title: "Sky",
        artist: "Playboi Carti",
        album: "Whole Lotta Red",
      },
      {
        id: 2,
        title: "Rich Flex",
        artist: "Drake & 21 Savage",
        album: "Her Loss",
      },
      {
        id: 3,
        title: "First Class",
        artist: "Jack Harlow",
        album: "Come Home The Kids Miss You",
      },
      {
        id: 4,
        title: "Bad Habit",
        artist: "Steve Lacy",
        album: "Gemini Rights",
      },
      {
        id: 5,
        title: "As It Was",
        artist: "Harry Styles",
        album: "Harry's House",
      },
      {
        id: 6,
        title: "Kill Bill",
        artist: "SZA",
        album: "SOS",
      },
      {
        id: 7,
        title: "Creepin'",
        artist: "Metro Boomin, The Weeknd & 21 Savage",
        album: "Heroes & Villains",
      },
      {
        id: 8,
        title: "Superhero (Heroes & Villains)",
        artist: "Metro Boomin ft. Future & Chris Brown",
        album: "Heroes & Villains",
      },
      {
        id: 9,
        title: "I Ain't Worried",
        artist: "OneRepublic",
        album: "Top Gun: Maverick (Music from the Motion Picture)",
      },
      {
        id: 10,
        title: "Calm Down",
        artist: "Rema & Selena Gomez",
        album: "Rave & Roses",
      },
    ],
  },
  mutations: {
    ADD_SONG(state, song) {
      state.songs.push(song);
    },
    DELETE_SONG(state, songId) {
      state.songs = state.songs.filter((song) => song.id !== songId);
    },
  },
  actions: {
    addSong({ commit }, song) {
      commit("ADD_SONG", song);
    },

    deleteSong({ commit }, songId) {
      commit("DELETE_SONG", songId);
    },
  },
  modules: {},
  getters: {
    getSongs: (state) => state.songs,
    getSongById: (state) => (id) => state.songs.find((song) => song.id === id),
    getSongsByArtist: (state) => (artist) =>
      state.songs.filter((song) => song.artist === artist),
    getSongsByAlbum: (state) => (album) =>
      state.songs.filter((song) => song.album === album),
  },
});
