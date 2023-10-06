const express = require("express");
const {getAll,getDetail,createProduct,updateProduct,deleteProduct} = require("../controller/product.controller");
const  {checkEmty, checkNumber} = require("../middleware/validation/product.validation")
const productRouter = express.Router();

productRouter.get("/", getAll);
productRouter.get("/:id", getDetail);
productRouter.post("/",checkEmty, checkNumber ,createProduct);
productRouter.put("/:id",checkEmty, checkNumber , updateProduct);
productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;