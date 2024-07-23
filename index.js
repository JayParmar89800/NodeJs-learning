const dbConnect=require('./mongodb')


// dbConnect(0).then((resp) => {
//   resp
//     .find()
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

const main = async () => {
  let data=await dbConnect();
  data=await data.find().toArray();
  console.log(data)
}


main()