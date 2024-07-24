const dbConnect=require('./mongodb');

const insert = async ()=>{
    const db = await dbConnect();
    const result=await db.insertMany(
        [
            {
                name:"note 5",brand:"vivoy21l",price:320,category:"mobile"
            },
            {
                name:"note 21",brand:"vivo",price:353,category:"mobile"
            },
            {
                name:"max-2",brand:"micromax",price:153,category:"mobile"
            },
            {
                name:"max-3",brand:"micromax",price:342,category:"mobile"
            }
        ]
    )
    if(result.acknowledged){
        console.log("data inserted")
    }
}

insert();