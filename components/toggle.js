import React,{useState} from 'react';


const Toggle = () => {
  const[show,setShow]=useState(true);
  return (
    <div>
      <button onClick={()=>setShow(!show)}>{show?<i className="fa-regular fa-heart fa-xl text-white"></i> : <i className="fa fa-heart fa-xl text-white"></i>}</button>
    </div>
  )
}
export default Toggle;