import { TIMER } from "../../../enums/TIMER"
import { store } from "../../../store/store"

export interface IPopupContent {
    title: string
    subtitle: string
    buttonText: string
}

export const startGamePopupContent: IPopupContent = {
    title: `You got only ${TIMER.LIMIT} seconds`,
    subtitle: "Whack as many moles as you can!",
    buttonText: "Start Game!"
}
export const retryGamePopupContent: IPopupContent = {
    title: "Your time is up",
    subtitle: `Your Score is: `,
    buttonText: "Try Again!"
}