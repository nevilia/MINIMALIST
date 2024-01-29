import acne from '../assets/acne.jpg'


function ConcernCard() {
  return (
    <div className="w-2/3 bg-white md:w-[900px] m-2 flex items-center justify-center bg-cover relative" style={{backgroundImage: `url(${acne})`, backgroundSize: 'cover'}}>
        <span className="bg-black text-white text-[40px] items-center">Acne</span>
    </div>
  )
}

export default ConcernCard