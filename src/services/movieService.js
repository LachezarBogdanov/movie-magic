import Movie from '../models/Movie.js'


const getAll = async (filter = {}) => {
    let moviesQuery = await Movie.find();

    if(filter.search) {
        moviesQuery = moviesQuery.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()));
    }

    if(filter.genre) {
        moviesQuery = moviesQuery.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
    }

    if(filter.year) {
        moviesQuery = moviesQuery.filter(movie => movie.year === filter.year);
    }
    
    return moviesQuery;
}

const create = (movie, ownerId) => Movie.create({ ...movie, owner: ownerId });

const getOne = (movieId) => Movie.findById(movieId).populate('casts.cast');

const attach = (movieId, castId, character) => {
    return Movie.findByIdAndUpdate(movieId, { $push: { casts: {cast: castId, character } } });
};

const remove = (movieId) => Movie.findByIdAndDelete(movieId);

const edit = (movieId, data) => Movie.findByIdAndUpdate(movieId, data);


export default {
    getAll,
    create,
    getOne,
    attach,
    remove,
    edit,
}