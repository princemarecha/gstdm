import React from 'react'

const ListItems = ({hotel}) => {

    const perks =   (hotel.perks.length>3 ? hotel.perks.slice(0,3) : hotel.perks );
  

    return (
        <div>
            <a href="#"
            ><div
              className="mx-auto cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-72 max-w-full border border-gray-300 rounded-sm bg-white"
            >
              <div className="w-full h-48">
              <img src={hotel.url} alt=""/>
              </div>
              <div className="p-6">
                <div className="text-sm">
                  <h3 className="font-bold text-base">{hotel.title}</h3>
                  <div className="flex items-center text-green-400">
                  {hotel.rating}
                  </div>
                  <p className="mt-1">
                  Avg. Room Price: {hotel.currency} {hotel.rate}
                  </p>
                
                  <ul className="flex list-disc pl-3">
      {perks.map((perk)=>{   
          return(
                  <li className='pr-5' key={perk}>
                  {perk}
                  </li>
        )
      })}
      </ul>
                </div>
              </div>
            </div></a>
        </div>
    )
}

export default ListItems
