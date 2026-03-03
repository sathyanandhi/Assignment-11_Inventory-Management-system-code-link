const express=require("express");
const app=express();
const productRouter=require('./src/views/productRoute')
app.use(express.json());

const port=8080;
// require('dotenv').config();
// const port=process.env.PORT;
app.get('/',(req,res)=>{
    res.end("Welcome to Inventory management system")
})
//  app.use((req,res,next)=>{
//     console.log("Middleware running");
//       next();
    
//  })
//  app.get("/get",(req,res)=>{
//     console.log("Welcome to the server");
    
//  })
// app.use("/product",userRouter)
app.use('/product',productRouter);
app.listen(port,()=>console.log("Server running in ",port))