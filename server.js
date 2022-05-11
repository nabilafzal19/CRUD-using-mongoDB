const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes/foodRoutes.js");
const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://MongoMan:Nhipata11!@cluster0.zfzxg.mongodb.net/FoodDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

app.use(foodRouter);

app.listen(3000, () => {
  console.log("server running at port 3000");
});
