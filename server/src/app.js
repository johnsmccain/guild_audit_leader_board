import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import studentsRoute from "../routes/students.js"
import assignmentsRoute from "../routes/assignments.js"
import gradeRoute from "../routes/grades.js"
import dotenv from "dotenv"
const app = express()
const PORT = 5000;

dotenv.config();
app.use(express.json())
app.use(cors())

const MONGODBURI = 'mongodb://127.0.0.1:27017/leader-board'
// console.log(process.env.MONGODB_URI)
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(MONGODBURI)
        console.log("Connected to mogodb")
    } catch (error) {
        console.log("Can't connect to mogodb")
    }
}

app.use('/students', studentsRoute);
app.use('/assignments', assignmentsRoute);
app.use('/grades', gradeRoute);

app.use("*", async (req, res) => {
    res.status(404).json({data: "Not found"})
})
app.listen(PORT, ()=> {
    connectToMongoDB()
    console.log("App running on port " + PORT);
})
