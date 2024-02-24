import { Link } from 'react-router-dom';
import React from 'react';

type Props = {
    isOpen: boolean,
    onClose: () => void
}

const SlideOverContent: React.FC<Props> = ({ isOpen, onClose }) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
        e.stopPropagation();
        onClose(); // Close the slide-over when anything inside it is clicked
    };

    return (
        <div className={`slide-over ${isOpen ? 'open' : ''} `}>
            {isOpen && <div className="overlay" onClick={onClose}></div>}
            <div className="content" onClick={handleClick}>
                <div className="text-white text-3xl font-bold p-[15%]">
                    <div className="flex justify-end pb-4">
                        <button onClick={onClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className="space-y-4">
                        <li className='py-3'><Link to="/" className="link">HOME</Link></li>
                        <li className='py-3'><Link to="/products" className="link">SHOP</Link></li>
                        <li className='py-3'><Link to="/dummy" className="link">KNOWLEDGE</Link></li>
                        <li className='py-3'><Link to="/" className="link">DOWNLOAD APP</Link></li>
                        <li className='py-3 font-normal'><Link to="/register" className="link">Register</Link> / <Link to="/login" className="link">Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SlideOverContent;
