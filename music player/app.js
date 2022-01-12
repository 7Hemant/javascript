"use strict";
let song_index = 0;
const audio = new Audio("./assets/far-from-home.mp3");
const masterPlay = document.querySelector(".master-player");
const gif = document.querySelector(".player-gif-master");
const progressbar = document.querySelector(".progress-bar");
const song_items = Array.from(document.querySelectorAll(".songs-item"));
const backward = document.querySelector(".backward");
const forward = document.querySelector(".forward");

/*song list */
let songs = [
  {
    song_name: "far-from-home",
    filePath: "./assets/far-from-home.mp3",
  },
  {
    song_name: "inspiring-cinematic",
    filePath: "./assets/inspiring-cinematic.mp3",
  },
  {
    song_name: "just-relax",
    filePath: "./assets/just-relax.mp3",
  },

  {
    song_name: "motivational-anthem",
    filePath: "./assets/motivational-anthem.mp3",
  },
  {
    song_name: "triumphant-long",
    filePath: "./assets/triumphant-long.mp3",
  },
];

/*displaying song list*/
song_items.forEach((element, i) => {
  element.getElementsByClassName("song-name")[0].innerText = songs[i].song_name;
  console.log(i);
});
/*functions */
function play_music() {
  audio.src = songs[song_index].filePath;
  document.querySelector(".masterSongName").innerText =
    songs[song_index].song_name;
  audio.currentTime = 0;
  audio.play();
}
// masterplay button
masterPlay.addEventListener("click", () => {
  if (!audio.paused) {
    audio.pause();
    console.log("pause");
    masterPlay.classList.add("fa-play-circle");
    masterPlay.classList.remove("fa-pause-circle");
    gif.style.opacity = 0;
  } else {
    audio.play();
    console.log("play");
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
    ////currrent time and current duration
    // console.log(audio.currentTime, audio.duration);
  }
});

audio.addEventListener("timeupdate", () => {
  let progress = (audio.currentTime / audio.duration) * 100;
  progressbar.value = progress;
});

progressbar.addEventListener("change", () => {
  audio.currentTime = (progressbar.value * audio.duration) / 100;
});

/*next buttons*/
forward.addEventListener("click", () => {
  if (song_index >= 4) {
    song_index = 0;
  } else {
    song_index += 1;
  }
  play_music();

  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
/*backward*/
backward.addEventListener("click", () => {
  if (song_index <= 0) {
    song_index = 4;
  } else {
    song_index -= 1;
  }
  play_music();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
