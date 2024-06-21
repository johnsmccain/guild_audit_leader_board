import mongoose, { Schema } from "mongoose";

const gradeSchema =  new Schema({
  student: {type: Schema.Types.ObjectId, ref: "User"},
  assignment: {type: Schema.Types.ObjectId, ref: "Assignment"},
  score: Number,
},{timestamps: true}
)

export default mongoose.model("Grades", gradeSchema);