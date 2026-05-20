import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const nav = useNavigate();


  function handleshop(){
    nav("/products")
  }
  return (
    <div className='min-h-screen bg-slate-950 text-white'>

      <Navbar />

      
      <div className='flex flex-col items-center justify-center text-center px-6 py-24'>

        <h1 className='text-5xl md:text-6xl font-bold text-cyan-400 mb-6'>
          Welcome To Max Cart Shopping
        </h1>

        <p className='max-w-2xl text-lg text-slate-300 leading-8'>
          Discover the latest products with amazing prices, modern designs,
          and a smooth shopping experience. Shop smarter with Max Cart.
        </p>

        <button onClick={handleshop} className='mt-10 bg-cyan-500 hover:bg-cyan-600 transition duration-300 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg'>
          Shop Now
        </button>

      </div>

      <div className='px-8 md:px-20 py-16 bg-slate-900'>

        <h2 className='text-4xl font-bold text-cyan-400 mb-8 text-center'>
          About Us
        </h2>

        <div className='max-w-4xl mx-auto text-center text-slate-300 text-lg leading-9'>

          <p>
            Max Cart is a modern e-commerce platform built to provide users
            with an easy and enjoyable online shopping experience.
          </p>

          <p className='mt-6'>
            We focus on quality products, clean design, fast browsing,
            and user-friendly features including cart management,
            wishlist support, and product customization.
          </p>

        </div>

      </div>

      <Footer />
    </div>
  )
}