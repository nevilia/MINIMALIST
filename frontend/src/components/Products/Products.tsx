import { useState, useEffect } from 'react'
import ProductsHeader from "./ProductsHeader"
import ProductCard, { Props } from "./ProductCard"
import { Oval } from 'react-loader-spinner'
import axiosInstance from '../../../axiosInstance'

function Products() {
  const [products, setProducts] = useState<Props[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.get('/api/products');
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }


    fetchProducts()
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