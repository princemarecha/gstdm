import connectMongo from '../../../utils/connectMongo';
import Test from '../../../models/testMongo'
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default  async function addTest(req, res) {
    
  try{
    console.log('Connecting to Mongo');
    await connectMongo();
    console.log('Connected to Mongo');

    console.log('Creating Document');   
    const test = await Test.insertMany(req.body);
    console.log('Created Document'); 

    res.json({test})
  }
  catch(error){
    console.log(error)
    res.json({error})
  }
  }
  