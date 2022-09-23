import React from 'react'

const mfiwu = () => {
    if (process.browser){
        var storedStuff = JSON.parse(localStorage.getItem("ghost"))
  
        console.log(storedStuff);
    }
  return (
    <div>mfiwu</div>
  )
}

export default mfiwu