import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./connection/db.js";
import router from "./routers/routes.js";

dotenv.config();
const app = express();

connectDb();

app.use(express.json({limit:'25mb'}));
app.use(express.urlencoded({limit:'25mb',extended:true}))
app.use(cors())

app.use('/',router)

app.listen(4000,()=>{
    console.log(`server started at 4000`)
})