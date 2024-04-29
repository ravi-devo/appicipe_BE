const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    }
});
const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: [ingredientSchema],
        required: true
    },
    instructions: {
        type: [String],
        required: true
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;