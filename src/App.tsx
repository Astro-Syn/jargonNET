import './App.css'
import { Route, Routes } from 'react-router-dom'
import BaseCamp from './pages/home/BaseCamp'
import Chat from './components/Chat'


function App() {
 

  return (
    
    

   
<Routes>
       <Route path="/" element={<BaseCamp/>}/>
       <Route path='/logochat' element={<Chat/>}/>
    
    


</Routes>

   
    
  )
}

export default App
