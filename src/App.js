import React from 'react'


function App() {
  return (
    <div className='p-5'>
      <h1 className='text-center text-green-400'>Hello World</h1>
      <div className='w-full h-10 bg-gray-100 my-4 rounded-md shadow-lg p-2 '>
        <p className='text-center font-mono text-sm  font-extrabold'> A div</p>
      </div>

      {/* layout  */}
      <div className='w-10 h-10 bg-red-600 fixed top-0'></div>
      <div className='flex justify-between'>

      <div className='w-10 h-10 rounded-full bg-blue-700'></div>
      <div className='w-10 h-10 rounded-full bg-blue-700'></div>
      <div className='w-10 h-10 rounded-full bg-blue-700'></div>

      </div>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 mt-2 gap-x-2 gap-y-4'>
        <div className='  h-48 rounded-md bg-gray-300 '></div>
        <div className='  h-48 rounded-md bg-gray-300 '></div>
        <div className='  h-48 rounded-md bg-gray-300 '></div>
        <div className='  h-48 rounded-md bg-gray-300 '></div>
        <div className='  h-48 rounded-md bg-gray-300 '></div>
        <div className='  h-48 rounded-md bg-gray-300 '></div>
      </div>
      <button className='my-3 bg-black text-white font-bold font-mono p-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-orange-500 active:bg-yellow-500'>
        Click me
      </button>
      <ul className='font-extrabold text-sm space-y-2 border-l-2 border-black'>
        <li className='first:bg-gray-200 p-3'>Item 1</li>
        <li className='first:bg-yellow-200 p-3 odd: bg-gray-200 even:bg-gray-100'>Item 2</li>
        <li className='first:bg-yellow-200 p-3 odd: bg-gray-200 even:bg-gray-100'>Item 3</li>
        <li className='first:bg-yellow-200 p-3 odd: bg-gray-200 even:bg-gray-100'>Item 4</li>
        <li className='first:bg-yellow-200 p-3 odd: bg-gray-200 even:bg-gray-100'>Item 5</li>
      </ul>

      <div className='shadow-xl m-10 rounded-lg bg-white px-6 py-8 '>
        <h3 className='text-base font-medium text-slate-900 tracking-tighter'>This is text element</h3>
        <p className='mt-2 text-sm text-slate-500'>This is an even longer p tag element</p>
        <button className='Google-Button'>Toggle Dark Mode</button>
      </div>
      <div className='m-10 shadow-xl bg-gray-900 rounded-md px-6 py-8'>
        <h3 className='text-base text-white  font-medium tracking-tighter '>
          This is text element

        </h3>
        <p className='text-slate-500 text-sm mt-2'>This is an event longer p tag element</p>
        <button className='Google-Button'>
          Toggle Dark Mode
        </button>
      </div>
     
      
    </div>
  )
}

export default App