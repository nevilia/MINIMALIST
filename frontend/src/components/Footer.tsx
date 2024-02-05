import Instagram from '../assets/Instagram.png'
import Facebook from '../assets/Facebook.png'
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="font-semibold text-[20px]">About</h1>
      <ul className="pt-2 underline">
        <li>
          <Link to="/dummy">Our Values</Link>
        </li>
        <li>
          <Link to="/dummy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/dummy">Terms & Conditions</Link>
        </li>
        <li>
          <Link to="/dummy">Corporate Information</Link>
        </li>
      </ul>
    </div>
  );
}

function Help() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="font-semibold text-[20px]">Help</h1>
      <ul className="pt-2 underline">
        <li>
          <Link to="/dummy">Knowledge</Link>
        </li>
        <li>
          <Link to="/dummy">FAQs</Link>
        </li>
        <li>
          <Link to="/dummy">Return & Refund Policy</Link>
        </li>
        <li>
          <Link to="/dummy">Contact Us</Link>
        </li>
        <li>
          <Link to="/dummy">Track Order</Link>
        </li>
      </ul>
    </div>
  );
}


function Socials() {
  return (
    <div className="flex gap-3 ">
      <Link to="/" target="_blank">
        <img className='h-6 w-6' src={Facebook} alt="Facebook" />
      </Link>
      <Link to="/" target="_blank">
        <img className='h-6 w-6' src={Instagram} alt="Instagram" />
      </Link>
    </div>
  )
}

function Copyright() {

  return (
    <div className="py-2">
      <p>Copyright &#169; 2024, Minimalist.</p>
      <p>Built By Nikita</p>
    </div>
  )
}
function Footer() {
  return (
    <div className="bg-black py-[50px] px-[80px] ">
      <div className="flex pb-[100px] gap-10 text-white font-[30px] p-2 justify-start">
        <About />
        <Help />
      </div>
      <hr className="color-gray-100 px-[80px]" />
      <div className="pt-6 justify-start text-gray-200">
        <Socials />
        <Copyright />
      </div>
    </div>
  )
}

export default Footer