const express = require('express');
const router = express.Router();
const recipeController = require('../controller/recipeController');

router.post('/', recipeController.createRecipe);
router.get('/', recipeController.getAllRecipe);

module.exports = router;