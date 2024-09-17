import React from 'react';
import { truckFast, shieldTick, support } from '../assets/icons';

const Services = () => {
  const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
      <div className='rounded-[20px] shadow-3xl px-10 py-16'>
        <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
          <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
          {label}
        </h3>
        <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
          {subtext}
        </p>
      </div>
    );
  };

  const services = [
    {
      imgURL: truckFast,
      label: 'Free shipping',
      subtext: 'Enjoy seamless shopping with our complimentary shipping service.',
    },
    {
      imgURL: shieldTick,
      label: 'Secure Payment',
      subtext: 'Experience worry-free transactions with our secure payment options.',
    },
    {
      imgURL: support,
      label: 'Love to help you',
      subtext: 'Our dedicated team is here to assist you every step of the way.',
    },
  ];

  return (
    <section className='max-container'>
      {/* Applying the grid layout */}
      <div className='grid lg:grid-cols-3  grid-cols-1 gap-9'>
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
