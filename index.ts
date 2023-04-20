import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import sequelize from './config/index';

dotenv.config();

import indexRouter from "./router/index"

const app:express.Application =express();
app.set('port', process.env.PORT || 8003);

app.use(morgan("dev"));
app.use('/', indexRouter);


app.listen(app.get('port'), async()=>{
    console.log(`Server is listening on PORT:${app.get('port')}`)
    await sequelize.authenticate()
    .then(async ()=>{
        console.log("DATABASE CONNECTION SUCCESS")
    })
    .catch(e =>{
        console.log(e)
    })
});