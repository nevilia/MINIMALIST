interface Review {
    review: string
    author: string
}

function ReviewCard({review, author}: Review) {
  return (
    <div className=" flex flex-col justify-center  sm:w-1/2 lg:w-1/3 ">

    
    <div className="bg-white text-center p-6 m-2 h-full ">
    <p className="text-gray-800 text-base">{review}</p>
    <h4 className="text-gray-900 pt-3 text-lg font-semibold">{author}</h4>
  </div>
  </div>   
  )
}

export type {Review}
export default ReviewCard