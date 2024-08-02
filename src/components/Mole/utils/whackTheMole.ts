import { increaseScore } from "../../../store/scoreSlice"
import { store } from "../../../store/store"
import { playWhackSound } from "./playWhackSound"

export const whackTheMole = () => {
    store.dispatch(increaseScore({
      score: 10
    }))
    playWhackSound()
  }