import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-slate-900 text-white mt-20 border-t border-slate-700'>

      <div className='max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10'>

        
        <div>
          <h1 className='text-3xl font-bold text-cyan-400 mb-4'>
            Max Cart
          </h1>

          <p className='text-slate-300 leading-7'>
            Your trusted shopping destination for modern products,
            affordable prices, and a smooth online shopping experience.
          </p>
        </div>

        
        <div>
          <h2 className='text-2xl font-semibold mb-5'>
            Quick Links
          </h2>

          <div className='flex flex-col gap-3 text-slate-300'>

            <a
              href="/home"
              className='hover:text-cyan-400 transition duration-300 no-underline'
            >
              Home
            </a>

            <a
              href="/products"
              className='hover:text-cyan-400 transition duration-300 no-underline'
            >
              Products
            </a>

            <a
              href="/cart"
              className='hover:text-cyan-400 transition duration-300 no-underline'
            >
              Cart
            </a>

            <a
              href="/wishlist"
              className='hover:text-cyan-400 transition duration-300 no-underline'
            >
              Wishlist
            </a>

          </div>
        </div>

        
        <div>
          <h2 className='text-2xl font-semibold mb-5'>
            Contact
          </h2>

          <div className='flex flex-col gap-3 text-slate-300'>

            <p>Email: support@maxcart.com</p>

            <p>Phone: +91 98765 43210</p>

            <p>Location: Kerala, India</p>

          </div>
        </div>

      </div>

     
      <div className='border-t border-slate-700 py-5 text-center text-slate-400 text-sm'>

        © 2026 Max Cart. All Rights Reserved.

      </div>

    </footer>
  )
}