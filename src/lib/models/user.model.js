import mongoose from "mongoose";
// import { unique } from "next/dist/build/utils";
// import { type } from "os";

const userSchema = new mongoose.Schema(
    {
        clerkId :{
            type:String,
            required:true,
            unique:true,
        },
        email:{
            type:String,
        },
        firstName:{
            type:String,
            require:true,
        },
        lastName:{
            type:String,
            require:true,
        },
        username:{
            type:String,
            require:true,

        },
        avatar:{
            type:String,
            require:true,
        },
        followers:{
            type:[{type:mongoose.Schema.type.ObjectId,ref:'User'}],
            default:[],
        },

    },
    {timestamps:true}
);
const User=mongoose.models.User||mongoose.model('User',userSchema);

export default User;