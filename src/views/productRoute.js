const express=require("express");
const productRouter=express.Router();
const {productRegister,getProductDetails,updateProduct,deleteProduct}=require('../controllers/productcontroller')
const validaterole=require('../middleware/access')
//register
productRouter.post('/addProduct',productRegister);
//get product
productRouter.get('/getProducts',validaterole,getProductDetails);
//update product
productRouter.put("/:id",updateProduct);
//delete product
productRouter.delete("/:id",deleteProduct)

module.exports=productRouter;