export const playGameMusic = (audioSrc: HTMLAudioElement) => {
  audioSrc
    .play()
    .catch((error) => console.log("Failed to play audio ::", error));
  audioSrc.volume = 0.3;
  audioSrc.loop = true;
};
