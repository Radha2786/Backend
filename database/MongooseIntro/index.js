const mongoose = require('mongoose');
// connecting my app database

// The connect() function also accepts a callback parameter and returns a promise.

mongoose.connect('mongodb://127.0.0.1:27017/MovieApp').then(()=>{
    console.log('connection open!!');
}).catch((err)=>{
    console.log('something went wrong');
    console.log(err);
})
// creating schema
// maps the document coming from the mongodb database into the usable js object
const movieSchema = new mongoose.Schema({
    name:String,
    year:Number,
    rating:Number,
    isWatched:Boolean
});

// to define a model we need to have schema first
// creating model
const Movie=mongoose.model('Movie',movieSchema);

// that model actually represents collection in a database 



// creating object and inserting it

// const Ironman = new Movie({name:'Wonderwoman',year:2004,rating:8,isWatched:true})

// Ironman.save().then((m)=>{
//     console.log(m);
//     console.log('saved successfully');
// }).catch((err)=>{
//     console.log(err);
// });

//----------creating array and using insertMany function----------------
// const arr =[
//     {
//     name:'Ironman',
//     year:2004,
//     rating:7,
//     isWatched:false
//     },
//     {
//     name:'Spiderman',
//     year:2000,
//     rating:9,
//     isWatched:true 
//     },
//     {
//         name:'Gadar',
//         year:1997,
//         rating:10,
//         isWatched:true 
        
//     }]
    // Movie.insertMany(arr).then((movies)=>{
    //     console.log(movies);
    // }).catch((err)=>{
    //     console.log(err);
    // })

//---------- collection.create method ----------------

    Movie.create([{
        name:'Twilight',
        year:1996,
        rating:6.5,
        iswatched:false
    },
    {
        name:'50 shades of grey',
        year:1996,
        rating:6.5,
        iswatched:false  
    }
]).then((m)=>{
    console.log(m);
    console.log('saved');
})

//--------find method------------------ 
// model.find()
// findbyid()
// findone()

//------------Update Method----------
// updateOne()
// updateMany()
// findOneandUpdate()


//------------Delete Method--------
// DeleteOne()
// DeleteMany()

// -------------validation---------






