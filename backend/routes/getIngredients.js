let express = require("express");

const mongoose = require("mongoose")
const Ingredient = require("../models/ingredient")

let router = express.Router();

router.get('/', (req, res) => {
    Ingredient.find()
        .then(result => {
            console.log("getIngredients: success")

            res.send(result)
        })
        .catch(err => {
            console.log(err);
            res.send(err)
        })
})

module.exports = router;