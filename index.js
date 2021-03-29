import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import * as path from 'path';
import patientsRoutes from "./routes/patients.js";

const app = express();
dotenv.config();
// app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: true }));
app.use(cors());

// console.log("dir",__dirname)

app.use("/patients", patientsRoutes);
app.use(express.static("build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve("client", "build", "index.html"));
});

// const CONNECTION_URL = "mongodb://localhost/clinic";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
