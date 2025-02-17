import app from "./App";
import { libsql } from "./database/adapter";
import {ErrorMiddleware} from "./middlewares/error.middleware"
app.use(ErrorMiddleware)

app.use(async(req,res,next)=>{
    await libsql.sync()
    next()
})
app.listen(process.env.PORT,()=>{
    console.log("Servidor encendido en el puerto", process.env.PORT);
    
})