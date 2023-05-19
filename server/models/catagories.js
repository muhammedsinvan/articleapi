import mongoose from 'mongoose';

const catagorySchema = mongoose.Schema({
    name:({type:String,required:true})
})

const catagory = mongoose.model('catagory',catagorySchema)
export default catagory;