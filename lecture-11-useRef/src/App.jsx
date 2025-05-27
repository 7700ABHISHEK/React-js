import React, { useRef, useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0);
    let render = useRef(null); // initialize it as null

    // console.log(render);

    // use ref is used to persist the value of the component

    return (
        <div>
            <h1>{count}</h1>
            <h2>How many times component renders : {render.current}</h2> {/* passing the objects current value */}
            <button onClick={()=>{
                setCount(count + 1);
                render.current++;
            }}>Click</button>
        </div>
    )
}

export default App
