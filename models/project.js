import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name:{type: String, required:true},
    description: {type: String, required: true},
    createdBy: {type: mongoose.Schema.Types.ObjectId,ref:'user'}
})


export const project = mongoose.model('project', projectSchema)
