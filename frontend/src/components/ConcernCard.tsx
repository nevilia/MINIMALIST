import acne from '../assets/acne.jpg'
// import antiaging from '../assets/antiaging.jpg'
// import brightening from '../assets/brightening.jpg'
// import pigmentation from '../assets/pigmentation.jpg'


function ConcernCard() {
  return (
    <div className="w-2/3 bg-white md:w-[900px] m-2 flex items-center justify-center relative" style={{backgroundImage: `url(${acne})`, backgroundSize: 'cover'}}>
        <span className="bg-white text-gray-800 text-[40px] items-center px-[40px] py-[5px]">Acne</span>
    </div>
  )
}

export default ConcernCard