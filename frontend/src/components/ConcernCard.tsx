// import acne from '../assets/acne.jpg'
// import antiaging from '../assets/antiaging.jpg'
// import brightening from '../assets/brightening.jpg'
// import pigmentation from '../assets/pigmentation.jpg'

interface ConcernCardProps {
  bgImg: string;
  title: string;
}


function ConcernCard({ bgImg, title }: ConcernCardProps) {
  const cardStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
  };

  return (
    <div className="md:w-2/3 h-[100px] sm:min-h-[300px] bg-white md:w-[900px] m-2 flex items-center justify-center relative" style={cardStyle}>
        <span className="bg-white text-gray-800 sm:text-2xl sm:font-semibold items-center px-[40px] py-[5px]">{title}</span>
    </div>
  )
}

export default ConcernCard