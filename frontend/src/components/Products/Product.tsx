import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from '../Rating';
import Quantity from '../Quantity';


function Product() {
  const { _id } = useParams();
  const [product, setProduct] = useState<any>('');
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate()

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

  const addToCart = async () => {
    try {
      // Make a POST request to add the product to the cart
      const response = await fetch(`https://minimalist-backend.onrender.com/api/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productId: _id,
          quantity: quantity // Pass the selected quantity to the request body
        })
      });
      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }
      // Handle success response if needed
    } catch (error) {
      console.error('Error adding product to cart:', error);
      // Handle error
    }
  };

  const buyNow = async () => {
    try {
      // Make a POST request to add the product to the cart
      const response = await fetch(`https://minimalist-backend.onrender.com/api/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productId: _id,
          quantity: quantity // Pass the selected quantity to the request body
        })
      });
      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }

      const cartDetails = await response.json()
      const cartId = await cartDetails._id
      console.log(cartId)
      
      return navigate(`/cart/${cartId}`);
      
    } catch (error) {
      console.error('Error adding product to cart:', error);
      // Handle error
    }
  };

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
        <Quantity initialValue={quantity} onQuantityChange={setQuantity} /> {/* Pass quantity state and setter function */}

        
        <br/>
        <div className='py-5 '>
            <button onClick={addToCart} className='w-full border border-gray-400 text-xl font-semibold p-5 my-4'>Add to Cart</button>
            
            <button onClick={buyNow} className='w-full bg-black text-white font-semibold text-xl font-semibold p-5 my-4'>Buy It Now</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
