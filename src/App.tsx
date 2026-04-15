
import { useEffect, useState } from 'react'
import { getBirds } from './api/getBirds.ts'
import { Navbar } from './components/Navbar'
import './App.css'
import type { Birdtype } from './types/birdType.ts'
import style from "./types/birdType.module.scss" 


function App() {
const [birdData, setbirdData] = useState<Birdtype[] | null>(null)

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
      {birdData && birdData.map((bird: Birdtype) => (
        <div key={bird.locId} className={style.locidbird}>
          <h2 className={style.namebird}>{bird.comName}</h2>
          <p className={style.locationbird}>Location: {bird.locName}</p>
          <p className={style.datebird}>Observation Date: {new Date(bird.obsDt).toLocaleDateString()}</p>
          <p className={style.howmanybird}>How Many: {bird.howMany}</p>
          <p className={style.latitudetbird}>Latitude: {bird.lat}</p>
        

        </div>
      ))}
    </>
  )
}

export default App
