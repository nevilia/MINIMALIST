import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Rating from '../Rating';
import Quantity from '../Quantity';

function Product() {
  const { _id } = useParams();
  const [product, setProduct] = useState<any>('');

  useEffect(() => {
    if (_id) {
      fetch(`https://minimalist-backend.onrender.com/api/products/${_id}`)
        .then(response => response.json())
        .then(data => {
          setProduct(data)
        })
        .catch(error => console.error('Error fetching product details:', error));
    }
  }, [_id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-wrap sm:m-5 p-8 '>
      <div className='p-5  sm:w-full md:w-1/2'>
        <img className='' src={product.coverPhoto} alt={product.name} />
      </div>
      <div className='p-5 md:w-1/2'>
        <h2 className='text-4xl font-bold pb-8'>{product.name} </h2>
        <Rating rating={product.rating} reviews={product.reviews} />

        
        <h4 className='font-semibold text-gray-800 text-xl pb-10'> Tag Line </h4>
        <p className='pb-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odit sint maiores debitis repellat iure laboriosam veritatis nisi quo velit. Voluptatum nobis sint dolorem voluptas nihil nostrum cumque ipsam magni ut qui labore veritatis ducimus optio, fugiat cum illum! 
        </p>
        <p className='text-2xl pb-10'>Price: ₹{product.price}</p>
        <hr className=''></hr>

        <h4 className='font-semibold py-5'>Quantity</h4>
        <Quantity/> 
        <br/>
        <div className='py-5 '>
            <button className='w-full border border-gray-400 text-xl font-semibold p-5 my-4'>Add to Cart</button>
            <button className='w-full bg-black text-white font-semibold text-xl font-semibold p-5 my-4'>Buy It Now</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
