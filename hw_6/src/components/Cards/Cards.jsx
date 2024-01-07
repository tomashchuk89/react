import React from 'react'
import { useContext } from 'react'
import {UserContext} from '../../context/UserInfoContext'

import './Cards.css';


const Cards = () => {
    
    const users =useContext(UserContext)
    
  return (
    <>
         <ul>
              {users.map(({ id, name }) =>
                  <li key={id} className='item'>
                      <span className='num-item'>№ {id}  </span>
                      <span> Name: {name}</span>
                  </li>)}
          </ul>

    </>
  )
}

export default Cards