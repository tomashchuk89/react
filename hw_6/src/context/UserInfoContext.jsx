import React from 'react'
import { createContext } from 'react';
import { useState, useEffect } from 'react';



export const UserContext = createContext(null);
UserContext.displayName = 'UserContext';

const UserInfoContext = ({children}) => {

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
      <UserContext.Provider value={users}>
          {children}
      </UserContext.Provider>
  )
}

export default UserInfoContext