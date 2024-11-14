
import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    questionId:{
        type:String,
        required:true,
        unique:true
    },
    questionName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    inputFormat:{
        type:[String],
        require:true
    },
    outputFormat:{
        type:[String],
        require:true
    },
    constrains:{
        type:[String],
        require:true
    },
    difficuty:{
        type:Number,
        required:true
    },
    usersSolved:{
        type:[String]
    }
});


export const Questions = mongoose.model('Questions',questionSchema);