import mongoose, { Schema } from "mongoose";

const assignmentSchema = new Schema({
  topic: {type: String, required: true}, // Name or description of the assignment
  maxScore: Number,     // Maximum score possible for the assignment
}
,{timestamps: true});

export default mongoose.model("Assignment", assignmentSchema);