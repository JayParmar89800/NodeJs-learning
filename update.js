const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();
  let result = data.updateMany(
    {
      name: "note 5",
    },
    {
      $set: { name: "note 8980063045" },
    }
  );
  console.log(result)
};

updateData();
