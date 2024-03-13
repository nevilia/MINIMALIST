import { useEffect, useState } from "react"
import Quantity from "./Quantity"
import axiosInstance from "../../axiosInstance"
import { getUserIdFromToken } from "../../utils"

type Prod = { productId: string; name: string; price: number; image: string; quantity: number }
type CartItem = {productId: string; quantity: number; itemId: string}

function Cart() {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [productDetails, setProductDetails] = useState<Prod[]>([]);
    const [userId, setUserId] = useState<string>('');
    const [cartId, setCartId] = useState<string>('');
    const [isCartEmpty, setIsCartEmpty] = useState<boolean>(false);
    const [totalSum, setTotalSum] = useState<number>(0);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                // use utils to extract userId from token from headers
                const userId = getUserIdFromToken()
                setUserId(userId || '')
                
                const res = await axiosInstance.get(`/api/cart/${userId}`)
                // console.log(res.data._id)
                setCartId(res.data._id)
                const items = res.data.items || []; 
                const cartItems: CartItem[] = items.map((item: any) => ({
                    productId: item.productId,
                    quantity: item.quantity,
                    itemId: item._id 
                }));
    
                setCartItems(cartItems) 
                setIsCartEmpty(cartItems.length === 0);

                
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        }
    
        fetchCart();
    
    }, [isCartEmpty]);

    useEffect(() => {
        let sum = 0
                cartItems.forEach((item:any) => {
                    const product = productDetails.find((prod) => prod.productId === item.productId)
                    if(product){
                        sum += product.price * item.quantity
                    }
                    setTotalSum(sum);
                })
    
    }, [cartItems, productDetails])
    
    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const productDetailsPromises = cartItems.map(async (item: any) => {
                    const productId = item.productId
                    const productRes = await axiosInstance.get(`/api/products/${productId}`)
                    const productData = await productRes.data
                    return {
                        productId: productId,
                        name: productData.name,
                        price: productData.price,
                        image: productData.coverPhoto,
                        quantity: item.quantity
                    }
                });
    
                const productDetails = await Promise.all(productDetailsPromises);
                setProductDetails(productDetails);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        }
    
        if (cartItems.length > 0) {
            fetchProductDetails(); // Only fetch product details when cartItems change
        }
    
    }, [cartItems]);
    

    const cartChange = async (newQuantity: number, itemId: string) => {
        try {
            const response = await axiosInstance.put(`/api/cart/${userId}/items/${itemId}`, { quantity: newQuantity });
            if (response.status === 200) {
                if (newQuantity === 0) {
                        removeItem(itemId);
                } else {
                    const updatedCartItemDetails = cartItems.map(item => {
                        if (item.itemId === itemId) {
                            return { ...item, quantity: newQuantity };
                        }
                        return item;
                    });
                    setCartItems(updatedCartItemDetails);
                }
            } 
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    // Bug: if there's a single item in cart and remove or quantity is made 0, there's no render in the cart and hence it is still visible. but in the backend calls are being made correctly
    const removeItem = async (itemId: string) => {
        try {
            const response = await axiosInstance.delete(`/api/cart/${userId}/items/${itemId}`)
            if (response.status === 200) {
                const updatedCartItems = cartItems.filter(item => item.itemId !== itemId);
                setCartItems(updatedCartItems);
                // console.log(isCartEmpty)
                setIsCartEmpty(updatedCartItems.length === 0);
                // console.log(isCartEmpty)
            }
        } catch (error) {
            console.error('Error removing item:', error);
        }
    }
    
    const onClickHandle = async () => {
        try {
            // Create the order
            const orderResponse = await axiosInstance.post(`api/orders/${userId}`, {
                cartId: cartId,
                totalPrice: totalSum,
                paymentStatus: 'Paid'
            });
            console.log('Order Created', orderResponse.data);
    
            // If order creation was successful, clear the cart
                const authToken = localStorage.getItem('token');
                const clearCartResponse = await axiosInstance.delete(`/api/cart/${userId}/clear`, {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });
                console.log('Cart Cleared', clearCartResponse.data);
                // After clearing the cart, you may want to update the cartItems state accordingly
                setCartItems([]);
                setIsCartEmpty(true);

                window.location.href = `/user/${userId}`
            
        } catch (error) {
            console.error('Error creating order or clearing cart:', error);
        }
    };
    


    return (
        <div>
            <h1 className="text-5xl font-bold pt-7 pb-[30px] px-auto w-full text-center">Your Cart</h1>
            <div className=" p-1 sm:p-10 ">


                <table className="border-collapse w-full text-left">
                    <thead className=" border-b-2">
                        <tr className="">
                            <th className="font-normal text-xl text-gray-500  px-4 py-2">Product</th>
                            <th className="font-normal text-xl text-gray-500  px-4 py-2">Quantity</th>
                            <th className="font-normal text-xl text-gray-500  px-4 py-2">Price</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {productDetails.map((item, index) => (
                            

                            <tr className="h-[150px] " key={index}>
                                <td className="flex gap-3 md:gap-6 md:px-4 py-2 text-base sm:text-xl font-semibold">
                                    <img className="max-h-[150px] max-w-[120px] " src={item.image} alt="" />
                                    <span className="pt-3">{item.name}</span>

                                </td>
                                <td className=" text-center px-2 md:px-4 py-2"><Quantity initialValue={item.quantity} onQuantityChange={(newQuantity) => cartChange(newQuantity, cartItems[index].itemId)} /> 
                                    <a className='underline' onClick={() => removeItem(cartItems[index].itemId)}>Remove</a> 
                                </td>
                                <td className=" px-2 md:px-4 py-2">₹ {item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <hr/>
            <div className="flex flex-col p-10 justify-end">
                <p className="flex justify-end p-3 font-semibold text-[20px]">Total: ₹ {totalSum} </p>
                <button className="flex justify-center p-4 bg-black text-white" type="button" onClick={onClickHandle}>Proceed To Buy</button>
            </div>
        </div>
    )
}

export default Cart