import whackSound from "../../../assets/audio/whack.mp3"

export const playWhackSound = () => {
    new Audio(whackSound).play()
  }