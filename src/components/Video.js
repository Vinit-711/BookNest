import React from 'react'

export default function Video() {
  return (
    <>
    
    <video autoPlay loop muted src={`${process.env.PUBLIC_URL}/6549287-uhd_3840_2160_25fps.mp4`} className='object-cover fixed z-[-1]'></video>
    </>
  )
}
