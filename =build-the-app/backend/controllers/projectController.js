import Project from '../models/Project.js';
import { validationResult } from 'express-validator';

// Create a new project
export const createProject = async (req, res) => {
    try {
        // Validate and sanitize incoming request data
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, description } = req.body;

        // Create a new project instance
        const newProject = new Project({
            name,
            description,
            user: req.user.id, // Assuming the user ID is stored in req.user
        });

        // Save project to the database
        const savedProject = await newProject.save();

        return res.status(201).json(savedProject);
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all projects
export const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().populate('user', 'username');
        res.status(200).json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get a project by ID
export const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id).populate('user', 'username');
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (error) {
        console.error('Error fetching project:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Update a project
export const updateProject = async (req, res) => {
    try {
        // Validate and sanitize incoming request data
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, description } = req.body;

        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id,
            { name, description },
            { new: true, runValidators: true }
        );

        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json(updatedProject);
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a project
export const deleteProject = async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);

        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).json({ message: 'Server error' });
    }
};