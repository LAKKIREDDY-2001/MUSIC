const playlists = {
  songs: [
    {
      name: "Akhanda Thaandavam",
      artist: "Thaman S",
      img: "akhanda1",
      coverImg: "akhanda1",
      audio: "Akhanda Thaandavam"
    },
    {
      name: "Gangadhara Shankara",
      artist: "Thaman S",
      img: "akhanda2",
      coverImg: "akhanda2",
      audio: "Gangadhara Shankara"
    },
    {
      name: "Shiva Shiva",
      artist: "Thaman S",
      img: "akhanda3",
      coverImg: "akhanda3",
      audio: "Shiva Shiva"
    },
    {
      name: "Hara Hara",
      artist: "Thaman S",
      img: "akhanda4",
      coverImg: "akhanda4",
      audio: "Hara Hara"
    },
    {
      name: "Shankara Shankara",
      artist: "Thaman S",
      img: "akhanda5",
      coverImg: "akhanda5",
      audio: "Shankara Shankara"
    },
    {
      name: "Shambho",
      artist: "Adviteeya Vojjala",
      img: "akhanda6",
      coverImg: "akhanda6",
      audio: "Shambho"
    },
    {
      name: "Akhanda Haindhavam",
      artist: "Thaman S",
      img: "akhanda7",
      coverImg: "akhanda7",
      audio: "Akhanda Haindhavam"
    },
    {
      name: "The Thaandavam",
      artist: "Thaman S",
      img: "akhanda8",
      coverImg: "akhanda8",
      audio: "The Thaandavam"
    },
    {
      name: "Jajikaya Jajikaya",
      artist: "Brijesh Shandilya",
      img: "akhanda9",
      coverImg: "akhanda9",
      audio: "Jajikaya Jajikaya"
    }
  ]
};

// Current songs
let currentSongs = playlists.songs;
let currentLanguage = "all";

// Export
window.playlists = playlists;
window.currentSongs = currentSongs;
window.currentLanguage = currentLanguage;
window.lyricsDatabase = {};
