import { useState } from 'react';

type QuantityProps = {
    initialValue?: number; // Initial value for the quantity
    onQuantityChange: (quantity: number) => void; // Callback function to handle quantity change
}

function Quantity({ initialValue = 0, onQuantityChange }: QuantityProps) {
    const [count, setCount] = useState(initialValue); // Local state for the quantity

    function handleDecrease() {
        if (count > 0) {
            setCount(count - 1);
            onQuantityChange(count - 1); // Call the callback function with the updated quantity
        }
    }

    function handleIncrease() {
        if (count < 5) {
            setCount(count + 1);
            onQuantityChange(count + 1); // Call the callback function with the updated quantity
        }
    }

    return (
        <div className='flex items-center font-semibold max-w-[250px] sm:p-3 justify-between border border-gray-300'>
            <button className='px-2 sm:px-5 text-3xl' onClick={handleDecrease}> - </button>
            <p className='sm:px-10'>
                {count}
            </p>
            <button className='px-2 sm:px-5 text-3xl ' onClick={handleIncrease}> + </button>
        </div>
    );
}

export default Quantity;
