import express from "express"
import cors from "cors";
import { ENV } from "./config/env"
import { clerkMiddleware } from '@clerk/express'
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import commentRoutes from "./routes/commentRoutes";
const app = express()

app.use(cors({ origin: ENV.FRONTEND_URL, credentials: true }));
app.use(clerkMiddleware());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    req.body
    res.json({
        message:"welcome to product-store API",
        endpoints:{
            users:"/api/users",
            products:"/api/products",
            comments:"/api/comments",
        }
    })
})
app.use("/api/users",userRoutes)
app.use("/api/products",productRoutes)
app.use("/api/comments",commentRoutes)
app.listen(ENV.PORT,()=>{
    console.log(`Server is running on port ${ENV.PORT}`)
}) 