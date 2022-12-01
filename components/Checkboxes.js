import React, { useContext, useState } from 'react'
import { checkBoxContext } from '../Helper/Context';


const Checkboxes = () => {

    const {remarkCH, setRemarkCH} = useContext(checkBoxContext);
    const {str, setStr} = useContext(checkBoxContext);
    var clas = "w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    var lab = "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300";

    function handleChange(event){
       
  

       if (event.target.checked){
        var temp = remarkCH;
        if (temp.indexOf(event.target.value)!= -1){
        temp = temp;    
        }
        else if (temp.indexOf(event.target.value)== -1)
        {
            temp.push(event.target.value)
        }
        setRemarkCH(temp);
        console.log(remarkCH);
        
       }
       else if(!event.target.checked){
        var temp = remarkCH;
        console.log(event.target.value  );
        
       for (var i=0;i<5;i++ ) 

                {if (temp.indexOf(event.target.value)!= -1){
                    temp.splice(temp.indexOf(event.target.value),1);
                    }
                    setRemarkCH(temp);
                    }}

       console.log(remarkCH);
                    
       const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
       var formatted = formatter.format(temp);
       setStr(formatted);
       console.log(formatted);
    }
  return (
    
    <div>   
    
        <div className='mb-2 mt-4 font-bold '><p>Requests For Accomodation (not guaranteed)</p></div>

        <div className='grid grid-cols-3 my-3 text-sm'>
    <div>
      <input type='checkbox' id='db' value='Double Bed' className={clas} onChange={event => handleChange(event)} />
      <label htmlFor='db' className={lab}>Double Bed</label>
    </div>
    <div>
      <input type='checkbox' id='smoking' value='Smoking Room' className={clas} onChange={event => handleChange(event)}/>
      <label htmlFor='smoking' className={lab}>Smoking Room</label>
    </div>
    <div>
      <input type='checkbox' id='la' value='Late Arrival' className={clas} onChange={event => handleChange(event)}/>
      <label htmlFor='la' className={lab}>Late Arrival</label>
    </div>
    <div>
      <input type='checkbox' id='gf' value='Ground Floor' className={clas} onChange={event => handleChange(event)}/>
      <label htmlFor='gf' className={lab}>Ground Floor</label>
    </div>
    <div>
      <input type='checkbox' id='tb' value='Two Beds' className={clas} onChange={event => handleChange(event)}/>
      <label htmlFor='tb' className={lab}>Two Beds</label>
    </div>
    <div>
      <input type='checkbox' id='hm' value='Honey Moon' className={clas} onChange={event => handleChange(event)}/>
      <label htmlFor='hm' className={lab}>Honey Moon</label>
    </div>
    <div>
      <input type='checkbox' id='egf' value='Except Ground Floor' className={clas} onChange={event => handleChange(event)}/>
      <label htmlFor='egf' className={lab}>Except Ground Floor</label>
    </div>
    <div>
      <input type='checkbox' id='cot' value='Cot' className={clas} onChange={event => handleChange(event)}/>
      <label htmlFor='cot' className={lab}>Cot</label>
    </div>
    <div>
      <input type='checkbox' id='cwv' value='Client Without Voucher' className={clas} onChange={event => handleChange(event)}/>
      <label htmlFor='cwv' className={lab}>Client without Voucher</label>
    </div>
    <div>
      <input type='checkbox' id='nsr' value='Non-Smoking Room' className={clas} onChange={event => handleChange(event)}/>
      <label htmlFor='nsr' className={lab}>Non-Smoking Room</label>
    </div>
    <div>
      <input type='checkbox' id='ar' value='Adjacent Rooms' className={clas} onChange={event => handleChange(event)}/>
      <label htmlFor='ar' className={lab}>Adjacent Rooms</label>
    </div>
  </div></div>
  )
}

export default Checkboxes