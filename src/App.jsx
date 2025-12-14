import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import './App.css'

function App() {

  return (
    <div className='min-h-screen bg-black'>
      <Navbar />

      <main className="">
        <Hero />
      </main>
      
    </div>
  )
}

export default App
