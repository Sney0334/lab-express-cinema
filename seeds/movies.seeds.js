const mongoose = require('mongoose')
const Movie = require('../models/Movie.model')

const data = require('../data.json');

MONGO_URI = "mongodb://localhost/lab-express-cinema";

const keepMovies = async () => {
    try{
        console.log("connecting to data base...");
        await mongoose.connect(MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex: true
            }) 
            //await Movie.deleteMany()
            const newMovies = data
            await Movie.create(newMovies)
            console.log(`created ${newMovies} movies`)
    }catch(err){
        return err
    }
    console.log("falling back from data base...");
    mongoose.disconnect()
}

keepMovies()