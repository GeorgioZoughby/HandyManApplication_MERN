// backend/models/User.js
const mongoose = require('mongoose');

// Define the schema for the user
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true  // Removes whitespace around the name
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Ensures no two users have the same email
        lowercase: true,  // Converts the email to lowercase for consistency
        match: [/.+\@.+\..+/, 'Please enter a valid email address']  // Basic email validation
    },
    password: {
        type: String,
        required: true,
        minlength: 6  // Basic length requirement for security
    },
    createdAt: {
        type: Date,
        default: Date.now  // Automatically sets the creation date
    }
});

// Create the model from the schema
const User = mongoose.model('User', userSchema);

// Export the model so it can be used in other parts of the application
module.exports = User;

