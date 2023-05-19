import article from "../models/article.js";

const editArticle = async (req,res)=>{
    try{
        let editedArticle = await article.findByIdAndUpdate(req.params.id,req.body)
        await res.json(editedArticle)
    }catch(error){
        res.status(500)
        res.json(error)
    }
}

export {editArticle}