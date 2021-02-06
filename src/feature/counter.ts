import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CounterState = { count: number }
const initialState: CounterState = { count: 10 }


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
