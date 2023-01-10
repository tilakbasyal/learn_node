const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

require("dotenv").config();
const mongoString = process.env.SAMPLE_AIRBNB_DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (err) => {
  console.error("Connection error", err);
});

database.once("open", async (_) => {
  //   const collection = database.db.collection("listingsAndReviews");
  //   collection.find({ minimum_nights: "3" }).toArray(function (err, data) {
  //     console.log("data", data);
  //   });
  console.log("Database Connected:", mongoString);
});

const app = express();

app.use(express.json());

app.use("/api", routes);

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
