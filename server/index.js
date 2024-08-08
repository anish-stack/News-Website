const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');
const NewsRouter = require('./routes/Routes');
const Counter = require('./models/Counter');
const bodyParser = require('body-parser');
// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Middleware setup
// Enable CORS
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));


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

app.get('/api/visit-count', async (req, res) => {
    try {
        let counter = await Counter.findOne();

        if (!counter) {
            counter = new Counter({ count: 1 });
        } else {
            counter.count += 1;
        }

        await counter.save();
        res.json({ count: counter.count });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});
// Start the server
const port = process.env.PORT || 5000;
connectDatabase()
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
