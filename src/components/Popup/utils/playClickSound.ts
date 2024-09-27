import clickSound from "../../../assets/audio/click.mp3"

export const playClickSound = () => {
  const click = new Audio(clickSound)

  click.currentTime = 0
  click.playbackRate = 2
  click.play()
  }