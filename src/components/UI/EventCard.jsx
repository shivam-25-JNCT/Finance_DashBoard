

function EventCard({time,title,participants,icon:Icon}) {
  return (
    <div className="bg-white/90 p-3 rounded-lg flex items-center space-x-3 hover:bg-white card-hover text-zinc-600 cursor-pointer">

<div className="size-8 flex items-center justify-center bg-white rounded-full border border-zinc-600 text-zinc-400 ">

    <Icon  size={16}/>
</div>
<div className="flex-1">
    <p className="text-xs text-zinc-500">
        {time}
    </p>
    <p className="text-sm text-zinc-900 font-medium mb-1">
        {title}
    </p>
 {participants && <div className="flex -space-x-2 overflow-hidden">

    {Array.from({length:participants}).map((_,i)=>(
        <div key={i} className="size-6 rounded-full bg-zinc-300 border-2 border-zinc-50 center-item text-xs text-zinc-600 ">

        </div>

    ))}
 </div> }
</div>

    </div>
  )
}

export default EventCard