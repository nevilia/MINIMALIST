import { useState, useEffect } from 'react'
import ProductsHeader from "./ProductsHeader"
import ProductCard, {Props} from "./ProductCard"

function Products() {
  const [products, setProducts] = useState<Props[]>([])

  useEffect(() => {
    fetch('https://minimalist-backend.onrender.com/api/products')
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(err => console.error(err))
  }, [])
  return (
    <div className="m-10">
      <ProductsHeader />
      <hr />
      
      
      <div className="flex flex-wrap sm:m-10">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          coverPhoto={product.coverPhoto}
          name={product.name}
          rating={product.rating}
          reviews={product.reviews}
          price={product.price}
        />
      ))}
    </div>
    </div>
  )
}

export default Products