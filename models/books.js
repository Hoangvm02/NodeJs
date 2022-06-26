import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 32
    },
    price: {
        type: Number,
        required: true
    },
    sale_price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category_id: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, {timestamps:true})
export default mongoose.model('Book', bookSchema)