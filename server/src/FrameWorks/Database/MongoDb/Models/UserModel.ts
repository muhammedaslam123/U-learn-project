import mongoose from 'mongoose'
import validator from "validator";

const UserSchema = new mongoose.Schema({
    Fname: {
        type: String,
        required: true,
    },
    Lname: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        validator : [validator.isEmail,"Invalid Email"]
    },
    Phone: {
        type: Number,
        required: true,
        unique:true,
        validator: [
            {
                validator: function(value: string ) {
                    return /^\d{10}$/.test(value)
                },
                message: "Invalid Number" 
            }
        ]
    },
    Password: {
        type: String,
        required: true,
    },
    ConfirmPassword: {
        type: String,
        required: true,
    },
    uid:{
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    }
})

const userModel = mongoose.model('users', UserSchema)
export default userModel;