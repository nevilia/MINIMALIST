import { useState, useEffect } from 'react'
import ProductsHeader from "./ProductsHeader"
import ProductCard, { Props } from "./ProductCard"
import { Oval } from 'react-loader-spinner'

function Products() {
  const [products, setProducts] = useState<Props[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch('https://minimalist-backend.onrender.com/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])
  return (
    <div className="m-10">
      <ProductsHeader />
      <hr />

      {loading ? <Oval
        visible={true}
        height="50"
        width="50"
        color="#A9A9A9"
        ariaLabel="oval-loading"
        wrapperStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        wrapperClass=""
      /> :
        <div className="flex flex-wrap sm:m-10">
          {products.map((product) => (
            <ProductCard
              _id={product._id}
              key={product._id}
              coverPhoto={product.coverPhoto}
              name={product.name}
              rating={product.rating}
              reviews={product.reviews}
              price={product.price}
            />
          ))}
        </div>
      }
    </div>
  )
}

export default Products