import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import LottoResults from "./models/LottoResults.js";
import path from "path";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Endpoint do generowania wyników
app.post("/api/generateLottoNumbers", async (req, res) => {
  const { selectedNumbers } = req.body;

  // Sprawdzenie poprawności danych wejściowych
  if (!Array.isArray(selectedNumbers) || selectedNumbers.length !== 6) {
    return res.status(400).json({ error: "Niepoprawne dane wejściowe" });
  }

  const numbers = [];
  while (numbers.length < 6) {
    const number = Math.floor(Math.random() * 49) + 1;
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  numbers.sort((a, b) => a - b);

  const matchingNumbers = selectedNumbers.filter((num) =>
    numbers.includes(num)
  );
  const matchCount = matchingNumbers.length;

  try {
    const lottoResult = new LottoResults({
      SelectedNumbers: selectedNumbers,
      WiningNumbers: numbers,
      Date: new Date(),
      MatchCount: matchCount,
      PrizePool: 0,
      DidWin: matchCount === 6,
    });

    // Zapis do bazy danych
    await lottoResult.save();

    // Odpowiedź po zapisaniu
    return res.status(200).json({
      results: numbers,
      matchingNumbers: matchingNumbers,
      matchCount: matchCount,
    });
  } catch (error) {
    console.error("Błąd serwera:", error); // Logowanie błędu do konsoli
    return res
      .status(500)
      .json({ message: "Błąd serwera", error: error.message });
  }
});

//

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "../project-joker/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../project-joker/dist", "index.html"));
});

//

// Połączenie z bazą danych MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Połączono z MongoDB"))
  .catch((err) => console.log("Błąd połączenia z MongoDB:", err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
});
