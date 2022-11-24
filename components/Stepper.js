import React, { useContext, useState } from 'react'
import Steppers from './Steppers'
import StepperControl from './StepperControl'
import CheckAvailability from './steps/CheckAvailability'
import Booking from './steps/Booking'
import PaymentDetails from './steps/PaymentDetails'
import { StepperContext } from '../Helper/Context'


const Stepper = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData] = useState([]);



    const steps = [
        "Check Availability",
        "Booking",
        "Payment Details"
    ]

    const displayStep=(step)=>{
        switch(step){
            case 1:
                return <CheckAvailability/>
            case 2:
                return <Booking/>
            case 3:
                return <PaymentDetails/>
            default:
    }
    }

    const handleClick = (direction) =>{
        let newStep = currentStep;

        direction == "next" ? newStep++ : newStep--;

        newStep > 0 && newStep <= steps.length &&setCurrentStep(newStep); 
    }

  return (
<div id="stepper">

    <div className=' mx-5 shadow-xl my-3 rounded-2xl py-2 bg-white'>
    <div className='    horizontal mt-5'>
        <Steppers
        steps ={steps}
        currentStep = {currentStep}
        />

        <div className='my-10 p-10'>
            <StepperContext.Provider value={{
                userData,
                setUserData,
                finalData,
                setFinalData
            }}>
                {displayStep(currentStep)}
            </StepperContext.Provider>
        </div>
    </div>

    <StepperControl 
    handleClick ={handleClick}
    steps ={steps}
    currentStep = {currentStep}/>
    </div>
    </div>
  )
}

export default Stepper