import nc from "next-connect"
import db from "../../utils/db";
import Hotel from "../../models/hotels";
import Work from "../../models/testMongo";

const handler = nc();

handler.get (async(req, res) =>{

    const searchVal = req.query.name;

    await db.connect();
    const hotels = await Work.find({$text:{$search: searchVal}}); 
    await db.disconnect();
    res.send(hotels);
})

export default handler;