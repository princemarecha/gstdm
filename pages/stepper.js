import React, { useState } from 'react'
import Steppers from '../components/Steppers'
import StepperControl from '../components/StepperControl'
import CheckAvailability from '../components/steps/CheckAvailability'
import Booking from '../components/steps/Booking'
import PaymentDetails from '../components/steps/PaymentDetails'
import { StepperContext } from '../Helper/Context'

const stepper = () => {

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
    <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
    <div className='container horizontal mt-5'>
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
  )
}

export default stepper