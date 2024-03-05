import mongoose, { Schema, Document} from "mongoose";

interface Contact extends Document {
    user: Schema.Types.ObjectId
    address: string,
    pincode: number,
    city: string,
    state: string,
    country: string,
    phoneNo: string
}

const contactSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
}, {timestamps: true})

const Contact = mongoose.model<Contact>('Contact', contactSchema)
export default Contact