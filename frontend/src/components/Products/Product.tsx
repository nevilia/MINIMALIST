import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Rating from '../Rating';
import Quantity from '../Quantity';
import axiosInstance from '../../../axiosInstance'
import { getUserIdFromToken } from '../../../utils';
import { Oval } from 'react-loader-spinner';


function Product() {
  const { _id } = useParams();
  const [product, setProduct] = useState<any>('');
  const [quantity, setQuantity] = useState(1);
  
  const [userId, setUserId] = useState<string>('');

  // extract the userId from token from Headers by using utils
  useEffect(() => {
    const userIdFromToken = getUserIdFromToken();
    if (userIdFromToken) {
      setUserId(userIdFromToken);
    }
  }, []); 

// console.log("Current user ID:", userId);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/api/products/${_id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    if (_id) {
      fetchProduct();
    }
  }, [_id]);

  if (!product) {
    return <div><Oval
    visible={true}
    height="50"
    width="50"
    color="#A9A9A9"
    ariaLabel="oval-loading"
    wrapperStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    wrapperClass=""
  /></div>;
  }

  const addToCart = async () => {
    try {
      // Check if the product is already in the cart
      const cartResponse = await axiosInstance.get(`/api/cart/${userId}`);
      const cart = cartResponse.data;
  
      // Find the index of the product in the cart
      const itemIndex = cart.items.findIndex((item:any) => item.productId === _id);
  
      // Calculate the total quantity of the product in the cart
      let totalQuantity = quantity;
      if (itemIndex !== -1) {
          totalQuantity += cart.items[itemIndex].quantity;
      }

      // Check if the total quantity exceeds 5
      if (totalQuantity > 5) {
          alert('Not more than 5 allowed');
          return;
      }
      
      if (itemIndex !== -1) {
        // If the product is already in the cart, update the quantity
        const updatedQuantity = cart.items[itemIndex].quantity + quantity;
        await axiosInstance.put(`/api/cart/${userId}/items/${cart.items[itemIndex]._id}`, {
          quantity: updatedQuantity,
        });
      } else {
        // If the product is not in the cart, add it
        await axiosInstance.post(`/api/cart/${userId}/add`, {
          productId: _id,
          quantity: quantity,
        });
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
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
            
        </div>
      </div>
    </div>
  );
}

export default Product;
