import Cast from "../models/Cast.js"

const create = (cast) => Cast.create(cast);

const getAll = () => Cast.find();

// const getAllWithout = (casts) => {    
//     const castIds = casts.map(cast => cast.cast._id);

//     return Cast.find().nin('_id', castIds);
// }

export default {
    create,
    getAll,
}