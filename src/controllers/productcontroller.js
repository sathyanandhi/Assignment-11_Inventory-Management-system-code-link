const storage=require('../models/products')
//add products data
const productRegister=(req,res)=>{
    try{
    const {productName,description,Stock}=req.body;
    if(!productName||!description||!Stock){
        return res.status(400).json({message:"All fields are require"})
    }
   const newProducts={
    id:storage.length? storage[storage.length-1].id+1:1,
    productName,
    description,
    Stock
   }
  storage.push(newProducts)
  res.status(201).json({message:"Products Registered Succussfully" })
    }
    catch(error)
    {

    }

}

// get products data
const getProductDetails=(req,res)=>{
    return res.status(200).json(storage);
}
//update product data
const updateProduct=(req,res)=>{
    const id= parseInt(req.params.id);
      const { productName, description, Stock }=req.body;
      const update=storage.find((product)=>product.id === id)
      if (update) {
        update.productName=productName ?? update.productName;
        update.description=description ?? update.description;
        update.Stock=Stock ?? update.Stock;
    res.status(200).json({ messge: "Product get updated" });
      }
else{
    res.status(400).json({message:"Product Not found"})
}

}

// Delete product
const deleteProduct=(req,res)=>{
    const id=parseInt(req.params.id);
    const index= storage.findIndex((product)=>product.id === id)
    if(index!==-1){
        const deletedproduct=storage.splice(index,1)
        res.status(200).json({message:"Product Deleted Successfully"})
    }
   else{
    res.status(400).json({message:"Product Not found"})
   }
};
module.exports={productRegister,getProductDetails,updateProduct,deleteProduct};