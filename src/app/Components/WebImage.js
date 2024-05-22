import React from 'react'

const WebImage = () => {
    const URL = "https://i.ibb.co/CwMXtFm/android-chrome-144x144.png";
  return (
    <img
    crossOrigin='anonymous'
      src={URL}
      width={500}
      height={500}
      alt="Picture of the author"
    />
  )
}

export default WebImage