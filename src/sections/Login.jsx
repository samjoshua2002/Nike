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

      {/* Login form */}
      <div className="relative z-10 w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>
        <form>
          <div className="mb-4">
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Redirect button using React Router's Link */}
          <Link to="/Nike">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login and Go to Nike
            </button>
          </Link>
        </form>
      </div>

      {/* Big shoe image for larger screens */}
      <div className="hidden lg:block absolute bottom-0 right-0 w-2/5 max-w-sm">
        <img src={bigShoeImage} alt="Big Shoe" className="object-contain" />
      </div>
    </div>
  );
};

export default Login;
