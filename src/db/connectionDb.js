import mongoose from "mongoose";

export const connectionDb = async()=>{
    try {
        await mongoose.connect("mongodb+srv://Blogify:oK6v0WeLdAhVhZ5K@cluster0.vs8qetu.mongodb.net/Blogify");
        console.log("mongoDb is connected")
    } catch (error) {
        console.log(error)
        throw error
    }
}