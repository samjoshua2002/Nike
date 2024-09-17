import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import collectionBackground from 'F:/Github/Tailwind/website/src/assets/images/collection-background.svg';
import bigShoeImage from 'F:/Github/Tailwind/website/src/assets/images/big-shoe2.png';

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: `url(${collectionBackground})` }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Container for the image and the form */}
      <div className="relative z-10 flex w-4/5 max-w-6xl h-[80vh] bg-white rounded-lg shadow-lg overflow-hidden">

        {/* Left Side - Image */}
        <div className="w-1/2 bg-gray-100 flex items-center justify-center">
          <img
            src={bigShoeImage}
            alt="Big Shoe"
            className="object-contain w-full h-full"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 flex flex-col justify-center p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Login
          </h1>
          <form>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your username"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Login button that links to /Nike */}
            <Link to="/Nike">
              <button
                type="submit"
                className="w-full bg-coral-red text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Login and Go to Nike
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
