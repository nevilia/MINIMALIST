interface Props {
  coverPhoto: string
  name: string
  rating: number
  reviews: number
  price: number
}

function ProductCard({ coverPhoto, name, rating, reviews, price, }: Props) {
  return (

    <div className="justify-center text-center items-center p-2 w-1/2 lg:w-1/3 h-2/3">
      <img src={coverPhoto} alt={name} className="" />
      <h1 className=" font-semibold ">{name}</h1>
      {/* rating component taking rating as props */}
      <span>{rating}</span>
      <p>Reviews {reviews} </p>
      <p>Price {price} </p>
    </div>
  )
}

export default ProductCard
export type { Props }