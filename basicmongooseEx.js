const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/e-commerce");
const ProductsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});
const saveInDb = async () => {
  const ProductsModel = mongoose.model("products", ProductsSchema);
  let data = new ProductsModel({
    name: "note Pro",
    price: 10000,
    brand: "maxx",
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
};

// saveInDb();

const updateInDb=async()=>{
    const Product = mongoose.model("products", ProductsSchema);
    let data = await Product.updateOne(
        {name:'note Pro'},{
            $set:{price:1007,name:'note Pro +'}
        }
    )
    console.log(data)
}

// updateInDb()

const deleteInDb=async()=>{
    const Product = mongoose.model("products", ProductsSchema);
    let data =await Product.deleteOne({name:'note Pro'})
    console.log(data)
}

// deleteInDb()

const findInDb=async()=>{
    const Product = mongoose.model("products", ProductsSchema);
    let data =await Product.find({name:'note Pro +'});
    console.log(data)
}

findInDb()