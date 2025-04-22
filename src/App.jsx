import { useState, useEffect } from 'react'
import './App.css'
import FetchButton from './components/FetchButton'
import DogImageCard from './components/DogImageCard'

function App() {
  const [dogImage, setDogImage] = useState('')

  const fetchDogImage = async () => {
    try {
      const response = await fetch('https://random.dog/woof.json')
      const data = await response.json()
      setDogImage(data.url)
    } catch (error) {
      console.error('Error fetching dog image:', error)
    }
  }

  return (
    <div>
      <h1>Random Dog Image</h1>
      <FetchButton fetchDogImage={fetchDogImage} />
      <DogImageCard imageUrl={dogImage} />
    </div>
  )
}

export default App
