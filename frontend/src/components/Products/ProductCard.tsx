interface Props {
    image: string
    title: string
    stars: number
    reviews: number
    price: number
}

function ProductCard({image, title, stars, reviews, price,}: Props) {
  return (
    
    <div className="justify-center text-center items-center p-2 w-1/2 lg:w-1/3 h-2/3">
        <img src={image} alt={title} className="" />
        <h1 className=" font-semibold ">{title}</h1>
        {/* stars component taking stars as props */}
        <span>{stars}</span>
        <p>Reviews {reviews} </p>
        <p>Price {price} </p>
    </div>
  )
}

export default ProductCard
export type {Props}