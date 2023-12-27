import './Card.css';
import { useState, useEffect } from 'react';


const Card = () => {
    const [todos, setTodos] = useState([])
  

    useEffect(() => {
        const getTodos = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/todos')
                if (!res.ok) {
                    throw new Error('Failed to fetch')
                }
                const data = await res.json();
                setTodos(data)
            } catch (e) {
                console.error(e.message)
            }
        };
        getTodos();

    }, [])

    return (
        <>
            <div>
                <ul>
                    {todos.map(({ id, title, completed }) =>

                        <li key={id} className='item'>

                            <p>№ {id}</p>
                            <p>Title: {title}</p>
                            <p>Completed: {completed ? 'Yes' : 'No'}</p>

                        </li>)}
                </ul>

            </div>


        </>

    )
}

export default Card