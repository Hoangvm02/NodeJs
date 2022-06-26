import mongoose, {ObjectId} from 'mongoose';

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    desc: {
        type: String,
        required: true
    },
    sale_price: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
    },
    status: {
        type: Number
    },
    category:{
        type: ObjectId,
        ref:'Category'
    }
},{timestamps:true})

export default mongoose.model('Product', productsSchema)