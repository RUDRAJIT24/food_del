import mongoose from "mongoose"

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://rudrajitsaharoy24:hQ9ZMDfYbNUMLhEF@cluster0.jyxks.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}