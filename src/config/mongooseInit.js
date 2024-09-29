import { connect } from "mongoose";

const dbUrl = 'mongodb://localhost:27017/movie-magic';

export default async function mongooseInit() {

    try {
        await connect(dbUrl);
        console.log('Connected to DB');
        
    } catch (error) {
        console.log('Error connecting to DB' + error.message);   
    }
}