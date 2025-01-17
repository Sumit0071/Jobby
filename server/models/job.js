import mongoose from "mongoose";
const jobSchema = new mongoose.Schema( {
    date: { type: Date, default: Date.now },
    link: { type: String, required: true },
    title: { type: String, required: true },
    description:{type:String,required:true},
    usersApplied: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
} )
const Job = mongoose.model( 'Job', jobSchema );
export default Job