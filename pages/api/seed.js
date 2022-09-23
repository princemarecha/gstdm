import nc from "next-connect"
import db from "../../utils/db";
import Hotel from "../../models/hotels";
import data from "../../utils/data";


const handler = nc();

handler.get (async(req, res) =>{
    await db.connect();
    await Hotel.deleteMany();
    await Hotel.insertMany(data.hotels);
    await db.disconnect();
    res.send("seeded successfully");
   
})

export default handler;