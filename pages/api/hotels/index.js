import nc from "next-connect"
import db from "../../../utils/db";
import Hotel from "../../../models/hotels";

const handler = nc();

handler.get (async(req, res) =>{
    await db.connect();
    const hotels = await Hotel.find({});
    await db.disconnect();
    res.send(hotels);
})

export default handler;