import  mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {type: String, required: true},
    handle: {type: String,},
    avartar: String,
    avg: Number
});

export default mongoose.model("User", userSchema);