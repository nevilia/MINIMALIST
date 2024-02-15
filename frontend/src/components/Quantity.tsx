import { useState } from 'react'

type Props = {}

function Quantity({}: Props) {
    const [count, setCount] = useState(0)

    function handleDecrease() {
        if(count > 0) {
            setCount(count-1)
        }
    }

    function handleIncrease() {
        if(count < 5) {
            setCount(count+1)
        }
    }
  return (
    <div className='flex items-center font-semibold sm:max-w-[250px] p-3 justify-between border border-gray-300'>
        <button className='px-5 text-3xl' onClick={handleDecrease}> - </button>
        <p className='px-10'>
            {count}
        </p>
        <button className='px-5 text-3xl ' onClick={handleIncrease}> + </button>
    </div>
  )
}

export default Quantity
