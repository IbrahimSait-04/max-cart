import React, { useContext, useState } from 'react'
import { myContext } from '../Context';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/Max-Cart-Logo.png"

export default function Register() {

  const nav = useNavigate();

  const { user, setUser } = useContext(myContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function validateName(name){
    const nameRegex = /^[a-zA-Z]{2,30}$/;
    return nameRegex.test(name)
  }


  function validateEmail(email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email)
  }

  function handleRegister() {

    if (!name || !email || !password) {
      return alert("Please Fill All Fields")
    }
    if(!validateName(name)){
      return alert("Enter a valid Name")
    }
    if(!validateEmail(email)){
      return alert("Enter a valid Email")
    }

    const userData = { name, email, password };

    setUser([...user, userData])

    alert("Registration Successfull")

    nav("/login")
  }

  console.log(user);

  return (

    <div className='min-h-screen bg-slate-950 flex items-center justify-center px-6'>

      <div className='w-full max-w-md bg-slate-900 rounded-3xl shadow-2xl p-8'>

        
        <div className='flex flex-col items-center mb-8'>

          <img
            src={Logo}
            alt="Logo"
            className='w-36 h-28 object-contain'
          />

          <h1 className='text-4xl font-bold text-cyan-400 mt-2'>
            Max Cart
          </h1>

          <p className='text-slate-400 mt-2 text-center'>
            Create your account to continue shopping
          </p>

        </div>

        
        <div className='flex flex-col gap-5'>

          <input
            type="text"
            placeholder='Name'
            value={name}
            onChange={e => setName(e.target.value)}
            className='bg-slate-800 text-white px-4 py-3 rounded-xl outline-none border border-slate-700 focus:border-cyan-400'
          />

          <input
            type="text"
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='bg-slate-800 text-white px-4 py-3 rounded-xl outline-none border border-slate-700 focus:border-cyan-400'
          />

          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            className='bg-slate-800 text-white px-4 py-3 rounded-xl outline-none border border-slate-700 focus:border-cyan-400'
          />

          <button
            onClick={handleRegister}
            className='bg-cyan-500 hover:bg-cyan-600 transition duration-300 text-white py-3 rounded-xl text-lg font-semibold shadow-lg'
          >
            Register
          </button>

        </div>

        
        <div className='mt-8 text-center text-slate-300'>

          <p>
            Already Have An Account ?
            <a
              href="/login"
              className='text-cyan-400 ml-2 no-underline hover:text-cyan-300'
            >
              Login
            </a>
          </p>

        </div>

      </div>

    </div>
  )
}