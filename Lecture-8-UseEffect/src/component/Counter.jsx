import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0); // use state

    return (
        <div className='container m-4'>
            <h1>{count}</h1>
            <div className=''>
                <button className='btn btn-danger me-3' onClick={() => {
                    count == 0 ? count = 1 : setCount(count - 1);
                }}>Decrement</button>
                <button className='btn btn-primary' onClick={() => {
                    setCount(count + 1)
                }}>Increment</button>
            </div>
        </div>
    )
}

export default Counter