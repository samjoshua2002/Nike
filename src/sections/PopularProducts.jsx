import { shoe7, shoe6, shoe5, shoe4 } from "../assets/images";
import { star } from "../assets/icons";

const PopularProducts = () => {
  const PopularProductCard = ({ imgURL, name, price }) => {
    return (
      <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt={name} className='w-[282px] h-[282px]' />
        <div className='mt-8 flex justify-start gap-2.5'>
          <img src={star} alt='rating icon' width={24} height={24} />
         
          <p className='font-montserrat text-xl leading-normal text-slate-gray'>
            (4.5)
          </p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
          {name}
        </h3>
        <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
          {price}
        </p>
      </div>
    );
  };

  const products = [
    {
      imgURL: shoe4,
      name: "Nike Air Jordan-01",
      price: "$200.20",
    },
    {
      imgURL: shoe5,
      name: "Nike Air Jordan-10",
      price: "$210.20",
    },
    {
      imgURL: shoe6,
      name: "Nike Air Jordan-100",
      price: "$220.20",
    },
    {
      imgURL: shoe7,
      name: "Nike Air Jordan-001",
      price: "$230.20",
    },
  ];

  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'> Popular </span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
