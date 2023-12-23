import './Counter.css';
import { useState } from 'react';


const Counter = () => {

    const [count, setCount] = useState(0)


    const hendleDecrement = () => {
        setCount(count - 1)
    };

    const hendleIncrement = () => {
        setCount(count + 1)
    };

    const reset = () => {
        setCount(0)
    };



    return (
        <>
            <div className='count'>
                <h1 className='name-count'> Count: {count}</h1>
                <button className='btn-count' onClick={hendleDecrement}>Decrement</button>
                <button className='btn-count' onClick={reset}>Reset</button>
                <button className='btn-count' onClick={hendleIncrement}>Increment</button>
            </div>
            
        </>

    )
}

export default Counter