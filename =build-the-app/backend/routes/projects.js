const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const db = require('../config/db'); // Database connection pool
const { formatErrorResponse } = require('../utils/errorHandler');

// Middleware to validate project data
const validateProjectData = [
  body('name').notEmpty().withMessage('Project name is required').trim().escape(),
  body('description').optional().trim().escape(),
  body('deadline').optional().isISO8601().toDate().withMessage('Invalid date format'),
];

// GET all projects
router.get('/', async (req, res) => {
  try {
    const [projects] = await db.query('SELECT * FROM projects ORDER BY created_at DESC');
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    console.error(error);
    res.status(500).json(formatErrorResponse('Error fetching projects'));
  }
});

// GET a specific project by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [project] = await db.query('SELECT * FROM projects WHERE id = ?', [id]);
    if (project.length === 0) {
      return res.status(404).json(formatErrorResponse('Project not found'));
    }
    res.status(200).json({ success: true, data: project[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json(formatErrorResponse('Error fetching project'));
  }
});

// CREATE a new project
router.post('/', validateProjectData, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(formatErrorResponse('Validation failed', errors.array()));
  }

  const { name, description, deadline } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO projects (name, description, deadline) VALUES (?, ?, ?)',
      [name, description, deadline]
    );
    res.status(201).json({ success: true, data: { id: result.insertId, name, description, deadline } });
  } catch (error) {
    console.error(error);
    res.status(500).json(formatErrorResponse('Error creating project'));
  }
});

// UPDATE a project by ID
router.put('/:id', validateProjectData, async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(formatErrorResponse('Validation failed', errors.array()));
  }

  const { name, description, deadline } = req.body;
  try {
    const [result] = await db.query(
      'UPDATE projects SET name = ?, description = ?, deadline = ? WHERE id = ?',
      [name, description, deadline, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json(formatErrorResponse('Project not found'));
    }
    res.status(200).json({ success: true, message: 'Project updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json(formatErrorResponse('Error updating project'));
  }
});

// DELETE a project by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query('DELETE FROM projects WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json(formatErrorResponse('Project not found'));
    }
    res.status(204).send(); // No content
  } catch (error) {
    console.error(error);
    res.status(500).json(formatErrorResponse('Error deleting project'));
  }
});

module.exports = router;