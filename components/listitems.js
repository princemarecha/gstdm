import React from 'react';
import Image from 'next/image';


const ListItems = ({hotel}) => {

    //const perks =   (hotel.perks.length>3 ? hotel.perks.slice(0,3) : hotel.perks );
  console.log(hotel.name[0].content);  
  var path = 'http://photos.hotelbeds.com/giata/'+ hotel.images[0].path;
    return (
        <div>
           { <a href={`/hotel/${hotel.code}`}

            >
              
              <div
              className="mx-auto cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-72 max-w-full border border-gray-300 rounded-sm bg-white"
            >
              <div className="w-full h-48">
                
              {/*<img src={path} alt=""/>*/}
              <Image
                  src={path}
                  alt="Picture of the hotel stuff"
                  width="1000px"
                  height="700px" />
              </div>
              
              <div className="p-6">
                <div>
                  <i className='fa fa-star text-yellow-500' key="tt"></i>
                  <i className='fa fa-star text-yellow-500' key="tt"></i>
                  <i className='fa fa-star text-yellow-500' key="tt"></i>
                  <i className='fa fa-star text-yellow-500' key="tt"></i>
                  <i className='fa-regular fa-star text-yellow-500'></i>
                </div>
                <div className="text-sm">
                  <h3 className="font-bold text-base">{hotel.name[0].content}</h3>
                  <div className="flex items-center text-green-400">
                  {hotel.rating}
                  </div>
                  <p className="mt-1">
                  <span className='font-bold'>Description:</span> <span className='italic'>{hotel.description[0].content.slice(0,90)}.....</span>
                  </p>
                
                  <ul className="flex list-disc pl-3">
      {/* {perks.map((perk)=>{   
          return(
                  <li className='pr-5' key={perk}>
                  {perk}
                  </li>
        )
      })} */}
      </ul>
                </div>
              </div>
    </div></a>}
       
 
         
  
        </div>
    )
}

export default ListItems
