import React, { useContext } from 'react'
import { myContext } from '../Context'
import Navbar from './Navbar'

export default function UserProfile() {

    const{user,setUser}=useContext(myContext)
  return (
    <div className='min-h-screen bg-slate-950 text-white '>
        <Navbar />
        <div className='text-center mt-10'>
       {user.map((item, index) => (
        <div key={index}>
          <h2>Name: {item.name}</h2>
          <p>Email: {item.email}</p>
        </div>
      ))}
        </div>
    </div>
  )
}
