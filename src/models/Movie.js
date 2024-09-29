import { Schema, model } from "mongoose";

const movieSchema = new Schema({
    _id: String,
    title: String,
    genre: String,
    director: String,
    year: Number,
    imageUrl: String,
    rating: Number,
    description: String,
});

const Movie = model('Movie', movieSchema);

export default Movie;