import ConcernCard from "./ConcernCard"
// This is the Product Carousel with 4 Cards
function ConcernCarousel() {
  return (
    <div className="flex overflow-hidden w-full h-[300px]" >
        <ConcernCard/>
        <ConcernCard/>
        <ConcernCard/>
        {/* <ConcernCard/> */}
    </div>
  )
}

export default ConcernCarousel