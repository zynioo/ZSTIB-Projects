import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import lottoRoutes from "./routes/lottoRoutes.js";
import {
  getPrizePool,
  incrementToPrizePool,
  setPrizePool,
} from "./utils/redisUtil.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const __dirname = path.resolve();

app.use("/api/lotto", lottoRoutes);

app.get("/api/lotto/prize-pool", async (req, res) => {
  const prizePool = await getPrizePool();
  res.json({ prizePool });
});
app.post("/api/lotto/increment-prize-pool", async (req, res) => {
  await incrementToPrizePool();
});
app.post("/api/lotto/reset-prize-pool", async (req, res) => {
  await setPrizePool(1000000);
});

app.use(express.static(path.join(__dirname, "../project-joker/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../project-joker/dist", "index.html"));
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Połączono z MongoDB"))
  .catch((err) => console.log("Błąd połączenia z MongoDB:", err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
});
