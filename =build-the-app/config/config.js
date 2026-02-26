import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Configuration object to hold all the config values
const config = {
    PORT: process.env.PORT || 5000,
    DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/myapp',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_URL: process.env.API_URL || '/api',
};

// Function to validate required environment variables
const validateConfig = () => {
    const requiredConfigs = ['DATABASE_URL', 'JWT_SECRET'];
    requiredConfigs.forEach((key) => {
        if (!config[key]) {
            throw new Error(`Missing required environment variable: ${key}`);
        }
    });
};

// Validate the configuration values
validateConfig();

// Export the config object
export default config;