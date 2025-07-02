import { useDispatch, useSelector } from "react-redux"
import { decreament, increament } from "./features/counter/counterSlice";

const App = () => {

    const count = useSelector((state) => {
        return state.counter.count;
    })

    const dispatch = useDispatch();

    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={() => dispatch(increament())}>Increament</button>
            <button onClick={() => dispatch(decreament())}>Decreament</button>
        </div>
    )
}

export default App