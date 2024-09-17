import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './sections/Hero';
import CustomerReviews from './sections/CustomerReviews';
import Footer from './sections/Footer';
import Services from './sections/Services';
import SpecialOffer from './sections/SpecialOffer';
import Subscribe from './sections/Subscribe';
import SuperQuality from './sections/SuperQuality';
import Nav from './Components/Nav';
import PopularProducts from './sections/PopularProducts';
import Login from './sections/Login';

function LandingPage() {
  return (
    <main className="relative">
      <Nav />
      <section id="home" className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login />} />
       
        <Route path="/Nike" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
