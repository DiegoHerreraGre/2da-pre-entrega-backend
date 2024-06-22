import {Router} from "express";
import {userModel} from "../models/users.model.js";

const router = Router();

router
	.route("/")
	.get(async (req, res) => {
		try {
			const users = await userModel.find();
			res.status(200).json({message: "success", payload: users});
		} catch (error) {
			console.error(error);
			res.status(500).json({message: "error", error: error.message});
		}
	})
	.post(async (req, res) => {
		try {
			let {password, name, email} = req.query;
			const newUser = new userModel({password: password, name: name, email: email});
			const savedUser = await newUser.save();
			res.status(201).json({status: "success", payload: savedUser});
		} catch (error) {
			console.error(`Error: ${error.message}`);
			res.status(500).json({status: "Error", msg: "Internal server error"});
		}
	})
	.delete(async (req, res) => {
		try {
			const {id} = req.query;
			const deletedUser = await userModel.findByIdAndDelete(id);
			if (!deletedUser)
				return res
					.status(404)
					.json({status: "Error", msg: "User not found"});

			res.status(200).json({status: "success", payload: deletedUser});
		} catch (error) {
			console.error(`Error: ${error.message}`);
			res.status(500).json({status: "Error", msg: "Internal server error"});
		}
	})
	.patch(async (req, res) => {
		try {
			const {id} = req.query;
			const {password, name, email} = req.query;
			const user = await userModel.findByIdAndUpdate(id, {password: password, name: name, email: email});
			if (!user) return res.status(404).json({status: "Error", msg: "User not found"});
			res.status(200).json({status: "success", payload: user});
		} catch (error) {
			console.error(error);
			res.status(500).json({status: "Error", msg: "Internal server error"});
		}
	}).put(async (req, res) => { // En teoría esto sería la lógica para hacer el agregado, aunque Mongo DB tiene una estructura bastante estática
	try {
		const {id} = req.query;
		const {password, name, email} = req.query;
		const user = await userModel.findById(id);
		if (!user)
			return res
				.status(404)
				.json({status: "Error", msg: "User not found"});

		user.password = password;
		user.name = name;
		user.email = email;

		await user.save();

		res.status(200).json({status: "success", payload: user});
	} catch (error) {
		console.error(error);
		res.status(500).json({status: "Error", msg: "Internal server error"});
	}
})

export default router;