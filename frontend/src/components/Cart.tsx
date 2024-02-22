import { useEffect, useState } from "react"
import Quantity from "./Quantity"
import { useParams } from "react-router-dom";

type Prod = { name: string; price: number; image: string; quantity: number }
type CartItem = {productId: string; quantity: number; itemId: string}

function Cart() {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [productDetails, setProductDetails] = useState<Prod[]>([]);
    // const cartId = "65ce4cfd4c6d2b010aa2b0c3" // make it come from url. figure it out
    const { cartId } = useParams<{ cartId: string }>()

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await fetch(`https://minimalist-backend.onrender.com/api/cart/${cartId}`)
                const data = await res.json()
                const items: CartItem[] = data.items.map((item: any) => ({
                    productId: item.productId,
                    quantity: item.quantity,
                    itemId: item._id 
                }));
    
                setCartItems(items) 
    
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        }
    
        fetchCart();
    
    }, []);
    
    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const productDetailsPromises = cartItems.map(async (item: any) => {
                    const productId = item.productId
                    const productRes = await fetch(`https://minimalist-backend.onrender.com/api/products/${productId}`);
                    const productData = await productRes.json()
                    return {
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
            const response = await fetch(`https://minimalist-backend.onrender.com/api/cart/${cartId}/items/${itemId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ quantity: newQuantity })
            });
    
            if (!response.ok) {
                throw new Error('Failed to update quantity');
            }
    
            // If the update is successful, update the local state
            const updatedCartItemDetails = cartItems.map(item => {
                if (item.itemId === itemId) {
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
            setCartItems(updatedCartItemDetails);
        } catch (error) {
            console.error('Error updating quantity:', error);
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
                                <td className="flex gap-6 px-4 py-2 text-xl font-semibold">
                                    <img className="max-h-[150px] max-w-[120px] " src={item.image} alt="" />
                                    <span className="pt-3">{item.name}</span>

                                </td>
                                {/* Fix Count. min should be 1 here by default, if 0 then remove */}
                                <td className="  px-4 py-2"><Quantity initialValue={item.quantity} onQuantityChange={(newQuantity) => cartChange(newQuantity, cartItems[index].itemId)} /> </td>
                                <td className="  px-4 py-2">₹ {item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <hr/>
            <div className="flex flex-col p-10 justify-end">
                <p className="flex justify-end p-3 font-semibold text-[20px]">Total: ₹ 1000 </p>
                <button className="flex justify-center p-4 bg-black text-white" type="submit" onSubmit={()=>{console.log('after submit')}}>Proceed To Buy</button>
            </div>
        </div>
    )
}

export default Cart