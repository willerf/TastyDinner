let express = require("express");
const upload = require('express-fileupload')
const recipeAPI = require('../api/recipe')
const visionAPI = require('../api/textDetect')

const mongoose = require("mongoose")
const Ingredient = require("../models/ingredient")

let router = express.Router();

router.post('/', (req, res) => {
    if (req.files) {
        console.log("inside fileUpload")
        
        let file = req.files.test
        let fileName = file.name

        console.log("fileName: " + fileName)

        file.mv('./resources/' + fileName, async (err) => {
            if (err)
            {
                console.log(err)
                res.send(err)
            }
            else
            {
                console.log("file uploaded")
                
                let writtenText = await visionAPI.textDetect(fileName)

                let awaitData = await recipeAPI.getRecipe(writtenText)

                let recipes = JSON.parse(awaitData)

                let completeData = {ingredients: writtenText, recipeList: recipes}

                // creates ingredient schema
                const ingredientList = new Ingredient({
                    ingredients: writtenText
                })

                //saves to database
                ingredientList.save()
                    .then(result => {
                        console.log("fileUpload: success")
                        console.log("saved to db in fileUpload")
                    })
                    .catch(err => {
                        console.log(err)
                    })

                res.send(completeData)
            }
        })
    }
})

module.exports = router