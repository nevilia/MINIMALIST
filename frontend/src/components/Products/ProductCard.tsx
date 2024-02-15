import { Link } from "react-router-dom"

interface Props {
  _id: string
  coverPhoto: string
  name: string
  rating: number
  reviews: number
  price: number
}

function ProductCard({ _id, coverPhoto, name, rating, reviews, price }: Props) {
  return (
    <div className="justify-center text-center items-center p-2 w-1/2 lg:w-1/3 h-2/3">
      <Link to={`/products/${_id}`}>
        <img src={coverPhoto} alt={name} />
        <h1 className="font-semibold">{name}</h1>
        {/* Rating component taking rating as props */}
        <span>{rating}</span>
        <p>Reviews {reviews}</p>
        <p>Price {price}</p>
      </Link>
    </div>
  );
}

export default ProductCard
export type { Props }