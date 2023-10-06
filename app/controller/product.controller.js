const { 
    create, 
    getAllListProduct, 
    getDetailProduct,
    updateProductById,
    deleteProductById 
} = require("../service/produc.services");

const getAll = async (req, res) => {
    let listProduct = await getAllListProduct();
    if (listProduct) {
        res.status(200).send(listProduct)
    } else {
        res.status(404).send("not found")
    }
};
const getDetail = async (req, res) => {
    const { id } = req.params;
    let product = await getDetailProduct(id);
    if (product) {
        res.status(200).send(product);
    }else{
        res.status(404).send("not found");
    }
};
const createProduct = async (req, res) => {
    let product = req.body;
    try {
        let newProduct = await create(product);
        res.status(200).send(newProduct);
    } catch (error) {
        res.status(404).send(error.parent.sqlMessage);
    }
};
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        let productUpdated = await updateProductById(id, data);
        if (productUpdated) {
            res.status(200).send(productUpdated);
        }else{
            res.status(404).send(`not found id: ${id}`)
        }
    } catch (error) {
        res.send("Sai dữ liệu");
    }
    
    
};
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    let productDelete = await deleteProductById(id);
    if (productDelete) {
        res.status(200).send(productDelete);
    }else{
        res.status(404).send(`not found id: ${id}`);
    }
}
module.exports = {
    getAll, getDetail, createProduct, updateProduct, deleteProduct
}