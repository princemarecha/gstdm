import React from 'react'
import { NextOO, RateURL } from '../Helper/Context'
import { useContext } from 'react';


const StepperControl = ({handleClick, currentStep, steps}) => {

  const {nextCon, setNextCon} = useContext(NextOO);
  const {rateU, setRateU} = useContext(RateURL);

  return (
    <div className='container flex justify-around mt-4 mb-8'>
        <button
        onClick={()=>handleClick()}
        className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer 
        border-2 border-slate-300 hover:bg-slate-700 hover: text-white transition duration-200 ease-in-out
        ${currentStep ==1? "opacity-50 cursor-not-allowed" : ""}`}>
            Back
        </button>

        {nextCon?<button 
        onClick={()=>{
          //handleClick("next");
          if (process.browser){
            window.location.href = (`/booking?ratekey=${rateU}`)
          }
        }} 
        className={ `bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer 
       hover:bg-slate-700 hover: text-white transition duration-200 ease-in-out ${!nextCon? "opacity-50 cursor-not-allowed":""}`}>
            {currentStep == steps.length? "Confirm" : "Next"}
        </button>
:""}
    </div>
  )
}

export default StepperControl