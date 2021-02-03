import { useSelector, useDispatch } from 'react-redux'
import { counterSlice, CounterState } from './feature/counter'

const App = () => {
  const count = useSelector<CounterState, number>((state) => state.count)
  const dispatch = useDispatch()
  const { added, decremented, incremented } = counterSlice.actions

  return (
    <div className='App'>
      <div>count: {count}</div>
      <button onClick={() => dispatch(incremented())}>+</button>
      <button onClick={() => dispatch(decremented())}>-</button>
      <button onClick={() => dispatch(added(10))}>+10</button>
    </div>
  )
}

export default App
