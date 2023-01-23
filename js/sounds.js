const audio1 = new Audio("sounds/Floresta.wav");
const audio2 = new Audio("sounds/Chuva.wav");
const audio3 = new Audio("sounds/Cafeteria.wav");
const audio4 = new Audio("sounds/Lareira.wav");
let isPlayingAudio1;
let isPlayingAudio2;
let isPlayingAudio3;
let isPlayingAudio4;

audio1.onplaying = function () {
  isPlayingAudio1 = true;
};

audio1.onpause = function () {
  isPlayingAudio1 = false;
};

audio2.onplaying = function () {
  isPlayingAudio2 = true;
};

audio2.onpause = function () {
  isPlayingAudio2 = false;
};

audio3.onplaying = function () {
  isPlayingAudio3 = true;
};

audio3.onpause = function () {
  isPlayingAudio3 = false;
};

audio4.onplaying = function () {
  isPlayingAudio4 = true;
};

audio4.onpause = function () {
  isPlayingAudio4 = false;
};

export {
  audio1,
  audio2,
  audio3,
  audio4,
  isPlayingAudio1,
  isPlayingAudio2,
  isPlayingAudio3,
  isPlayingAudio4,
};
