import React from 'react'

const Button = ({label,iconurl}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 bg-coral-red font-montserrat text-lg rounded-full text-white border-coral-red' >
        {label}
        <img className='rounded-full ml-2' src={iconurl} alt="arrow right icon w-5 h-5"/>
    </button>
  )
}

export default Button