import React from 'react'

function FetchButton({ fetchDogImage }) {
  return <button onClick={fetchDogImage}>Fetch Dog Image</button>;
}

export default FetchButton;