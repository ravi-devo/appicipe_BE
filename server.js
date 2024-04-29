const express = require("express");
const connectDB = require('./databaseConnection/db');
const dotenv = require("dotenv");
const recipeRoutes = require('./routes/recipeRoutes');
const cors = require("cors");

dotenv.config();
const port = 8000;
connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/recipe', recipeRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
