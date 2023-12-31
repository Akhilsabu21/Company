import express from 'express';
import env from 'dotenv';
import connection from './connection.js';
import router from './router.js';

env.config();
const app =express();
app.use(express.json())
app.use("/api",router)
connection()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("SERVER STARTED");
    })
}).catch((error)=>{
    console.log(error);
})