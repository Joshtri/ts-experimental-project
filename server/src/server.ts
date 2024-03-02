import app from "./app";
import "dotenv/config";
import env from "./util/validateEnv";
import mongoose from "mongoose"
import express from "express";

// const app = express();
const PORT = env.PORT;

// app.get('/', (req,res)=>{
//   res.render('first code');  
// })

mongoose.connect(env.MONGO_CONNECTION_STRING).then(()=>{
  console.log('Mongoose connected');
  app.listen(PORT,()=>{
      console.log('server running on port '+ PORT);
  })
}).catch(console.error);
