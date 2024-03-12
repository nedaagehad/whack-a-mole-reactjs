import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IScore {
  score: number
}

const initialState: IScore = {
  score: 0
}

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    increaseScore: (state, action: PayloadAction<IScore>) => {
      state.score += action.payload.score
    },
    resetscore: (state) => {
      state.score = 0
    }
  },
})

// Action creators are generated for each case reducer function
export const { increaseScore, resetscore } = scoreSlice.actions

export default scoreSlice.reducer