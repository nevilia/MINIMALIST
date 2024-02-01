import Instagram from '../assets/Instagram.png'
import Facebook from '../assets/Facebook.png'
function About() {
    return (
      <div className="flex flex-col h-full">
        <h1 className="font-semibold text-[20px]">About</h1>
        <ul className="pt-2 underline">
          <li>
            <a href="/values">Our Values</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms & Conditions</a>
          </li>
          <li>
            <a href="/corporate">Corporate Information</a>
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
            <a href="/knowledge">Knowledge</a>
          </li>
          <li>
            <a href="/faqs">FAQs</a>
          </li>
          <li>
            <a href="/return-refund-policy">Return & Refund Policy</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
          <li>
            <a href="/track-order">Track Order</a>
          </li>
        </ul>
      </div>
    );
  }
  

function Socials(){
return(
    <div className="flex gap-3 h-6 w-6">
        <img src={Facebook} alt="Facebook" />
        <img src={Instagram} alt="Instagram" />
    </div>
)
}

function Copyright(){

    return(
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
            <About/>
            <Help/>
        </div>
        <hr className="color-gray-100 px-[80px]"/>
        <div className="pt-6 justify-start text-gray-200">
            <Socials/>
            <Copyright/>
        </div>
    </div>
  )
}

export default Footer