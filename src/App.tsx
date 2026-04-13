
import { useEffect } from 'react'
import { getBirds } from './components/indholdFugle'
import { Navbar } from './components/Navbar'
import './App.css'

function App() {
  useEffect(() => {
    getBirds().catch((error) => {
      console.error(error)
    })
  }, [])

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
