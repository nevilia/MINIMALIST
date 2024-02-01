import ConcernCarousel from "./ConcernCarousel"
import bgimage from '../../../assets/Shop-Option-Background.jpg'
// This part is the Image on background and a Carousel of Products by Concern
function ShopOptions() {
  return (
    <div className="relative">
      <div className="relative">
        <img className="min-w-[300px] max-w-[1700px] w-full z-[0] px-[40px] " src={bgimage} alt="" />
        <div className="absolute z-1 p-10 top-1/3 sm:top-2/3 w-full h-full ">
          <ConcernCarousel/>
        </div>
    </div>
      </div>
  )
}

export default ShopOptions