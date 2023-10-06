const {Sequelize} = require("sequelize");
const {DB,USER,PASSWORD,HOST,dialect} = require("../configs/database.configs");
const {createProductModel} = require("./product.model")
const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host : HOST,
    dialect: dialect
});

const Product = createProductModel(sequelize);

module.exports = {
    sequelize,
    Product,
};