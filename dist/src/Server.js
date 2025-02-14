import app from "./App";
import { ErrorMiddleware } from "./middlewares/error.middleware";
app.use(ErrorMiddleware);
app.listen(process.env.PORT, function() {
    console.log("Servidor encendido en el puerto", process.env.PORT);
});

//# sourceMappingURL=Server.js.map