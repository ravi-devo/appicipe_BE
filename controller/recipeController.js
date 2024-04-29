const Recipe = require('../model/recipeModel');
const recipeController = {
    createRecipe: async (req, res) => {
        try {
            const response = await Recipe.create(req.body);
            res.status(201).json({ message: 'Recipe created successfully', data: response})
        } catch (error) {
            res.status(500).json({ message: 'There was an error while creating a recipe', error });
        }
    },
    getAllRecipe: async (req, res) => {
        try {
            const response = await Recipe.find();
            res.status(200).json({ message: 'Recipe retrieved successfully', data: response});
        } catch (error) {
            res.status(500).json({ message: 'Internal server error.', error });
        }
    }
}

module.exports = recipeController;
