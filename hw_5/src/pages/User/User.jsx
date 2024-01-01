import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './User.css';


const User = () => {
    const params = useParams();
    const { userId } = params;

    const [user, setUser] = useState({})
    const { id, name, username, email, phone } = user;


    useEffect(() => {
        if (!userId) return;
        const getUser = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                if (!res.ok) {
                    throw new Error('Failed to fetch')
                }
                const data = await res.json();
                setUser(data)
            } catch (e) {
                console.error(e.message)
            }
        };
        getUser();

    }, [userId])

    return (
        <div className='main'>
            <h1>User {id} </h1>
            <table className='table'>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>Username:</td>
                        <td>{username}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>{phone}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default User