import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title:{type: String, required: true},
    description:{type: String, required: true},
    status:{type: String, required: true},
    dueDate:{ type: String, required:true},
    priority:{type: String, required:true},
    assignedTo:{type: mongoose.Schema.Types.ObjectId,ref:'user'},
    project:{ type: mongoose.Schema.Types.ObjectId,ref:'user'}
})


 export const task = mongoose.model('task', taskSchema);


