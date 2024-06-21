import express from "express";
import User from "../models/User.js";
import Assignments from "../models/Assignments.js";
import Grades from "../models/Grades.js";
const router = express.Router();

router.get("/", async (req, res) => {
    const user = await User.find();
    return res.status(200).json(user);
})
router.post("/", async (req, res) => {
    const {name} = req.body;
    const user = new User({name, avartar:`https://api.multiavatar.com/${name}.svg`, avg: 0});
    await user.save();
    return res.status(200).json(user);
})
router.get("/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    return res.status(200).json(user);
})
router.delete("/:id", async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.status(200).json(user);
})

export default router;