// Playlist data with language categories - Updated to match actual files
const playlists = {
  telugu: [
    {
      name: "Nee Prashnalu",
      artist: "S.P. Balasubramanyam",
      img: "img1",
      coverImg: "img1",
      audio: "Nee Prashnalu"
    },
    {
      name: "Jabilli Kosam",
      artist: "S.P. Balasubramanyam",
      img: "img1",
      coverImg: "img1",
      audio: "Jabilli Kosam"
    },
    {
      name: "Mana Friendalle",
      artist: "Snehithudu",
      img: "img1",
      coverImg: "img1",
      audio: "Mana Friendalle"
    },
    {
      name: "Theme of Kalki",
      artist: "Kalki 2898AD",
      img: "img1",
      coverImg: "img1",
      audio: "Theme of Kalki"
    },
    {
      name: "Toli Adugaina Padalede",
      artist: "Snehithudu",
      img: "img1",
      coverImg: "img1",
      audio: "Toli Adugaina Padalede"
    },
    {
      name: "Manasantha",
      artist: "Snehithudu",
      img: "img1",
      coverImg: "img1",
      audio: "Manasantha"
    },
    {
      name: "Meesaala Pilla",
      artist: "Snehithudu",
      img: "img1",
      coverImg: "img1",
      audio: "Meesaala Pilla"
    },
    {
      name: "2-Ori Vaari",
      artist: "Sri Nandhan",
      img: "img1",
      coverImg: "img1",
      audio: "2-Ori Vaari"
    },
    {
      name: "Adiga Adiga",
      artist: "Naga Chaitanya",
      img: "img1",
      coverImg: "img1",
      audio: "Adiga Adiga"
    },
    {
      name: "Inkem Inkem Inkem Kaavaale",
      artist: "Sid Sriram",
      img: "img1",
      coverImg: "img1",
      audio: "Inkem Inkem Inkem Kaavaale - SenSongsMp3.Co"
    },
    {
      name: "Karthika Deepam",
      artist: "Bheems Ceciroleo",
      img: "img1",
      coverImg: "img1",
      audio: "Karthika-Deepam-Remix-Song-Bheems-Ceciroleo-NaaSongs"
    },
    {
      name: "Gaali Vaaluga",
      artist: "Armaan Malik",
      img: "img1",
      coverImg: "img1",
      audio: "Gaali Vaaluga - SenSongsMp3.Co"
    },
    {
      name: "Undiporaadhey",
      artist: "Anurag Kulkarni",
      img: "img1",
      coverImg: "img1",
      audio: "Undiporaadhey - SenSongsMp3.Co"
    },
    {
      name: "Kanapadava",
      artist: "M.M. Keeravani",
      img: "img1",
      coverImg: "img1",
      audio: "Kanapadava"
    },
    {
      name: "Allantha Doorala",
      artist: "Ilaiyaraaja",
      img: "img1",
      coverImg: "img1",
      audio: "05 - Allantha Doorala  - SenSongsMp3.co"
    },
    {
      name: "Bayilone Ballipalike",
      artist: "M.M. Keeravani",
      img: "img1",
      coverImg: "img1",
      audio: "Bayilone Ballipalike"
    }
  ],
  hindi: [
    {
      name: "Give Me Some Sunshine",
      artist: "Sharman Joshi & Suraj Jagan",
      img: "img1",
      coverImg: "img1",
      audio: "idiot"
    },
    {
      name: "Teliyade Teliyade",
      artist: "S.P. Balasubramanyam",
      img: "img1",
      coverImg: "img1",
      audio: "Teliyade Teliyade - SenSongsMp3.Com"
    },
    {
      name: "Calm Down",
      artist: "Rema",
      img: "img1",
      coverImg: "img1",
      audio: "calmdown"
    },
    {
      name: "Badshah · Arijit Singh",
      artist: "Soulmate",
      img: "img1",
      coverImg: "img1",
      audio: "badsh"
    },
    {
      name: "Hook Step",
      artist: "Hiphop Tamizha",
      img: "img1",
      coverImg: "img1",
      audio: "Hook Step"
    }
  ],
  english: [
    {
      name: "Until I Found You",
      artist: "Stephen Sanchez",
      img: "img1",
      coverImg: "img1",
      audio: "until"
    },
    {
      name: "Gira Gira",
      artist: "Shreya Ghoshal",
      img: "img1",
      coverImg: "img1",
      audio: "Gira Gira Gingiraagirey"
    },
    {
      name: "GlobeTrotter",
      artist: "A.R. Rahman",
      img: "img1",
      coverImg: "img1",
      audio: "GlobeTrotter"
    },
    {
      name: "Mega Victory Mass",
      artist: "Thaman S",
      img: "img1",
      coverImg: "img1",
      audio: "Mega Victory Mass"
    },
    {
      name: "Sayyare",
      artist: "Amit Trivedi",
      img: "img1",
      coverImg: "img1",
      audio: "Sayyare"
    }
  ],
  punjabi: [
    {
      name: "G.O.A.T.",
      artist: "Diljit Dosanjh",
      img: "img1",
      coverImg: "img1",
      audio: "goat"
    },
    {
      name: "Bhalle Bhalle",
      artist: "Sukhwinder Singh",
      img: "img1",
      coverImg: "img1",
      audio: "Bhalle Bhalle"
    },
    {
      name: "Na Prema Kathaku",
      artist: "Sri Ranga",
      img: "img1",
      coverImg: "img1",
      audio: "Na Prema Kathaku - SenSongsmp3.Co"
    },
    {
      name: "Naatu Naatu",
      artist: "Rahul Sipligunj",
      img: "img1",
      coverImg: "img1",
      audio: "Fear"
    }
  ]
};

// Current filtered songs array
let currentSongs = [];
let currentLanguage = 'all';

// Initialize with all songs combined
function initializePlaylist() {
  currentSongs = [
    ...playlists.telugu,
    ...playlists.hindi,
    ...playlists.english,
    ...playlists.punjabi
  ];
  currentLanguage = 'all';
}

// Call initialization
initializePlaylist();

// Export for use in other scripts
window.playlists = playlists;
window.currentSongs = currentSongs;
window.currentLanguage = currentLanguage;
window.lyricsDatabase = {};
window.initializePlaylist = initializePlaylist;

