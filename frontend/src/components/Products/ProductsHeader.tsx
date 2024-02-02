type Props = {}

function ProductsHeader({}: Props) {
  return (
    <div className="pt-[50px] pb-[80px] px-[80px] items-center shadow m-10">
        <h1 className="text-center text-3xl font-bold ">
            All Products
        </h1>
        <p className="text-center pb-[80px] pt-[50px]">
            Shop our efficacious, transparent, and research-backed range of skincare & haircare products. Each product is formulated to target your specific skin or hair concerns.
        </p>
    </div>
  )
}

export default ProductsHeader