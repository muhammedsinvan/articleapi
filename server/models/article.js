import mongoose from 'mongoose';

const addArticleSchema = mongoose.Schema({
    heading:({type:String,required:true}),
    readtime:({type:String,required:true}),
    description:({type:String,required:true}),
    categories:({type:String,required:true}),
    type:({type:String,required:true}),
    image:({type:String,required:true}),
})

const article = mongoose.model('article',addArticleSchema)
export default article;