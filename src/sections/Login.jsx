import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import collectionBackground from '../assets/images/collection-background.svg';
import bigShoeImage from '../assets/images/big-shoe2.png';
import { arrowRight } from "../assets/icons"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Button = ({ label, iconurl, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className='flex justify-center items-center gap-2 px-7 py-4 bg-coral-red font-montserrat text-lg rounded-full text-white border-coral-red'
    >
      {label}
      {iconurl && <img className='rounded-full ml-2' src={iconurl} alt="arrow right icon w-5 h-5" />}
    </button>
  );
};

const Login = () => {
  const [inputValue, setInputValue] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [values, setValues] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (inputValue.trim() === '') {
      setErrMsg("Username field can't be empty");
    } else if (pwd.trim() === '') {
      setErrMsg("Password field can't be empty");
    } else if (pwd.length < 8) {
      setErrMsg("Password should be greater than 8 characters");
    } else {
      setErrMsg('');
      setValues(inputValue);
      console.log("Username:", inputValue);
      console.log("Password:", pwd);

      
      localStorage.setItem("key", inputValue);

      toast("Wow so easy!");

      setTimeout(() => navigate('/Nike'), 5000);

      
    }
  };



 

  const clear = () => {
    setInputValue('');
    setPwd('');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: `url(${collectionBackground})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-0"></div>

      <div className="relative z-10 flex w-4/5 max-w-6xl h-[80vh] bg-white rounded-lg shadow-lg overflow-hidden">

        
        <div className="w-1/2 bg-gray-100 flex items-center justify-center " >
          <img
            src={bigShoeImage}
            alt="Big Shoe"
            className="object-contain w-full h-full"
          />
        </div>

        
        <div className="w-1/2 flex flex-col justify-center p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
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
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
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
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>

            <div className='text-center mt-4 flex gap-4 justify-center'>
              <Button
                label="Submit"
                iconurl={arrowRight}
                type="submit"
              />
              
              <Button
                label="Clear"
                onClick={clear}
                type="button"
              />
            </div>

            <div className='text-center mt-2' style={{ color: '#ff4d4d' }}>
              {errMsg ? <p>{errMsg}</p> : null}
            </div>
      
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
