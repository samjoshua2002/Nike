import React from 'react'
import {headerLogo} from '../assets/images/index';
import {navLinks} from '../constants/index';
import {hamburger} from '../assets/icons';

const Nav = () => {
  return (
//    <header className='padding-x py-8 absolute z-10  w-full'>
//     <nav className=' flex justify-between items-center max-container' >
//         <a href="/">
//         <img src={headerLogo} alt="Logo" width={129} height={29}/>
//         </a>
//         <ul className='flex flex-1   gap-16 justify-center items-center max-lg:hidden'>
//             {navLinks.map((item)=>(
//                 <li key={item.label}>
//                     <a href={item.href} className='font-montserrat leading-normal text-slate-gray '>
//                         {item.label}
//                     </a>
//                 </li>


//             ))}
//         </ul>
//         <div className=' hidden max-lg:block'>
//             <img src={hamburger} alt=" hamburger " width={25} height={25}/>
//         </div>
        
//     </nav>
    
//    </header>
<header id='top' className=' absolute w-full padding-x py-6'>
    <nav className=' justify-between items-center flex max-container'>
        <img src={headerLogo} alt="img"/>
        <ul className='flex flex-auto gap-20 items-center justify-center max-lg:hidden'>
            {navLinks.map((items)=>(
                <li key={items.label}><a href={items.href}>{items.label}</a></li>
            ))}
            
        </ul>
        <div className='hidden max-lg:block'>
            <img src={hamburger} width={20} height={20} alt="" />
        </div>
    </nav>
</header>
       
  )
}

export default Nav