import { configureStore } from '@reduxjs/toolkit'
import moleIndexReducer from './MoleIndexSlice/index'
import scoreReducer from './scoreSlice/index'

export const store = configureStore({
  reducer: {
    moleIndex: moleIndexReducer,
    score: scoreReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch