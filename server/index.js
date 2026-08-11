require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const corsOptions = {
  origin: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/websites", require("./routes/websites"));

const PORT = process.env.PORT || 5001;
const HOST = process.env.HOST || "0.0.0.0";
const MONGO_URI = process.env.MONGO_URI;
const useMongo = process.env.USE_MONGODB !== "false";

function startServer() {
  app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
    if (process.env.USE_MONGODB === "false") {
      console.log("Using local JSON fallback storage for users and websites.");
    } else {
      console.log("Using MongoDB for users and websites.");
    }
  });
}

if (useMongo && MONGO_URI) {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    })
    .then(() => {
      console.log("Connected to MongoDB");
      startServer();
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err.message);
      console.error(
        "Failed to connect to MongoDB Atlas. Falling back to local JSON storage."
      );
      process.env.USE_MONGODB = "false";
      startServer();
    });
} else {
  if (useMongo && !MONGO_URI) {
    console.error("Missing MONGO_URI. Falling back to local JSON storage.");
  }
  process.env.USE_MONGODB = "false";
  startServer();
}
