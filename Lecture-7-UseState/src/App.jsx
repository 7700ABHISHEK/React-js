import React, { useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0)
    const decrement = ()=>{
        setCount(count - 1)
    }
    const increment = ()=>{
        setCount(count + 1)
    }

    return (
        <section>
            <div className="container">
                <div>
                        <h1>Count: {count}</h1>
                        <button className='btn btn-primary' onClick={decrement}>Decrement </button>
                        <button className='btn btn-danger' onClick={increment}>Increment</button>
                </div>
            </div>
        </section>
    )
}

export default App