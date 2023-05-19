import article from "../models/article.js";

const deleteArticle = async (req,res)=>{
    try{
        let removeArticle = await article.findByIdAndDelete(req.params.id);
        res.json(removeArticle);
    }catch(error){
        res.status(500)
        res.json(error)
    }
}

export {deleteArticle}