import {request, response } from "express";
import {userModel} from "../models/users.model.js";
import * as console from "node:console";

export const IsUserInDB = async (newUser, req = request, res = response, next) => {
  try {
    const users = await userModel.find();
    for(let user of users){
      if(user.email === newUser.email){
        res.status(404).json({message: "Usuario ya existe en función"});
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "error", error: error.message});
  }
}