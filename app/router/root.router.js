const express = require("express");
const productRouter = require("./product.router");
const rootRouter = express.Router();

rootRouter.use("/products", productRouter);

module.exports = rootRouter;