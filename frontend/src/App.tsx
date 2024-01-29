import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Shop from './components/Shop'

function App() {
  
  return (
    <>
      <Navbar/>
      <div className='p-10'>
        <Hero/>
        <br/>
        <Shop/>
      </div>
      
    </>
  )
}

export default App
