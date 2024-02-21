import { useEffect, useState } from "react"
import Quantity from "./Quantity"

type Prod = { name: string; price: number; image: string; quantity: number }
type CartItem = {productId: string; quantity: number; itemId: string}

function Cart() {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [productDetails, setProductDetails] = useState<Prod[]>([]);
    const cartId = "65ce4cfd4c6d2b010aa2b0c3" // make it come from url. figure it out

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await fetch(`https://minimalist-backend.onrender.com/api/cart/${cartId}`)
                const data = await res.json()
                const items = await data.items
    
                setCartItems(items) // Update cartItems first
    
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
                                <td className="  px-4 py-2"><Quantity initialValue={item.quantity} onQuantityChange={()=>{}} /> </td>
                                <td className="  px-4 py-2">{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Cart