import React from 'react';
import './HeroStyles.css';
import video from '../assets/Video.webm';


function Hero() {
  return (
    <div className='hero'>
<video autoPlay loop muted
style={{
    width: '100%', 
  height: '100vh', 
  color: '#fff',
  position: 'absolute',
  objectFit:'cover',
  top:'50%',
  left:'50%',
  transform:"translate(-50%,-50%)",
  zIndex:"-1"
    

}}
   
   
   >
     <source src={video} type='video/mp4' />
      </video>
    </div>
  )
}

export default Hero;