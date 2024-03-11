import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IMoleIndex {
  moleIndex: number | null
}

const initialState: IMoleIndex = {
  moleIndex: null
}

export const moleIndexSlice = createSlice({
  name: 'moleIndex',
  initialState,
  reducers: {
    setMoleIndex: (state, action: PayloadAction<IMoleIndex>) => {
      state.moleIndex = action.payload.moleIndex
    },
    resetMoleIndex: (state) => {
      state.moleIndex = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { setMoleIndex, resetMoleIndex } = moleIndexSlice.actions

export default moleIndexSlice.reducer