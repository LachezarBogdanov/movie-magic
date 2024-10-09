import { Schema, model, Types } from "mongoose";

const movieSchema = new Schema({
    _id: String,
    title: String,
    genre: String,
    director: String,
    year: Number,
    imageUrl: String,
    rating: Number,
    description: String,
    casts: [{
        character: String,
        cast: {
            type: Types.ObjectId,
            ref: 'Cast'
        }, 
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    }
});

const Movie = model('Movie', movieSchema);

export default Movie;