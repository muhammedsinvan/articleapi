import express from 'express';
const router = express.Router();
import {createArticle,createCatagory} from '../helpers/create.js';
import {getCatagory,getArticle,getArticleByCatagory} from '../helpers/show.js';
import {editArticle} from '../helpers/edit.js'
import {deleteArticle} from '../helpers/delete.js'

router.post('/createarticle',createArticle)

router.post('/createcatagory',createCatagory)

router.get('/getcatagory',getCatagory)

router.get('/getarticle',getArticle)

router.patch('/editarticle/:id',editArticle)

router.delete('/deletearticle/:id',deleteArticle)

router.post('/getarticlebycatagory',getArticleByCatagory)

export default router;