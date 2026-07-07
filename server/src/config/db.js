import mongoose, { mongo } from 'mongoose'
import 'dotenv/config'; 

const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/skribble')
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(err){
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }

};
connectDB();
export default connectDB;