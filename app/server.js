const express = require("express");
const cors = require("cors");
const app = express();
const {sequelize} = require("./model");
const rootRouter = require("./router/root.router");
const port = 8000;

app.use(cors());
app.use(express.json());

app.use(rootRouter);

app.get("/", (req, res)=>{
    res.send("hello");
})

app.listen(port, ()=>{
    console.log(`app run on ${port}`);
})

sequelize.sync({alter:true});