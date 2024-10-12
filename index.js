const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const PlasmaRoutes = require("./routes/Plasma");
const hospitalRoutes = require("./routes/hospital");
const medsRoutes = require("./routes/meds");
const oxygenRoutes = require("./routes/oxygen");
const ambulanceRoutes = require("./routes/ambulance");
const volunteerRoutes = require("./routes/volunteer");

const app = express();
const PORT = 5000;

const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });


app.use(cors({
  origin: ["http://localhost:3000", "https://swasthya-6csp.onrender.com/"]
}));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/api", PlasmaRoutes);
app.use("/api", hospitalRoutes);
app.use("/api", medsRoutes);
app.use("/api", oxygenRoutes);
app.use("/api", ambulanceRoutes);
app.use("/api", volunteerRoutes);

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
