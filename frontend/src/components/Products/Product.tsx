import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { Props } from './ProductCard';

// let product = {
//     "_id": "65be2dc4024a7ce5a9ded68b",
//     "name": "Alpha Arbutin 02%",
//     "rating": 4,
//     "price": 549,
//     "reviews": 1538,
//     "type": "skin",
//     "images": [
//     "https://beminimalist.co/cdn/shop/products/AlphaArbutin2_1200-1-min_900x.png?v=1646543550",
//     "https://beminimalist.co/cdn/shop/products/arbutin-2-serum-1200--2min-1645936951710_900x.webp?v=1651474651"
//     ],
//     "coverPhoto": "https://beminimalist.co/cdn/shop/products/AlphaArbutin2_1200-1-min_900x.png?v=1646543550",
//     "createdAt": "2024-02-03T12:12:52.481Z",
//     "updatedAt": "2024-02-03T12:12:52.481Z",
//     "__v": 0
//     }

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
    <div className='flex flex-wrap m-7 p-10 '>
      <div className='p-5  sm:w-full md:w-1/2'>
        <img className='' src={product.coverPhoto} alt={product.name} />
      </div>
      <div className='p-5 md:w-1/2'>
        <h2 className='text-4xl font-bold pb-8'>{product.name}</h2>
        <p className='pb-10 font-semibold'>Rating: {product.rating} Reviews: {product.reviews}</p>
        
        <h4 className='font-semibold text-gray-800 text-xl pb-10'> Tag Line </h4>
        <p className='pb-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odit sint maiores debitis repellat iure laboriosam veritatis nisi quo velit. Voluptatum nobis sint dolorem voluptas nihil nostrum cumque ipsam magni ut qui labore veritatis ducimus optio, fugiat cum illum! 
        </p>
        <p className='text-2xl pb-10'>Price: ₹{product.price}</p>
        <hr className=''></hr>

        <h4 className='font-semibold py-5'>Quantity</h4>
        Counter Box Component 
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
