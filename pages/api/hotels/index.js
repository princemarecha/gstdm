import nc from "next-connect"
import db from "../../../utils/db";
import Hotel from "../../../models/hotels";
import Work from "../../../models/testMongo";

const handler = nc();

handler.get (async(req, res) =>{

    const page = req.query.page || 0

    const hotPerPage = 8 

    await db.connect();
    const hotels = await Work.find({})
    .skip(page * hotPerPage)
    .limit(hotPerPage)

    await db.disconnect();
    res.send(hotels);
})

export default handler;