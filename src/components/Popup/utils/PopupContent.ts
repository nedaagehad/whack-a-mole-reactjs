import { TIMER } from "../../../enums/TIMER"

export interface IPopupContent {
    title: string
    subtitle: string
    buttonText: string
}

const startGamePopupContent: IPopupContent = {
    title: `You got only ${TIMER.LIMIT} seconds`,
    subtitle: "Whack as many moles as you can!",
    buttonText: "Start Game!"
}
const retryGamePopupContent: IPopupContent = {
    title: "Your time is up",
    subtitle: "Your Score is: ",
    buttonText: "Try Again!"
}

export const returnPopupContent = (timer: number) => {
    if (timer === 0) return retryGamePopupContent
    else return startGamePopupContent
}