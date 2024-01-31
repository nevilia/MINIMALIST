import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import QuizBanner from './components/QuizBanner'
import Shop from './components/Shop'
import Values from './components/Values'

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
      
    </>
  )
}

export default App
