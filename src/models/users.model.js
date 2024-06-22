import mongoose from "mongoose";

let userCollection = 'users';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

export const userModel = mongoose.model(userCollection, userSchema);