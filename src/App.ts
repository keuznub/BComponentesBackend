import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import compression from 'compression'
import cookieparser from 'cookie-parser'
const app = express()

app.use(express.json())
app.use(helmet())
app.use(compression())
app.use(cookieparser())
app.use(rateLimit({max:100,windowMs:1000*15*60}))
app.use(cors())

app.use("/api/auth", authRouter)
app.use("/api/product", productRouter)




export default app