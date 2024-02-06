import ReviewCard from "./ReviewCard"
import { Review } from "./ReviewCard"

const reviewData: Review[] = [{
  review: 'My life savior i.e. I can say my skin saviour. I started seeing the effect after 2 months and now it\'s doing wonders. People say my skin glows',
  author: 'Shreya Bishayee'
},
{
  review: 'Very much pocket friendly, suitable for absolute sensitive skin and visible results. SO glad to have come across this amazing brand',
  author: 'Sujata Sajid'
},
{
  review: 'The one and only skincare product that actually worked on my skin!! Very effective, shows improvement, budget friendly, gentle on skin',
  author: 'Varshini Ravindran'
}]
function Reviews() {
  return (
    <div className="flex flex-wrap  justify-center py-5 px-[80px] sm:py-[50px] sm:px-[120px] bg-gray-200">
      {reviewData.map((review, index) => (
        <ReviewCard key={index} review={review.review} author={review.author} />
      ))}
    </div>
  )
}

export default Reviews