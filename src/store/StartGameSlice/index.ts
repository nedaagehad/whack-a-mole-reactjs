import { createSlice } from '@reduxjs/toolkit'

export interface IStartGame {
  start: boolean
}

const initialState: IStartGame = {
  start: false
}

export const startGameSlice = createSlice({
  name: 'start game',
  initialState,
  reducers: {
    startGame: (state) => {
      state.start = true
    },
    endGame: (state) => {
      state.start = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { startGame, endGame } = startGameSlice.actions

export default startGameSlice.reducer