const express=require('express');
require('./config');
const Product=require("./product");

const app = express();
app.use(express.json()); 

app.post('/',async(req,resp)=>{
    let data = new Product(req.body);
    let result = await data.save()
    resp.send( result)

})

// View all data
app.get('/list',async(req,resp)=>{
    let data = await Product.find();
    resp.send(data);
})


// View single or particular data which data we pass in params
app.get('/list/:name',async(req,resp)=>{
    let data = await Product.find({name:req.params.name});
    resp.send(data);
})


app.delete('/delete/:_id',async(req,resp)=>{
    let data = await Product.deleteOne(req.params)
    resp.send(data);
})

app.put('/update/:_id',async(req,resp)=>{
    let data = await Product.updateOne(
        req.params,
        {
         $set : req.body
        }
    ) 
    resp.send(data)
})




app.listen(5000)