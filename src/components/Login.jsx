import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignUpFrom = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className=''>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg" alt="main page" />
      </div>
      <form className='w-3/12 absolute p-12 bg-black/75 my-36 mx-auto right-0 left-0 text-white '>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sing Up"}</h1>
        {!isSignInForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800' />}
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800' />
        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-800' />
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignUpFrom}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a registered? Sign In Now"}</p>
      </form>

    </div>

  )
}

export default Login
