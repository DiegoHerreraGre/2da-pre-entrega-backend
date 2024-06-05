import mongoose from "mongoose";

const clientsCollection = "clients";

const clientsSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  dni: String,
  age: Number,
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
});

export const clientsModel = mongoose.model(clientsCollection, clientsSchema);

