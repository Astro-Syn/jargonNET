import Logo from "../../characters/logo/Logo"
import { Link } from "react-router-dom"

export default function BaseCamp(){
    return (
        <div>
            {/*Logo  */}
            <div className='bg-purple-600'>
                <Link to='/logochat'>
                <Logo />
                </Link>
                 
            </div>

            {/*Krynn */}
            <div className='bg-red-200'>
                <Link to='/krynnchat'/>
                Krynn
            </div>

            {/*Rue */}
            <div className='bg-yellow-100'>

            <Link to='/ruechat'/>
                Rue
            </div>


            Base Camp area
        </div>
    )
}