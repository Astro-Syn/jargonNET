import './App.css'
import { Route, Routes } from 'react-router-dom'
import BaseCamp from './pages/home/BaseCamp';
import LogoChat from './components/LogoChat';
import KrynnChat from './components/krynn-chat/KrynnChat';
import RueChat from './components/rue-chat/RueChat';

function App() {
 

  return (
    
    

   
<Routes>
       <Route path="/" element={<BaseCamp/>}/>
       <Route path='/logochat' element={<LogoChat/>}/>
       <Route path='/krynnchat' element={<KrynnChat/>}/>
       <Route path='/ruechat' element={<RueChat/>}/>
    


</Routes>

   
    
  )
}

export default App
