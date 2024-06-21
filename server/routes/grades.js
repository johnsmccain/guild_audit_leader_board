import express from  'express';
const router = express.Router();
import Grade from '../models/Grades.js';
import User from '../models/User.js';
// import User from '../models/User.js';
// import Assignment from '../models/Assignment.js';
function sumFunc(grades){
    let sum = 0;
    for(let i = 0; i < grades.length; i++){
        sum += grades[i].score
    }
    return sum
}
// Create a new grade
router.post('/', async (req, res) => {
    const {studentId, assignmentId, score} = req.body;
    try {
         const grade = new Grade({student: studentId, assignment: assignmentId, score });
        const grades = await Grade.find({student: studentId}).populate("assignment");
        await User.findByIdAndUpdate(studentId, {avg: sumFunc(grades)/grades.length}, {new:true})
        await grade.save();
        res.status(201).send(grade);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all grades for a student
router.get('/students/:studentId', async (req, res) => {
    try {
        const grades = await Grade.find({ student: req.params.studentId }).populate('assignment');
        res.status(200).json(grades);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get all grades for an assignment
router.get('/assignments/:assignmentId', async (req, res) => {
    try {
        // console.log("before")
        const grades = await Grade.find({ assignment: req.params.assignmentId }).populate('student').populate("assignment");
        // console.log(grades)
        res.status(200).json(grades);
    } catch (error) {
        res.status(500).json(error);
    }
});


router.get('/', async (req, res) => {
    try {
        const grades = await Grade.find().populate('student').populate("assignment");
        res.status(200).json(grades);
    } catch (error) {
        res.status(500).json(error);
    }
});
router.delete('/', async (req, res) => {
    try {
        const grades = await Grade.deleteMany();
        res.status(200).json(grades);
    } catch (error) {
        res.status(500).json(error);
    }
});

export default router;
