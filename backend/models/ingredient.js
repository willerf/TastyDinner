const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ingredientSchema = new Schema({
    ingredients: {
        type: Array,
        required: true
    }
}, { timestamps: true })

const Ingredient = mongoose.model('Ingredient', ingredientSchema)

module.exports = Ingredient