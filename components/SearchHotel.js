import axios from "axios";
import React, { useEffect } from "react";
import multiplyRooms from "../scripts/homeRooms";
import { useState } from "react";

const SearchHotel = () => {

  const [loading, setLoading] = useState(false);
  const [hots, setHots] = useState([]);
  const [searchTitle, setSearchTitle] = useState([]);

  useEffect(() => {
    const LoadHots = async() =>{
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/hotels");
      setHots(response.data);
      console.log(response.data);
      setLoading(false);
    }

    LoadHots();
  },[]);

 // var arr = [1,2,3,4,5,6,7,8,9,10];

  const yep = () => {
  console.log(hots);
}
  return (
    <div>

    </div>
  );
};

export default SearchHotel;
