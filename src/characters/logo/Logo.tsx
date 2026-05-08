import { useState, useEffect } from 'react';
import "./Logo.css";


export default function Logo() {
    const frames = [
  "/Images/logo-animation1.png",
  "/Images/logo-animation2.png",
  "/Images/logo-animation3.png",
  "/Images/logo-animation4.png",
  "/Images/logo-animation5.png",
  "/Images/logo-animation6.png",
  "/Images/logo-animation7.png",
  "/Images/logo-animation8.png",
  "/Images/logo-animation9.png",
  "/Images/logo-animation10.png",
  "/Images/logo-animation11.png",
  
    ];

    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFrame((prev) => (prev + 1) % frames.length);
        }, 100);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className=''>
            
            <img
            className='logo-pic'
            src={frames[currentFrame]}
            /> 
        </div>
    )
}