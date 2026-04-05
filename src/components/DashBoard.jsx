import Sidebar from './Sidebar'
import React, { useState } from 'react'
import MainContent from './MainContent'
import RightPanel from './RightPanel'

import Transactions from './Transections'
import AccountTab from './AccountTab'
import Navbar from './NavBar'
import Insight from './Insight'




function DashBoard({onLogout}) {
const [activeTab, setactiveTab] = useState("Dashboard");
const [open, setOpen] = useState(false);

  return (
    <div className='flex min-h-screen '>
      {/* left sidebar */}
<div className='md:w-64 bg-zinc-50 p-6 shadow-md  lg:block'>
  <Sidebar 
  activeTab={activeTab} 
  setActiveTab={setactiveTab} 
  onLogout={onLogout}
   open={open} setOpen={setOpen} 
/>
</div>
      {/* main content area*/}

     
<div className='flex-1 p-2 md:p-6 lg:p-10'>
  {/* main content */}
   <div className="flex-1">
        <Navbar setOpen={setOpen} />
      </div>
 {activeTab ==="Dashboard" &&  <MainContent/>}
 {activeTab==="Accounts" && <AccountTab/>}
 {activeTab==="Transactions" && <Transactions/>}
 {activeTab==="Insight" && <Insight/>}

 {/* other tab add gere */}
</div>
      {/* right pannel */}
<div className='w-80 bg-zinc-100 p-4 shadow-md hidden xl:block'>

  <RightPanel/>
</div>

    </div>
  )
}

export default DashBoard