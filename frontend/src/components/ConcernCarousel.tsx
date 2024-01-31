import ConcernCard from "./ConcernCard"
import acne from '../assets/acne.jpg';
import antiaging from '../assets/antiaging.jpg';
import brightening from '../assets/brightening.jpg';
// import pigmentation from '../assets/pigmentation.jpg';

// This is the Product Carousel with 4 Cards
function ConcernCarousel() {
  return (
    <div className="flex overflow-hidden w-full h-[300px] " >
      <ConcernCard bgImg={acne} title="Acne" />
      <ConcernCard bgImg={antiaging} title="Anti-Aging" />
      <ConcernCard bgImg={brightening} title="Brightening" />
      {/* <ConcernCard bgImg={pigmentation} title="Pigmentation" /> */}
        {/* <ConcernCard/> */}
    </div>
  )
}

export default ConcernCarousel