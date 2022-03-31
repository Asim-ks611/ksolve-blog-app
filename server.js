const express =require( "express")
const {mongoConnect} = require('./mongo')
const cors = require( "cors")
const cookieParser = require('cookie-parser')
const logger =require("./middlewares/logger")

// IMPORTING ROUTERS
const authorsRouter = require("./routers/authors.router")
const postsRouter = require("./routers/posts.router")
const commentsRouter = require("./routers/comments.router")
const categoriesRouter = require("./routers/categories.router")

// CONSTANTS
const app = express()

const PORT = 3005;

// INITIATING MIDDLEWARES
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin:"http://localhost:3000",
    credentials: true
}));
app.use(express.json())
app.use('/public',express.static(__dirname+'/public'))

// CUSTOM MIDDLEWARES
app.use(logger)

// USING ROUTER
app.use("/authors",authorsRouter)
app.use("/posts",postsRouter).setMaxListeners(25)
app.use("/comments",commentsRouter)
app.use("/categories",categoriesRouter)

mongoConnect()
app.listen(PORT,()=>{
    console.log(`Server is Running at http://localhost:${PORT}`);
})

