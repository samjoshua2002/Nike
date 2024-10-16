// src/components/SignUp.jsx
import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const SignUp = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    const userData = {
      name,
      phone,
      email,
      password,
    };
    localStorage.setItem('user', JSON.stringify(userData));
    
    // Show success toast notification
    toast.success('Sign Up Successful!'); // Replace alert with toast
    // Clear the fields after sign up
    setName('');
    setPhone('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <ToastContainer /> {/* Include ToastContainer here */}
      <form onSubmit={handleSignUp}>
        <div className="grid gap-2">
          <label htmlFor="name" className="font-medium">Name</label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className="border-2 border-orange-500 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-transparent"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2 mt-4">
          <label htmlFor="phone" className="font-medium">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="123-456-7890"
            className="border-2 border-orange-500 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-transparent"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2 mt-4">
          <label htmlFor="signup-email" className="font-medium">Email</label>
          <input
            id="signup-email"
            type="email"
            placeholder="m@example.com"
            className="border-2 border-orange-500 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2 mt-4">
          <label htmlFor="signup-password" className="font-medium">Password</label>
          <input
            id="signup-password"
            type="password"
            className="border-2 border-orange-500 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded">
          <UserPlus className="mr-2 h-4 w-4 inline-block" /> Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
