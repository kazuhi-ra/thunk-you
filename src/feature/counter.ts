import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { dummyFetch } from '../api/number'

const FEATURE = 'counter'
export type CounterState = { count: number }
const initialState: CounterState = { count: 10 }

export const randomIncremented = createAsyncThunk<
  number,
  undefined,
  { state: CounterState }
>(`${FEATURE}/randomIncremented`, async () => {
  const yo = await dummyFetch(3)
  return yo
})

export const counterSlice = createSlice({
  name: FEATURE,
  initialState,
  reducers: {
    incremented: (state) => ({ ...state, count: state.count + 1 }),
    decremented: (state) => ({ ...state, count: state.count - 1 }),
    added: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(randomIncremented.fulfilled, (state, action) => ({
      ...state,
      count: state.count + action.payload,
    }))
  },
})
