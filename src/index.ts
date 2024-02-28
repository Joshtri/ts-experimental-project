import express from "express";

const app = express();
const PORT = 3000;


app.get('/',(req,res)=>{
    res.send('hahaha');
});


app.listen(PORT,()=>{
    // tslint:disable-next-line:no-console
    console.log('server is fckn running');
})