import mongoose from "mongoose";

const moviesCollection = "movies";

const moviesSchema = new mongoose.Schema({
	plot: String,
	genres: Array,
	runtime: Number,
	cast: Array,
	poster: String,
	title: String,
	fullplot: String,
	languages: Array,
	released: Date,
	directors: Array,
	rated: String,
	awards: {
		wins: Number,
		nominations: Number,
		text: String,
	},
	lastupdated: Date,
	year: Number,
	imdb: {
		rating: Number,
		votes: Number,
		id: Number,
	},
	countries: Array,
	type: String,
	tomatoes: {
		viewer: {
			rating: Number,
			numReviews: Number,
			meter: Number,
		},
		fresh: Number,
		critics: {
			rating: Number,
			meter: Number,
			numReviews: Number,
		},
		rotten: Number,
		lastupdated: Date,
	},
	num_mflix_comments: Number,
})
export const moviesModel = mongoose.model(moviesCollection, moviesSchema);

/*Solo copié la estructura de la DATA SAMPLE que cargué a Mongo DB, pero para el ejercicio
* que se haría desde POSTMAN usé solo algunas características para cumplir el cometido
* @params => {director, genre, title} */