// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import db from "../../utils/db";
import {thisSet} from "../nyama"; 

export default async function handler(req, res) {
 // await db.connect();
 // await db.disconnect();
 console.log(thisSet);
  res.status(200).json({ name: 'John Doe' })
}
