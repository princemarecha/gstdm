require('dotenv').config({ path: 'ENV_FILENAME' });
import mongoose from "mongoose";

const connectMongo = async () => mongoose.connect(process.env.MONGO_URI);

export default connectMongo;        