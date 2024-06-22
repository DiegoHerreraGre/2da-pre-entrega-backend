import mongoose from "mongoose";import dotenv from 'dotenv';dotenv.config();let user = process.env.USER_MONGODB;let password = process.env.PASSWORD_MONGODB;let db = process.env.DB_MONGODB;let stringConnection = "mongodb+srv://" + `${user}:${password}` + "@cluster0.rl2v8sy.mongodb.net/"+`${db}`+"?retryWrites=true&w=majority&appName=Cluster0";console.log(stringConnection);export const connectMongoDB = async () => {  try {    mongoose.connect(stringConnection);    console.log("Mongo DB connected");  } catch (error) {    console.error(error);    process.exit(1);  }};