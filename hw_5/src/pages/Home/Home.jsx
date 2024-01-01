import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
    const [users, setUsers] = useState([])


    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                if (!res.ok) {
                    throw new Error('Failed to fetch')
                }
                const data = await res.json();
                setUsers(data)
            } catch (e) {
                console.error(e.message)
            }
        };
        getUsers();

    }, [])
  return (
      <div>

          <ul>
              {users.map(({ id, name }) =>
                  <li key={id} className='item'>
                      <span className='num-item'>№ {id}</span>
                      <Link to={`${id}`} className='name'>{name}</Link>
                  </li>)}
          </ul>


      </div>
  )
}

export default Home