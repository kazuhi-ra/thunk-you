import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CounterState = { count: number }
const initialState: CounterState = { count: 10 }

const fetchUserById = createAsyncThunk<any, { userId: string }, any>(
  'fetchUserById',
  async (arg, thunkAPI) => {
    const res = await fetch(
      `https://api.github.com/users/${encodeURIComponent(arg.userId)}`
    )
  }
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: (state) => ({ ...state, count: state.count + 1 }),
    decremented: (state) => ({ ...state, count: state.count - 1 }),
    added: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
  },
})
