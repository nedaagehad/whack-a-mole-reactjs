import whackSound from "../../../assets/audio/whack.mp3"

export const playWhackSound = () => {
  const whack = new Audio(whackSound)

  whack.currentTime = 0
  whack.play()
  }