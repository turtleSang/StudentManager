const { where } = require("sequelize");
const { Product } = require("../model");

const create = async (product) => {
    const newProduct = await Product.create(product);
    return newProduct;
}

const getAllListProduct = async () => {
    const listProduct = await Product.findAll();
    return listProduct;
}

const getDetailProduct = async (id) => {
    const product = await Product.findOne({
        where: {
            id
        }
    })
    return product
}

const updateProductById = async (id, data) => {
    let product = await getDetailProduct(id);
    if (product) {
        await Product.update(data, {
            where: {
                id
            }
        });
        product = await getDetailProduct(id);
        return product;
    } else {
        return false;
    }

}

const deleteProductById = async (id) =>{
    let product = await getDetailProduct(id);
    if (product) {
        await Product.destroy({
            where: {
                id
            }
        })
        return product;
    }else{
        return false;
    }
}

module.exports = {
    create,
    getAllListProduct,
    getDetailProduct,
    updateProductById,
    deleteProductById

}