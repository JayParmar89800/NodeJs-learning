const dbConnect = require("./mongodb");

const deleteData = async () => {
  let data = await dbConnect();
  let result = await data.deleteOne({
    name: "max-2",
  });
//   let result = await data.deleteMany({
//     name: "max-2",
//   });
  console.warn(result);
  if (result.acknowledged) {
    console.log("recorder deleted");
  }
};

deleteData();
