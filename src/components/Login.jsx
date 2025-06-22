import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data 

    const message = checkValidData(email.current.value, password.current.value, name.current.value);

    setErrorMessage(message);

    if (message) return;
    // Sign In Sign Up Logic
    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });


    } else {
      // Sign In Logic


    }


  };

  const toggleSignUpFrom = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className=''>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg" alt="main page" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black/75 my-36 mx-auto right-0 left-0 text-white '>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sing Up"}</h1>
        {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800' />}
        <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800' />
        <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-800' />
        <p className='text-red-500 font-bold tex-lg py-2'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignUpFrom}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a registered? Sign In Now"}</p>
      </form>

    </div>

  )
}

export default Login
