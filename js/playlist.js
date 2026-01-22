// Main songs array for script.js to access
let songs = [
  {
    name: "2-Ori Vaari",
    artist: "Unknown Artist",
    img: "img1",
    audio: "2-Ori Vaari"
  },
  {
    name: "Allantha Doorala",
    artist: "Unknown Artist",
    img: "img1",
    audio: "05 - Allantha Doorala  - SenSongsMp3.co"
  },
  {
    name: "Adiga Adiga",
    artist: "Unknown Artist",
    img: "img1",
    audio: "Adiga Adiga"
  },
  {
    name: "Badsh",
    artist: "Unknown Artist",
    img: "img1",
    audio: "badsh"
  },
  {
    name: "Bayilone Ballipalike",
    artist: "Unknown Artist",
    img: "img1",
    audio: "Bayilone Ballipalike"
  },
  {
    name: "Bhalle Bhalle",
    artist: "Unknown Artist",
    img: "img1",
    audio: "Bhalle Bhalle"
  },
  {
    name: "Calm Down",
    artist: "Unknown Artist",
    img: "img1",
    audio: "calmdown"
  },
  {
    name: "Fear",
    artist: "Unknown Artist",
    img: "img1",
    audio: "Fear"
  },
  {
    name: "Gaali Vaaluga",
    artist: "Thaman S",
    img: "img1",
    audio: "Gaali Vaaluga - SenSongsMp3.Co"
  },
  {
    name: "Gira Gira Gingiraagirey",
    artist: "Unknown Artist",
    img: "img1",
    audio: "Gira Gira Gingiraagirey"
  },
  {
    name: "GlobeTrotter",
    artist: "Unknown Artist",
    img: "img1",
    audio: "GlobeTrotter"
  },
  {
    name: "Goat",
    artist: "Unknown Artist",
    img: "img1",
    audio: "goat"
  },
  {
    name: "Hook Step",
    artist: "Unknown Artist",
    img: "img1",
    audio: "Hook Step"
  },
  {
    name: "Idiot",
    artist: "Unknown Artist",
    img: "img1",
    audio: "idiot"
  },
  {
    name: "Inkem Inkem Inkem Kaavaale",
    artist: "Gopi Sundar",
    img: "img1",
    audio: "Inkem Inkem Inkem Kaavaale - SenSongsMp3.Co"
  },
  {
    name: "Jabilli Kosam",
    artist: "Unknown Artist",
    img: "img1",
    audio: "Jabilli Kosam"
  },
  {
    name: "Kanapadava",
    artist: "Unknown Artist",
    img: "img1",
    audio: "Kanapadava"
  },
  {
    name: "Karthika Deepam Remix",
    artist: "Unknown Artist",
    img: "img1",
    audio: "Karthika Deepam Remix"
  },
  {
    name: "Mana Friendalle",
    artist: "Unknown Artist",
    img: "img1",
    audio: "Mana Friendalle"
  },
  {
    name: "Manasantha",
    artist: "Unknown Artist",
    img: "img1",
    audio: "Manasantha"
  },
  {
    name: "Meesaala Pilla",
    artist: "Unknown Artist",
    img: "img1",
    audio: "Meesaala Pilla"
  },
  {
    name: "Mega Victory Mass",
    artist: "Unknown Artist",
    img: "img1",
    audio: "Mega Victory Mass"
  },
  {
    name: "Na Prema Kathaku",
    artist: "Unknown Artist",
    img: "img1",
    audio: "Na Prema Kathaku - SenSongsmp3.Co"
  },
  {
    name: "Nee Prashnalu",
    artist: "Unknown Artist",
    img: "img1",
    audio: "Nee Prashnalu"
  },
  {
    name: "Sayyare",
    artist: "Unknown Artist",
    img: "img1",
    audio: "Sayyare"
  },
  {
    name: "Teliyade Teliyade",
    artist: "Unknown Artist",
    img: "img1",
    audio: "Teliyade Teliyade - SenSongsMp3.Com"
  },
  {
    name: "Theme of Kalki",
    artist: "Unknown Artist",
    img: "img1",
    audio: "Theme of Kalki"
  },
  {
    name: "Toli Adugaina Padalede",
    artist: "Unknown Artist",
    img: "img1",
    audio: "Toli Adugaina Padalede"
  },
  {
    name: "Undiporaadhey",
    artist: "Anirudh Ravichander",
    img: "img1",
    audio: "Undiporaadhey - SenSongsMp3.Co"
  },
  {
    name: "Until",
    artist: "Unknown Artist",
    img: "img1",
    audio: "until"
  }
];

const playlists = {
  songs: songs
};

// Current songs
let currentSongs = songs;
let currentLanguage = "all";

// Export
window.songs = songs;
window.playlists = playlists;
window.currentSongs = currentSongs;
window.currentLanguage = currentLanguage;
window.lyricsDatabase = {};

