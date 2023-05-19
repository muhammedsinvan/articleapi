import catagory from "../models/catagories.js";
import article from "../models/article.js";

const getCatagory =async (req,res)=>{
    try{
        let allCatagory = await catagory.find({})
        res.json(allCatagory)
    }catch(error){
        res.status(500)
        res.json(error)
    }
}

const getArticle =async (req,res)=>{
    try{
        let allArticle = await article.find({})
        res.json(allArticle)
    }catch(error){
        res.status(500)
        res.json(error)
    }
}

const getArticleByCatagory = async(req,res)=>{
    try{
        let articleByCatagory = await article.find({categories:req.body.name})
        res.json(articleByCatagory)
    }catch(error){
        res.status(500)
        res.json(error)
    }
}


export {getCatagory,getArticle,getArticleByCatagory};