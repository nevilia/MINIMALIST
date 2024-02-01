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
    <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 sm:flex-shrink">
      <div className="h-[100px] sm:min-h-[300px] bg-white m-2 relative" style={cardStyle}>
        <span className="bg-white absolute top-1/2 left-1/3 right-1/3 transform -translate-y-1/2 text-gray-800  sm:text-lg lg:text-xl font-semibold flex justify-center px-4 py-2">{title}</span>
      </div>
    </div>
  )
}

export default ConcernCard