import { Link } from 'react-router-dom';
import { getUserIdFromToken} from '../../utils'
import { useEffect, useState } from 'react';
import SlideOverContent from './SlideOverContent';
import Searchbar from './Searchbar';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [userId, setUserId] = useState<string>('');
  const [searchActive, setSearchActive] = useState(false);


  // extract the userId from token from Headers by using utils
  useEffect(() => {
    const userIdFromToken = getUserIdFromToken();
    if (userIdFromToken) {
      setUserId(userIdFromToken);
    }
  }, []); 

console.log("Current user ID:", userId);

const handleButtonClick = () => {
  setIsOpen(!isOpen);
};


const toggleSearch = () => {
  setSearchActive(prevState => !prevState);
};

    
  return (
    <nav className="bg-black p-9">
      <div className="flex items-center justify-between gap-6">
        <div className="text-white " onClick={handleButtonClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 cursor-pointer hover:bg-gray-900 rounded-[50%] p-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
        </div>
        <div className="flex">
          <Link to="/">
            <img src="https://beminimalist.co/cdn/shop/files/Minimalist-Logo-White_9bfc4a6b-f7ee-4b78-b667-681c345ef1a5_180x.png?v=1643556721" alt="Minimalist Logo" className="w-full min-h-8 sm:ml-8 sm:pl-10 sm:pr-2 " />
          </Link>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="text-white " onClick={toggleSearch}>
            {searchActive ? <Searchbar /> :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 hover:bg-gray-900 rounded-[50%] p-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg> 
            }
          </div>
          <Link to={userId ? `/user/${userId}` : "/login"} className="hidden md:inline text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 hover:bg-gray-900 rounded-[50%] p-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          </Link>
          {/* Pass the userId where ever needed */}
          <Link to={`/cart/${userId}`} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 hover:bg-gray-900 rounded-[40%] p-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>

          </Link>
        </div>
      </div>
      {isOpen && <SlideOverContent isOpen={isOpen} onClose={handleButtonClick} />}

    </nav>
  )
}

export default Navbar