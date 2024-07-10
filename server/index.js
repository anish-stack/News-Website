const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');
const NewsRouter = require('./routes/Routes');
// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Define a sample route
app.get('/', (req, res) => {
    res.send('Welcome to the News API');
});

app.use('/api/news', NewsRouter);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
const port = process.env.PORT || 5000;
connectDatabase()
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
