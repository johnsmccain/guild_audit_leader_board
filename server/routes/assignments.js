import express from 'express';
const router = express.Router();
import  Assignment from '../models/Assignments.js';


// Create a new assignment
router.post('/', async (req, res) => {
    const {topic} = req.body;
    try {
        const assignment = new Assignment({topic, maxScore: 100});
        await assignment.save();

        res.status(201).json(assignment);
    } catch (error) {
        res.status(400).json(error);
    }
});

// Get all assignments
router.get('/', async (req, res) => {
    try {
        const assignments = await Assignment.find();
        res.status(200).json(assignments);
    } catch (error) {
        res.status(500).json(error);
    }
});

export default  router;
