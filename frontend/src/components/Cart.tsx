import Quantity from "./Quantity"

const product = [{
    name: "Salicylic Acid + LHA 02% Face Cleanser",
    price: 295,
    image: "https://beminimalist.co/cdn/shop/products/18-min_180x.png?v=1679317872"
}, {
    name: "Vitamin K + Retinal 01% Eye Cream",
    price: 495,
    image: "https://beminimalist.co/cdn/shop/files/EyeCream1_1728x.png?v=1697788088"
}]

type Props = {}

function Cart({}: Props) {
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
                    {product.map((item, index) => (
                        <tr className="h-[150px] " key={index}>
                            <td className="flex gap-6 px-4 py-2 text-xl font-semibold">
                                <img className="max-h-[150px] max-w-[120px] " src={item.image} alt="" />
                                <span className="pt-3">{item.name}</span>
                                
                            </td>
                            {/* Fix Count. min should be 1 here by default, if 0 then remove */}
                            <td className="  px-4 py-2"><Quantity/> </td> 
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