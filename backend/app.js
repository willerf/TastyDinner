const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const upload = require('express-fileupload')

const recipeAPI = require('./api/recipe')

// google cloud stuff

// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');
  // Creates a client
const client = new vision.ImageAnnotatorClient();


const port = process.env.PORT || 3001;

const app = express()

app.use(cors());
app.use(logger('dev'));


app.listen(port, function() {
    console.log("Runnning on " + port);
  });

async function textDetect(fileName) {
    
    // Performs label detection on the image file
    const [result] = await client.textDetection(`./resources/${fileName}`);
    const labels = result.textAnnotations;
    console.log('Text:');
    let descriptionArr = [];
    let removeFirst = false;

    labels.forEach(label => {
        if (removeFirst == false)
        {
            console.log("haha")
            removeFirst = true;
        }
        else
            descriptionArr.push(label.description)
    });

    return descriptionArr;
}

app.use(upload())


app.post('/file-upload', (req, res) => {
    if (req.files) {
        console.log(req.files)

        console.log(req.files.test)
        
        let file = req.files.test

        let fileName = file.name

        console.log(fileName)

        file.mv('./resources/' + fileName, async (err) => {
            if (err)
            {
                console.log(err)
                res.send(err)
            }
            else
            {
                console.log("file uploaded")
                
                let writtenText = await textDetect(fileName)

                console.log(writtenText)
                let token = 'cd40c85971e24d75b5c63fb6d3299882';

                let awaitData = await recipeAPI.getRecipe(token, writtenText)

                let recipes = JSON.parse(awaitData)

                console.log(recipes)

                /*
                textDetect(fileName).then(async data => {
                    console.log("after labelDetect:")
                    console.log(data);
                    let token = 'cd40c85971e24d75b5c63fb6d3299882';

                    let awaitData = await recipeAPI.getRecipe(token, data)
                    
                    let recipes = JSON.parse(awaitData)

                    console.log(recipes)
                })*/

                let completeData = {ingredients: writtenText, recipeList: recipes}

                res.send(completeData)
            }
        })
    }
})