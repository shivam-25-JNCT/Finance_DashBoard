import { Banknote, Calendar, CreditCard, MoreHorizontal } from 'lucide-react'
import React, { useState } from 'react'
import ProfleAwatar from './UI/ProfleAwatar'
import CalenderDay from './UI/CalenderDay'
import EventCard from './UI/EventCard';
import { useApp } from '../context/Context';

function RightPanel() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const {role} = useApp();
  const dates = [12, 13, 14, 15, 16, 17, 18];
  const [selDate, setSelDate] = useState(14);
  return (
    <div className=' space-y-8'>
       
     <div className="flex justify-end">
  <span
    className={`px-2 py-1 text-xs rounded 
      ${
        role === "admin"
          ? "bg-red-500 text-white"
          : "bg-green-500 text-black"
      }`}
  >
    {role === "admin" ? "Admin Mode" : "Viewer Mode"}
  </span>
</div>
      {/* profile card */}

      <div className='bg-transparent p-6'>
        <div className='flex justify-start mb-4'>

          <MoreHorizontal size={20} className='text-zinc-500 ' />
        </div>

        <ProfleAwatar src='/user-1.png' name="Shivam" title="financial Adviser" />
      </div>
      {/* financial calender  */}


      <div className='p-6'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-lg font-bold text-zinc-900 '> My Agenda</h3>
          <button className='text-sm text-blue-600 hover:underline'> View All</button>
        </div>


        {/* caledner */}
        <div className='grid grid-cols-7 text-center mb-6'>
          {days.map((day, i) => (
            <CalenderDay
              key={i}
              day={day}
              date={dates[i]}
              isActive={selDate === dates[i]}
              onClick={() => setSelDate(dates[i])}
            />
          ))}
        </div>
      </div>


      {/* upcomming event */}
      <div className=' space-y-4'>
        <EventCard
          time='12:30-13:30'
          title="Quartely Review with J. Smith " participants={2}
          icon={Calendar} />

        <EventCard
          time='14:30-15:45'
          title="Payment Reminder Utility Bill "
          icon={CreditCard} />

        <EventCard time='16:30-17:15' title="Investement Call: New Portfolio    " icon={Banknote} />

        <EventCard time='16:30-17:15' title="Meeting with S. Green   "
          participants={1}
          icon={Banknote} />

      </div>


      <button className='w-full mt-6 bg-zinc-50 border border-zinc-300 text-zinc-800 cursor-pointer  duration-100 se-in hover:shadow-xl text-sm py-3 rounded-lg hover: bg-zinc-200 transition-colors'>

        All Upcomming Event
      </button>
    </div>
  )
}

export default RightPanel