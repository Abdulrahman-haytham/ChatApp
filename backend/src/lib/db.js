import moggoose from "mongoose";

export const connectDB=async()=>{
    try {

       const conn= await moggoose.connect(process.env.MongoURI);
       console.log(`MongoDB connected:${conn.connection.host}`)
        
    } catch (error) {
        console.log("MongoDB connection error ", error)
    }
}