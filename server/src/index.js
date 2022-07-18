const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const daysRoutes = require("./routes/day");
const cors = require("cors")

const app = express();
const port = 3001;

//middlewares
app.use(cors())
app.use(express.json());
app.use("/api", daysRoutes);
//routes
app.get("/", (req, res) => {
  res.send("Diario API REST");
});
//mdb connnection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || port, () => {
  console.log("server listenning on port ", port);
});
