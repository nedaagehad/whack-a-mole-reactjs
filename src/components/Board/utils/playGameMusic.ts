export const playGameMusic = (audioSrc: string) => {
    const gameMusic = new Audio(audioSrc)
    gameMusic.pause()
    gameMusic.currentTime = 0
    gameMusic.play()
    gameMusic.loop = true
  }