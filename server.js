const express = require('express')
const { send } = require('process')

const app = express()

// Global Middleware running action
app.use(logger)

// Routing
app.get('/',(req,res)=>{
    console.log("Home page")
    res.send('Home page')
})

app.get('/users', auth ,(req,res,next)=>{
    console.log("users page")
    res.send('Users page')
    next();
})


// Middle-ware Definition
function logger(req,res,next){
    console.log("URL log : "+req.originalUrl)
    next()
}

function auth(req,res,next){
    if(req.query.admin ==="true"){
        console.log("[ok] Auth")
        next()
        return
    }
    else{
        res.send('Access denied')
        console.log("[not ok] Auth")
    }
}

// Start server
app.listen(3000,()=>console.log("Server started\n----------"))