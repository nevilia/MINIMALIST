import ProductsHeader from "./ProductsHeader"
import ProductCard from "./ProductCard"

const DummyData = [
    {
    image: 'https://beminimalist.co/cdn/shop/products/AlphaArbutin2_1200-1-min_900x.png?v=1646543550',
    title: 'Alpha Arbutin 02%',
    stars: 4,
    reviews: 1538,
    price: 539
},
    {
    image: 'https://beminimalist.co/cdn/shop/products/SalicylicAcid2_1200-1-min_900x.png?v=1646458899',
    title: 'Salicylic Acid 02%',
    stars: 4,
    reviews: 1295,
    price: 545
},
    {
    image: 'https://beminimalist.co/cdn/shop/products/VitaminC10_1200-1-min_900x.png?v=1646543848',
    title: 'Vitamin C 10%',
    stars: 4,
    reviews: 1295,
    price: 545
},
]

function Products() {
  return (
    <div className="m-10">
      <ProductsHeader />
      <div className="flex flex-wrap m-10">
      {DummyData.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          stars={product.stars}
          reviews={product.reviews}
          price={product.price}
        />
      ))}
    </div>
    </div>
  )
}

export default Products