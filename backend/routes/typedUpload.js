let express = require("express");
const recipeAPI = require('../api/recipe')

const mongoose = require("mongoose")
const Ingredient = require("../models/ingredient")

let router = express.Router();

router.post('/', async (req, res) => {
    console.log("inside typedUpload")
    console.log(req.body)
    if (req.body)
    {   

        data = req.body.ingredients;
        
        console.log("typedUpload data: " + data);

        let awaitData = await recipeAPI.getRecipe(data)

        let recipes = JSON.parse(awaitData)

        let completeData = {ingredients: data, recipeList: recipes}

        // creates ingredient schema
        const ingredientList = new Ingredient({
            ingredients: data
        })

        //saves to database
        ingredientList.save()
            .then(result => {
                console.log("typedUpload: success")
                console.log("saved to db from typedUpload")
            })
            .catch(err => {
                console.log(err)
            })

        res.send(completeData)
    }
})

module.exports = router;