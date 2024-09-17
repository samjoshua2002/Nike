import React from 'react'
import Hero from './sections/Hero'
import CustomerReviews from './sections/CustomerReviews'
import Footer from './sections/Footer'

import Services from './sections/Services'
import SpecialOffer from './sections/SpecialOffer'
import Subscribe from './sections/Subscribe'
import SuperQuality from './sections/SuperQuality'
import Nav from './Components/Nav'
import PopularProducts from './sections/PopularProducts'
function App() {
  return (
    <main className='relative'>
      <Nav/>
      <section id='home' className=' xl:padding-l wide:padding-r padding-b '>
        <Hero/>
      </section>
      <section className='padding '>
        <PopularProducts/>
       
      </section>
      <section className='padding '>
        <SuperQuality/>
      </section>
      <section className=' padding-x py-10'>
        <Services/>
      </section>
      <section className= '  padding'>
        <SpecialOffer/>
      </section>
      
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>
      <section className=' bg-black padding-x padding-t  pb-8'>
      <Footer/>
      </section>
    </main>
  )
}

export default App