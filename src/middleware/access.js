function validaterole(req,res,next){
   const role="admin";
   if(role=="admin"){
    next();
   }
   res.json({message:"Access denied"})
}
module.exports=validaterole;