import ConcernCarousel from "./ConcernCarousel"
import bgimage from '../assets/Shop-Option-Background.jpg'
// This part is the Image on background and a Carousel of Products by Concern
function ShopOptions() {
  return (
    <div className="relative ">
        <img className="min-w-[300px] z-[-1] px-[40px]" src={bgimage} alt="" />
        <div className="absolute z-[1] p-10 top-10 left-10 w-full h-full ">

          <ConcernCarousel/>
        </div>
    </div>
  )
}

export default ShopOptions