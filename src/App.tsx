
import { useEffect, useState } from 'react'
import { getBirds } from './components/indholdFugle'
import { Navbar } from './components/Navbar'
import './App.css'

function App() {
const [birdData, setbirdData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const birds = await getBirds()
        console.log(birds)
        setbirdData(birds)

    
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [])

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
