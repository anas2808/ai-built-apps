const mongoose = require('mongoose');

// Define the Project schema
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Project title is required'],
        trim: true,
        maxlength: [100, 'Project title cannot exceed 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Project description is required'],
        trim: true,
        maxlength: [500, 'Project description cannot exceed 500 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Project owner is required']
    },
    status: {
        type: String,
        enum: ['active', 'completed', 'archived'],
        default: 'active'
    },
    budget: {
        type: Number,
        required: [true, 'Project budget is required'],
        min: [0, 'Budget must be a positive number']
    }
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

// Create indexes for better performance
projectSchema.index({ title: 1 });
projectSchema.index({ owner: 1 });
projectSchema.index({ status: 1 });

// Export the Project model
module.exports = mongoose.model('Project', projectSchema);