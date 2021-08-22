let express = require("express");
const upload = require('express-fileupload')
const recipeAPI = require('../api/recipe')

const mongoose = require("mongoose")
const Ingredient = require("../models/ingredient")

let router = express.Router();

router.get("/", (req, res) => {
    Ingredient.find()
        .then(async result => {
            console.log("got ingredients from db")

            let ingredientsList = [];

            for (let i = 0; i < result.length; i++)
            {
                let temp = ingredientsList.concat(result[i].ingredients)
                ingredientsList = temp;
            }

            let awaitData = await recipeAPI.getRecipe(ingredientsList)

            let recipes = JSON.parse(awaitData)

            if (recipes)
                console.log("finished getAllRecipes")

            res.send(recipes);
        })
        .catch(err => {
            console.log(err);
            res.send(err)
        })
})

module.exports = router;