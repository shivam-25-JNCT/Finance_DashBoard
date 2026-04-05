import React, { useState } from 'react'
import DashBoard from './components/DashBoard'
import LoginScreen from './components/LoginScreen';
function App() {

  const [isLoggedin, setisLoggedin] = useState(false);
  const handleLogIn=()=>{
    setisLoggedin(true);
  }
  const handleLogOut=()=>{
    setisLoggedin(false);
  }
if(!isLoggedin){
  return <LoginScreen onLogin ={handleLogIn}/>
}
  
  return (
    <div className='min-h-screen bg-zinc-50'>
   <DashBoard onLogout={handleLogOut}/>
      
    </div>
  )
}

export default App
