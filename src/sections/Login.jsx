import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Component() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === '') {
      setErrorMsg("Email field can't be empty");
    } else if (password.trim() === '') {
      setErrorMsg("Password field can't be empty");
    } else if (password.length < 8) {
      setErrorMsg("Password should be at least 8 characters");
    } else {
      setErrorMsg('');
      console.log("Email:", email);
      console.log("Password:", password);

      localStorage.setItem("userEmail", email);

      toast("Login Successful!");

      setTimeout(() => navigate('/Nike'), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-6 text-center">
            <svg className="mx-auto h-12 w-auto" viewBox="0 0 192.756 192.756">
              <path fill="#ffffff" d="M0 0h192.756v192.756H0V0z"/>
              <path d="M42.741 71.477c-9.881 11.604-19.355 25.994-19.45 36.75-.037 4.047 1.255 7.58 4.354 10.256 4.46 3.854 9.374 5.213 14.264 5.221 7.146.01 14.242-2.873 19.798-5.096 9.357-3.742 112.79-48.659 112.79-48.659.998-.5.811-1.123-.438-.812-.504.126-112.603 30.505-112.603 30.505a24.771 24.771 0 0 1-6.524.934c-8.615.051-16.281-4.731-16.219-14.808.024-3.943 1.231-8.698 4.028-14.291z"/>
            </svg>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMsg && <p className="text-red-500 text-xs italic mb-4">{errorMsg}</p>}
          <div className="flex items-center justify-between">
            <button
              className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              SIGN IN
            </button>
          </div>
          <div className="text-center mt-6">
            <a className="inline-block align-baseline font-bold text-sm text-black hover:text-gray-800" href="#">
              Forgot Password?
            </a>
          </div>
          <div className="text-center mt-4">
            <span className="text-gray-600 text-sm">Not a Member? </span>
            <a className="inline-block align-baseline font-bold text-sm text-black hover:text-gray-800" href="#">
              Join Us.
            </a>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
