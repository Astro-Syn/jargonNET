import Logo from "../../characters/logo/Logo"
import { Link } from "react-router-dom"

export default function BaseCamp(){
    return (
        <div>
            {/*Logo  */}
            <div>
                <Link to='/logochat'>
                <Logo />
                </Link>
                 
            </div>
           
            Base Camp area
        </div>
    )
}