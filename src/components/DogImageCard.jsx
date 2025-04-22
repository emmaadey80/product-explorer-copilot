import React from 'react'

function DogImageCard({ imageUrl }) {
  return (
    <div>
      {imageUrl ? <img src={imageUrl} alt="A random dog" style={{ maxWidth: '100%' }} /> : <p>No image available</p>}
    </div>
  )
}

export default DogImageCard