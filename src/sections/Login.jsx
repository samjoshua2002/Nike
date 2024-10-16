// src/components/Login.jsx
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function Component() {
  const [theme, setTheme] = useState('light');
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`min-h-screen flex ${theme}`}>
      <div className="flex-1 hidden lg:block">
        <img
          src="https://i.pinimg.com/736x/00/57/13/005713d031d6f755838b51d3bd9ef88c.jpg"
          alt="Nike Sneakers"
          className="h-screen w-full object-cover" // Set height to full screen
        />
      </div>
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200 dark:from-gray-900 dark:to-black p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <svg className="w-12 h-12 text-orange-500" viewBox="0 0 192.756 192.756">
              <path
                fill="currentColor"
                d="M42.741 71.477c-9.881 11.604-19.355 25.994-19.45 36.75-.037 4.047 1.255 7.58 4.354 10.256 4.46 3.854 9.374 5.213 14.264 5.221 7.146.01 14.242-2.873 19.798-5.096 9.357-3.742 112.79-48.659 112.79-48.659.998-.5.811-1.123-.438-.812-.504.126-112.603 30.505-112.603 30.505a24.771 24.771 0 0 1-6.524.934c-8.615.051-16.281-4.731-16.219-14.808.024-3.943 1.231-8.698 4.028-14.291z"
              />
            </svg>
            <button
              className="border border-gray-300 rounded-full p-2"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">Welcome to Nike</h2>
          <p className="text-center mb-4">Sign in to your account or create a new one</p>

          {/* Tabs for Sign In and Sign Up */}
          <div className="tabs w-full mb-4">
            <div className="grid w-full grid-cols-2">
              <button
                className={`w-full py-2 ${isSignIn ? 'border-b-2 border-orange-500' : ''}`}
                onClick={() => setIsSignIn(true)}
              >
                Sign In
              </button>
              <button
                className={`w-full py-2 ${!isSignIn ? 'border-b-2 border-orange-500' : ''}`}
                onClick={() => setIsSignIn(false)}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Conditional Rendering */}
          {isSignIn ? <SignIn /> : <SignUp />}
        </div>
      </div>
    </div>
  );
}
