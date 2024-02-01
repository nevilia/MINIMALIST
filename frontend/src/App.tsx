import './App.css'
import Footer from './components/Footer'
import Hero from './components/Home/Hero/Hero'
import Navbar from './components/Navbar'
import QuizBanner from './components/Home/Quiz/QuizBanner'
import Reviews from './components/Home/Reviews/Reviews'
import Shop from './components/Home/Concerns/Shop'
import Values from './components/Home/Values/Values'

function App() {
  
  return (
    <>
      <Navbar/>
      <div className='p-10'>
        <div className='grid mb-[200px]'>
        <Hero/>
        <br/>
        <Shop/>
        </div>
      </div>
      <QuizBanner/>
      <Values/>
      <Reviews/>
      <Footer/>
      
    </>
  )
}

export default App
