import { shoe8 } from "../assets/images";
import { arrowRight } from '../assets/icons/index';

const SuperQuality = () => {
  const Button = ({ label }) => {
    return (
      <button className='flex justify-center items-center gap-2 px-7 py-4 bg-coral-red font-montserrat text-lg rounded-full text-white border-coral-red'>
        {label}
        <img className='ml-2' src={arrowRight} alt="arrow right icon" width={24} height={24} />
      </button>
    );
  };

  return (
    <section
      id='about-us'
      className='grid grid-cols-1  lg:grid-cols-2 gap-10 w-full max-container'>
      
      <div className='flex flex-col mt-7'>
        <h2 className='font-palanquin capitalize text-4xl font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

     
      <div className=' justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          className='object-contain w-[570px] h-[522px]' />
      </div>
    </section>
  );
};

export default SuperQuality;
