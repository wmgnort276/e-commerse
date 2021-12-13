import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Register from './Register/Register';
import Login from './Login/Login';


function App() {
    return (
        <div>
           <Routes>
             <Route path='/Login' element={<Login />} />   
             <Route path='/Register' element={<Register />} />   
           </Routes> 
            
        </div>
    )
}

export default App
