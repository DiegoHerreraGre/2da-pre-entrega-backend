import mongoose from "mongoose";
export const connectMongoDB = async () => {
  try {
    mongoose.connect("mongodb+srv://diegoherreragre:zamtin-kesmUt-2tuvca@coderhousebackend1.jsndvou.mongodb.net/?retryWrites=true&w=majority&appName=CoderhouseBackend1");
    console.log("Mongo DB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};