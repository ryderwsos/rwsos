import React from 'react'
import './Home.css'

export const Home = () => {
  return (
    <>
        <div className='main-info'>
            <h1 className='title' style={{opacity:0.9}}>Ryder Wang</h1>

            <div className='about-me'>
                <p className='section-header' style={{opacity:0.8}}>About me:</p> 
                <p className='section-content' style={{opacity:0.5}}>I'm a Electrical Engineering student currently studying at the University of Waterloo. </p>
            </div>
        </div>
    </>
  )
}
