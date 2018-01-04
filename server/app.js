const express=require('express')
const app=express()

app.use('/',require('./controllers/main'))

module.exports=app