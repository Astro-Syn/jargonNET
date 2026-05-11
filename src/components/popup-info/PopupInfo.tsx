type PopupInfoProps = {
        onClose: () => void;
        
    }


export default function PopupInfo({ onClose }: PopupInfoProps){
  
    
    return (
       <div className="bg-purple-950 text-yellow-100 rounded-md border-2 border-purple-700 p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p>
                Welcome to Glim Camp!

Hidden deep within the deep, Glim is a cozy little pocket of life in a world that forgot how to slow down. The rain never really stops, the signs buzz all night long, and every corner is packed with strange people, old tech, and glowing junk.

Feel free to wander around and chat with the locals. Some might share stories and some may sell questionable gadgets.

Stay awhile! 
            </p>

            <button
            onClick={onClose}
            className='rounded-md bg-green-300 text-green-800 font-bold border-2 border-green-800 '>Ok</button>
        </div>
    )
}