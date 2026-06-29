const content = document.querySelector(".content"),
Playimage = content.querySelector(".music-image img"),
Coverimage = content.querySelector(".coverImg"),
musicName = content.querySelector(".music-titles .name"),
musicArtist = content.querySelector(".music-titles .artist"),
Audio = document.querySelector(".main-song"),
playBtn = content.querySelector(".play-pause"),
playBtnIcon = content.querySelector(".play-pause span"),

prevBtn = content.querySelector("#prev"),
nextBtn = content.querySelector("#next"),
progressBar = content.querySelector(".progress-bar"),
progressDetails = content.querySelector(".progress-details"),
repeatBtn = content.querySelector("#repeat"),
Shuffle = content.querySelector("#shuffle");

let index = 1;

window.addEventListener("load", ()=>{
  loadData(index);
  setupMediaSessionActions();
});

function setupMediaSessionActions(){
  if(!('mediaSession' in navigator)) return;

  // Lock screen / headset controls


  try{
    navigator.mediaSession.setActionHandler('play', ()=>{
      playSong();
    });

    navigator.mediaSession.setActionHandler('pause', ()=>{
      pauseSong();
    });

    navigator.mediaSession.setActionHandler('previoustrack', ()=>{
      prevSong();
    });

    navigator.mediaSession.setActionHandler('nexttrack', ()=>{
      nextSong();
    });

    navigator.mediaSession.setActionHandler('seekto', (details)=>{
      if(!details || typeof details.seekTime !== 'number') return;
      Audio.currentTime = details.seekTime;
    });

    navigator.mediaSession.setActionHandler('stop', ()=>{
      pauseSong();
      Audio.currentTime = 0;
    });
  }catch(e){}
}


function loadData(indexValue){
  musicName.innerHTML = songs[indexValue - 1].name;
  musicArtist.innerHTML = songs[indexValue - 1].artist;
  Playimage.src = "images/" + songs[indexValue - 1].img + ".jpg";
  Audio.src = "music/" + songs[indexValue - 1].audio + ".mp3";

  try{
    Audio.load();
  }catch(e){}

  index = indexValue;
  updateMediaSession(index);
}


function updateMediaSession(indexValue){
  if(!('mediaSession' in navigator)) return;

  const track = songs[indexValue - 1];
  if(!track) return;

  const artworkUrl = "images/" + track.img + ".jpg";

  try{
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.name,
      artist: track.artist,
      album: "Music",
      artwork: [
        { src: artworkUrl, sizes: '512x512', type: 'image/jpeg' }
      ]
    });
  }catch(e){}
}



playBtn.addEventListener("click", ()=>{
  const isMusicPaused = content.classList.contains("paused");
  if(isMusicPaused){
    pauseSong();
  }
  else{
    playSong();
  }
});



function playSong(){
  content.classList.add("paused");
  playBtnIcon.innerHTML = "pause";
  try{
    if('mediaSession' in navigator){
      navigator.mediaSession.playbackState = 'playing';
    }
  }catch(e){}
  Audio.play();
}

function pauseSong(){
  content.classList.remove("paused");
  playBtnIcon.innerHTML = "play_arrow";
  try{
    if('mediaSession' in navigator){
      navigator.mediaSession.playbackState = 'paused';
    }
  }catch(e){}
  Audio.pause();
}


nextBtn.addEventListener("click", ()=>{
  nextSong();
});

prevBtn.addEventListener("click", ()=>{
  prevSong();
});

function nextSong(){
  index++;
  if(index > songs.length){
    index = 1;
  }
  loadData(index);
  return Audio.play();
}

function prevSong(){
  index--;
  if(index <= 0){
    index = songs.length;
  }
  loadData(index);
  return Audio.play();
}

progressDetails.addEventListener("click", (e)=>{
  let progressValue = progressDetails.clientWidth; // Get width of Progress Bar
  let clickedOffsetX = e.offsetX; // get offset x value
  let MusicDuration = Audio.duration; // get total music duration

  Audio.currentTime = (clickedOffsetX / progressValue) * MusicDuration;
});

Audio.addEventListener("loadeddata", ()=>{
  let finalTimeData = content.querySelector(".final");

  //Update finalDuration
  let AudioDuration = Audio.duration;
  let finalMinutes = Math.floor(AudioDuration / 60);
  let finalSeconds = Math.floor(AudioDuration % 60);
  if(finalSeconds < 10){
    finalSeconds = "0"+finalSeconds;
  }
  finalTimeData.innerText = finalMinutes+":"+finalSeconds;
});

repeatBtn.addEventListener("click", ()=>{
  Audio.currentTime = 0;
});




Audio.addEventListener("timeupdate", (e)=>{
  const initialTime = e.target.currentTime; // Get current music time
  const finalTime = e.target.duration; // Get music duration
  let BarWidth = (initialTime / finalTime) * 100;
  progressBar.style.width = BarWidth+"%";

  //Update Current Duration
  let currentTimeData = content.querySelector(".current");
  let CurrentTime = Audio.currentTime;
  let currentMinutes = Math.floor(CurrentTime / 60);
  let currentSeconds = Math.floor(CurrentTime % 60);
  if(currentSeconds < 10){
    currentSeconds = "0"+currentSeconds;
  }
  currentTimeData.innerText = currentMinutes+":"+currentSeconds;
});


//Shuffle Logic
Shuffle.addEventListener("click", ()=>{
  var randIndex = Math.floor(Math.random() * songs.length) + 1; // Select random betwn 1 and song array length
  loadData(randIndex);
  playSong();
});

Audio.addEventListener("ended", ()=>{
  nextSong();
});

