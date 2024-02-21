import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "Please Provide a firstname"],
    },
    lastname: {
        type: String,
        required: [true, "Please Provide a lastname"],
    },
    username: {
        type: String,
        required: [true, "Please Provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required:  [true, "Please Provide an email"],
        unique:true,
    },
    password: {
        type: String,
        required: [true, "Please Provide a Password"],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
}, { timestamps: true });

export const User = mongoose.models.user || mongoose.model("user", userSchema);