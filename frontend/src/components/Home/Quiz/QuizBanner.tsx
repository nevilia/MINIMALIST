function QuizBanner() {
    return (
        <div className="my-10">
         
        <div className="relative my-10 md:my-3 bg-gray-200 text-gray-900 px-[100px] py-[70px] flex flex-col items-center " >
            <h1 className="text-4xl font-semibold text-center">
                Not sure which are the right products for you? <br/>
                Try Our Routine Recommender 
            </h1>
            <p className="my-6 text-[20px] text-center">
                Build your personalized skincare routine with our Advanced Skin Analyzer Tool. Accurate results, takes less than 2 mins
            </p>
            <button className="bg-black text-[20px] text-white px-[80px] py-[10px] ">
                Build Your Routine
            </button>
        </div>
           
        </div>
    )
}

export default QuizBanner