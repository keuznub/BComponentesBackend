
import app from "./app";
import {ErrorMiddleware} from "./middlewares/error.middleware"
app.use(ErrorMiddleware)
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("Servidor encendido en el puerto", PORT);
    
})