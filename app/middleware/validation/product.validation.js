const checkEmty = (req, res, next) =>{
    let {name, amount, price, sale} = req.body;
    if (name && amount && price && sale) {
        next();
    }else{
        res.status(500).send("không được để trống name, amount, price, sale");
    }
}
const checkNumber = (req, res, next) =>{
    let {amount, price, sale} = req.body;
    //check số nguyên dương
    let regexInt = /^[1-9]\d*$/;
    // check positive decimal
    let regexFloat =/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
    //Mảng lỗi
    let error = [];

    if (!regexInt.test(amount)) {
        error = [...error, `Số lượng phải là số nguyên dương`];
    }
    if (!regexFloat.test(price)) {
        error = [...error, ` Giá phải là số thập phân dương `];
    }
    if (!regexFloat.test(sale)) {
        error = [...error, ` Sale là số thập phân dương `];
    }

    if (error.length > 0) {
        res.status(500).send(error);
    }else{
        next();
    }
}

module.exports = {
    checkNumber,
    checkEmty
}