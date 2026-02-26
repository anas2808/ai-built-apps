const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Database connection string
const DB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        // Connect to MongoDB using the connection URI
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            poolSize: 5, // Create a pool of 5 connections
            useCreateIndex: true, // Create indexes automatically
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        // Exit the process with failure
        process.exit(1);
    }
};

// Export the connectDB function for use in other files
module.exports = connectDB;