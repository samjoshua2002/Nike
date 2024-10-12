'use client'

import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Component() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim() === '') {
      setErrorMsg("Email field can't be empty")
    } else if (password.trim() === '') {
      setErrorMsg("Password field can't be empty")
    } else if (password.length < 8) {
      setErrorMsg("Password should be at least 8 characters")
    } else {
      setErrorMsg('')
      console.log("Email:", email)
      console.log("Password:", password)

      localStorage.setItem("userEmail", email)

      toast("Login Successful!")

      setTimeout(() => navigate('/Nike'), 2000)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <svg className="mx-auto h-12 w-auto transition-transform duration-300 ease-in-out transform hover:scale-110" viewBox="0 0 192.756 192.756">
            <path fill="#ffffff" d="M0 0h192.756v192.756H0V0z"/>
            <path d="M42.741 71.477c-9.881 11.604-19.355 25.994-19.45 36.75-.037 4.047 1.255 7.58 4.354 10.256 4.46 3.854 9.374 5.213 14.264 5.221 7.146.01 14.242-2.873 19.798-5.096 9.357-3.742 112.79-48.659 112.79-48.659.998-.5.811-1.123-.438-.812-.504.126-112.603 30.505-112.603 30.505a24.771 24.771 0 0 1-6.524.934c-8.615.051-16.281-4.731-16.219-14.808.024-3.943 1.231-8.698 4.028-14.291z"/>
          </svg>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-3 transition-all duration-300 ease-in-out"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-3 transition-all duration-300 ease-in-out"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {errorMsg && <p className="text-red-500 text-xs italic text-center">{errorMsg}</p>}

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-black py-2 px-3 text-sm font-semibold text-white hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 space-y-4 sm:space-y-0">
          <div className="text-sm">
            <a href="#" className="font-medium text-black hover:text-gray-800 transition-colors duration-300 ease-in-out">
              Forgot your password?
            </a>
          </div>
          <div className="text-sm">
            <a href="#" className="font-medium text-black hover:text-gray-800 transition-colors duration-300 ease-in-out">
              Not a member? Join Us
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
