import ShopOptions from "./ShopOptions"

function Shop() {
  return (
    <div className="grid h-400px w-full ">
        <div className="p-8">
        <h1 className="font-semibold text-[40px]">Shop by concerns</h1>
        <p className="text-[20px] mb-[40px]">Find right products & routines for your skin needs</p>
        </div>
        <ShopOptions/>
    </div>
  )
}

export default Shop