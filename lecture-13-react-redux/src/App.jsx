import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament, reset } from './redux/action';

const App = () => {

    const count = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>count : {count}</h1>
            <button onClick={() => dispatch(increament())} >increament</button>
            <button onClick={() => dispatch(decreament())} >decreament</button>
            <button onClick={() => dispatch(reset())} >reset</button>
        </div>
    )
}

export default App