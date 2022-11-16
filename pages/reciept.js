import React, { useContext, useState } from 'react'
import { BookRes } from '../Helper/Context'
import { useRouter } from 'next/router';
const reciept = () => {

// const {bookRes, SetBookRes} = useContext(BookRes);
const [bookRes,SetBookRes] = useState([]);
const [result, setResult] = useState([]);

const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }

if (process.browser){
    var results = JSON.parse(localStorage.getItem("marker"));
    console.log(results);
    if (result.length ==0){
      setResult(results);
    }
}

  return (
    <div>

    </div>
  )
}

export default reciept