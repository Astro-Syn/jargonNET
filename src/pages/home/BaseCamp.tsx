import Logo from "../../characters/logo/Logo"
import { Link } from "react-router-dom";
import PopupInfo from "../../components/popup-info/PopupInfo";
import { useState } from "react";
import Krynn from "../../characters/krynn/Krynn";

export default function BaseCamp(){
    const [showPopUpMessage, setShowPopUpMessage] = useState(true);


    return (
        <div className='bg-blue-900 w-full h-100'>


           

           {showPopUpMessage && (
            <PopupInfo
            
            onClose={() => setShowPopUpMessage(false)}
            />
           )} 
            


            <div className='flex flex-row'>
            {/*Logo  */}
            <div className='bg-purple-600'>
                <Link to='/logochat'>
                <Logo />
                </Link>
                 
            </div>

            {/*Krynn */}
            <div className='bg-red-200'>
                <Link to='/krynnchat'>
                <Krynn />
                </Link>
            </div>

            {/*Rue */}
            <div className='bg-yellow-100'>

            <Link to='/ruechat'>
                Rue
                </Link>
            </div>

           </div>
            Base Camp area
        </div>
    )
}