import article from "../models/article.js";
import catagory from "../models/catagories.js";

const createArticle = async (req,res)=>{
    console.log(req.body)
    try{
        const newarticle = new article(req.body)
        const articleAdded = await newarticle.save()
        res.json(articleAdded);
    }catch(error){
        res.status(500)
        res.json(error)
    }
}

const createCatagory = async (req,res)=>{
    try{
        const newcatagory = new catagory(req.body)
        const catagoryAdded = await newcatagory.save()
        res.json(catagoryAdded);
    }catch(error){
        res.status(500)
        res.json(error)
    }
}

export {createArticle,createCatagory}