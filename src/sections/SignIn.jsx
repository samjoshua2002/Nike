// src/components/SignIn.jsx
import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignIn = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      if (email === storedUser.email && password === storedUser.password) {
        toast.success('Sign In Successful!'); // Show success toast notification
        
        // Wait for 3 seconds before navigating
        setTimeout(() => {
          navigate('/Nike'); // Navigate to /Nike after the delay
        }, 3000);
      } else {
        toast.error('Incorrect email or password'); // Use toast for error message
      }
    } else {
      toast.error('No user found. Please sign up first.'); // Use toast for no user found
    }
  };

  return (
    <>
      <form onSubmit={handleSignIn}>
        <div className="grid gap-2">
          <label htmlFor="signIn-email" className="font-medium">Email</label>
          <input
            id="signIn-email"
            type="email"
            placeholder="m@example.com"
            className="border-2 border-orange-500 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2 mt-4">
          <label htmlFor="signIn-password" className="font-medium">Password</label>
          <input
            id="signIn-password"
            type="password"
            className="border-2 border-orange-500 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded">
          <LogIn className="mr-2 h-4 w-4 inline-block" /> Sign In
        </button>
      </form>
      <ToastContainer /> {/* Add ToastContainer to render the toast notifications */}
    </>
  );
};

export default SignIn;
