interface Value {
    image: string;
    heading: string
    description: string
}

function ValueCard({image, heading, description} : Value)  {
  return (
    <div className="flex flex-col w-1/3 p-5 ">
        <img src={image} alt="" className='max-w-[60px] max-h-[60px] mb-3'/>
        <h3 className="font-bold text-[30px] pb-2">
            {heading}
        </h3>
        <p className="text-gray-700 text-[20px]">
            {description}
        </p>
    </div>
  )
}

export default ValueCard
export type { Value };