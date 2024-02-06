import mongoose, { Schema, Document} from "mongoose";

interface User extends Document {
    fname: string
    lname: string
    email: string
    password: string
}

const userSchema = new Schema ({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

export default User