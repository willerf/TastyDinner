require('dotenv').config()

const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const upload = require('express-fileupload')

const mongoose = require("mongoose")
const Ingredient = require("./models/ingredient")


const fileUpload = require('./routes/fileUpload')
const getIngredients = require('./routes/getIngredients')
const getAllRecipes = require('./routes/getAllRecipes')
const typedUpload = require('./routes/typedUpload')
const getPhotos = require('./routes/getPhotos')



const port = process.env.PORT || 3001;

const app = express()

// connect to mongoDB
let dbURI = `mongodb+srv://tastyDinner:${process.env.DATABASE_SECRET}@cluster0.f6yuh.mongodb.net/ingredients-info?retryWrites=true&w=majority`

// to fix the mongoose error stuff idk lol
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(dbURI).then(result => {
    console.log("connected to db")
    
    app.listen(port, function() {
        console.log("Runnning on " + port);
      });
})
.catch(err => console.log(err))

app.use(cors());
app.use(logger('dev'));

app.use(express.json());

app.use(upload())


// POST to file-upload
// saves file, does google vision, calls recipe api, saves to db, sends recipes to client
app.use('/file-upload', fileUpload)

// POST to typed-upload
// uses sent typed list to call recipe API, saves to db, sends recipe to client
app.use('/typed-upload', typedUpload)

// GET getting databse of ingredients
app.use('/getIngredients', getIngredients)

// GET recipes with all ingredients combined
app.use('/getAllRecipes', getAllRecipes)

// GET list of food photos with flickr API
app.use('/getPhotos', getPhotos)

// deletes all documents in Ingredients collection
app.get('/deleteDB', (req, res) => {
  Ingredient.deleteMany({}).then(data => console.log("successfully deleted"))
})