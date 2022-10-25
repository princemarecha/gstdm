import React, { useState } from 'react'
import Steppers from '../components/Steppers'
import StepperControl from '../components/StepperControl'
import CheckAvailability from '../components/steps/CheckAvailability'
import Booking from '../components/steps/Booking'
import PaymentDetails from '../components/steps/PaymentDetails'

const stepper = () => {

    const [currentStep, setCurrentStep] = useState(1)
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

  return (
    <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
    <div className='container horizontal mt-5'>
        <Steppers
        steps ={steps}
        currentStep = {currentStep}
        />
    </div>

    <StepperControl/>
    </div>
  )
}

export default stepper