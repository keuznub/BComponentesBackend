
import app from "./app";
import {ErrorMiddleware} from "./middlewares/error.middleware"
app.use(ErrorMiddleware)


app.listen(process.env.PORT,()=>{
    console.log("Servidor encendido en el puerto", process.env.PORT);
    
})