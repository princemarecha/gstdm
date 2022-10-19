import { connectToDatabase } from "../../utils/mongodb";

export default async function handler (req, res){
    const {db} = await connectToDatabase();

    const searchVal = req.query.name;

    const data = await db.collection("works").aggregate(
        [
            {
              "$search": {
                "index": "default",
                "text": {
                  "query": searchVal,
                  "path": {
                    "wildcard": "*"
                  }
                }
              }
            }
          ]
    ).limit(20).toArray();
      
    res.json(data);
} 