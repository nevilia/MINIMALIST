import { Link } from 'react-router-dom'
function HeroCard() {
    return (
        <div className="p-6 ">
            <h4 className="text-gray-800 font-semibold text-2xl">New Launch</h4>
            <h1 className="text-gray-800 font-bold text-[40px] mt-4 mb-10">Vitamin K + Retinal 01% Eye Cream</h1>
            <p className="text-[25px] mb-10">
                Introducing Our Exclusive Eyecare Range, with Eye Cream: Formulated to reduce Dark Circles, Puffiness & Fine Lines.
            </p>
            <Link to="/products">
                <button className="bg-black text-white text-[18px] font-semibold px-[70px] py-[20px]">
                    Explore Products
                </button>
            </Link>
        </div>

    )
}

export default HeroCard

