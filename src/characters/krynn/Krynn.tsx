import { useState, useEffect } from "react";
import "./Krynn.css";

export default function Krynn(){

    const frames = [
        '/Images/mantic-frame1.png',
        '/Images/mantic-frame2.png',
        '/Images/mantic-frame3.png',
        '/Images/mantic-frame4.png',
        '/Images/mantic-frame5.png',
        '/Images/mantic-frame6.png',
        '/Images/mantic-frame7.png',
        '/Images/mantic-frame8.png',

    ];

    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFrame((prev) => (prev + 1) % frames.length);
        }, 300);

        return () => clearInterval(interval);
    }, [])

    return (
        <div>
        <img 
        className='krynn-pic'
        src={frames[currentFrame]}
        />
        </div>
    )
}