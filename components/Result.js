import { useContext } from "react";
import { hotelContext } from "../Helper/Context";


const Result =() =>{

  const {working, setWorking} = useContext(hotelContext);
  console.log(working);

  return(
    <div>
<div className='pt-9 pb-5  pl-12 border border-dashed mt-6 pr-5'>
    <div>
      <form className='grid grid-cols-3 md:grid-cols-7  gap-x-2'>
        <div className='col-span-1 grid grid-cols-1 grid-rows-2'>
          <label>Destination, zone or hotel name</label>
          <input name="first-name" type="text" className='border' ></input>
          </div>
        <div className='col-span-1 grid grid-cols-1 grid-rows-2'>
          <label>From</label>
          <input name="first-name" type="date"  className='border'></input>
          </div>
        <div className='col-span-1 grid grid-cols-1 grid-rows-2'>
          <label>To</label>
          <input name="first-name" type="date"  className='border'></input>
          </div>
        <div className='col-span-1 grid grid-cols-1 grid-rows-2'>
          <label>Rooms</label>
          <input name="first-name" type="number"  className='border'></input>
          </div>
        <div className='col-span-1 grid grid-cols-1 grid-rows-2'>
          <label>Adults</label>
          <input name="first-name" type="number"  className='border'></input>
          </div>
        <div className='col-span-1 grid grid-cols-1 grid-rows-2'>
          <label>Children</label>
          <input name="first-name" type="number"  className='border'></input>
        </div>
        <div className='col-span-1 grid grid-cols-1 grid-rows-2'> 
        <div></div>
          <button className="inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Search</button>
        </div>
      </form>
    </div>
    </div>
   
    </div>
  )
}
export default Result