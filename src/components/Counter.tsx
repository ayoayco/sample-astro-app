import { useState } from 'react'

const Counter = () => {
    const [state, setState] = useState(0)

    return (
        <>
            <h1>Counter</h1>
            <p>{state}</p>
            <button onClick={() => setState(state + 1)}>+</button>
            <button onClick={() => setState(state - 1)}>-</button>
        </>
    )
}

export default Counter