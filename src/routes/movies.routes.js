import {Router} from "express";
import {moviesModel} from "../models/movies.models.js";

const router = Router();

router
	.route("/")
	.get(async (req, res) => {
		try {
			const movies = await moviesModel.find().limit(5); // Limite porque si no, no se carga todas las películas por exceso de información
			res.status(200).json({message: "success", payload: movies});
		} catch (error) {
			console.error(error);
			res.status(500).json({message: "error", error: error.message});
		}
	})
	.post(async (req, res) => {
		try {
			let {title, genre, directors} = req.query;
			const newMovie = new moviesModel({title: title, genre: genre, directors: directors});
			const savedMovie = await newMovie.save();
			res.status(201).json({status: "success", payload: savedMovie});
		} catch (error) {
			console.error(`Error: ${error.message}`);
			res.status(500).json({status: "Error", msg: "Internal server error"});
		}
	})
	.delete(async (req, res) => {
		try {
			const {id} = req.query;
			const deletedMovie = await movieModel.findByIdAndDelete(id);
			if (!deletedMovie)
				return res
					.status(404)
					.json({status: "Error", msg: "Movie not found"});

			res.status(200).json({status: "success", payload: deletedMovie});
		} catch (error) {
			console.error(`Error: ${error.message}`);
			res.status(500).json({status: "Error", msg: "Internal server error"});
		}
	})
	.patch(async (req, res) => {
		try {
			const {id} = req.query;
			const {title, genre, directors} = req.query;
			const movie = await moviesModel.findByIdAndUpdate(id, {title: title, genre: genre, directors: directors});
			if (!movie) return res.status(404).json({status: "Error", msg: "Movie not found"});
			res.status(200).json({status: "success", payload: movie});
		} catch (error) {
			console.error(error);
			res.status(500).json({status: "Error", msg: "Internal server error"});
		}
	})
	.put(async (req, res) => {
		try {
			const {id} = req.query;
			const {title, genre, directors} = req.query;
			const movie = await moviesModel.findById(id);
			if (!movie)
				return res
					.status(404)
					.json({status: "Error", msg: "Movie not found"});

			movie.title = title;
			movie.genre = genre;
			movie.directors = directors;

			await movie.save();

			res.status(200).json({status: "success", payload: movie});
		} catch (error) {
			console.error(error);
			res.status(500).json({status: "Error", msg: "Internal server error"});
		}
	});


export default router; 

