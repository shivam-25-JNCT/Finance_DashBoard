import React from 'react'

function ListItemCard({ title, subtitle, value, valueColor, src }) {
    return (
        <div className='flex items-center justify-between cursor-pointer bg-white p-4 hover:shadow-2xl hover:shadow-zinc-200/80 transition-all duration-100 ease-in rounded-xl '>

            <div className="flex items-center space-x-3">

                <div className="size-9 bg-zinc-200 rounded-full center-item text-xs text-zinc-500 overflow-clip">

                    {src ? (<img src={src} alt='profile image ' className='size-full ' />) : ("DP")}
                </div>

                <div className="">
                    <p className='text-sm font-medium text-zinc-900'>
                        {title}
                    </p>
                    <p className="text-xs text-zinc-600">
                        {subtitle}
                    </p>
                </div>
            </div>

            <span className={`text-sm font-semibold ${valueColor}`}>
                {value}
            </span>

        </div>
    )
}

export default ListItemCard