const express = require('express')
const EventEmitter = require ('events')
const app= express()
const events=new EventEmitter()

let count=0

events.on("CountApi",()=>{
    count++;
    console.log("event called",count)
})

app.get('/',(req,resp)=>{
    resp.send("Api call")
    events.emit("CountApi")
})

app.get('/search',(req,resp)=>{
    resp.send("search Api call")
    events.emit("CountApi")

})

app.get('/update',(req,resp)=>{
    resp.send("update Api call")
    events.emit("CountApi")

})

app.listen(5000)