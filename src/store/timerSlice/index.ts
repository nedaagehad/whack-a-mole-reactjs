import { createSlice } from '@reduxjs/toolkit'
import { TIMER } from '../../enums/TIMER'

export interface ITimer {
  timer: number
}

const initialState: ITimer = {
  timer: TIMER.LIMIT
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    starttimer: (state) => {
      state.timer -= 1
    },
    resetTimer: (state) => {
      state.timer = TIMER.LIMIT
    }
  },
})

// Action creators are generated for each case reducer function
export const { starttimer, resetTimer } = timerSlice.actions

export default timerSlice.reducer