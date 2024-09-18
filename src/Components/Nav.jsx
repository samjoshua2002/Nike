import React from 'react';
import { headerLogo } from '../assets/images/index';
import { navLinks } from '../constants/index';
import { RiAccountCircleFill } from 'react-icons/ri';
import { hamburger } from '../assets/icons';

const Nav = () => {
  // Correctly get the username from localStorage
  const username = localStorage.getItem("key"); // Retrieve the value stored in localStorage

  return (
    <header id="top" className="absolute w-full padding-x py-6">
      <nav className="justify-between items-center flex max-container">
        {/* Logo */}
        <img src={headerLogo} alt="logo" />

        {/* Navigation Links */}
        <ul className="flex flex-auto gap-20 items-center justify-center max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Username Greeting */}
        <div className="flex items-center gap-2">
          <h3 className="text-xl max-lg:hidden font-extrabold font-montserrat text-coral-red">Hello,</h3>
          <span className="text-xl font-extrabold text-black">{username}</span>
          <RiAccountCircleFill className="text-3xl text-black" />
        </div>

        {/* Hamburger Menu (visible on smaller screens) */}
        {/* <div className="hidden max-lg:block">
          <img src={hamburger} width={20} height={20} alt="hamburger menu" />
        </div> */}
      </nav>
    </header>
  );
};

export default Nav;
