import express from "express";
import dotenv from "dotenv";
import LottoResults from "../models/LottoResults.js";

dotenv.config();

const router = express.Router();

router.post("/generateLottoNumbers", async (req, res) => {
  const { selectedNumbers, prizePool } = req.body;

  if (!Array.isArray(selectedNumbers) || selectedNumbers.length !== 6) {
    return res.status(400).json({ error: "Niepoprawne dane wejściowe" });
  }

  const numbers = [];
  //   while (numbers.length < 6) {
  //     const number = Math.floor(Math.random() * 49) + 1;
  //     if (!numbers.includes(number)) {
  //       numbers.push(number);
  //     }
  //   }
  for (let i = 0; i < 6; i++) {
    numbers.push(i + 1);
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
      PrizePool: prizePool,
      DidWin: matchCount === 6,
    });

    await lottoResult.save();

    return res.status(200).json({
      results: numbers,
      matchingNumbers: matchingNumbers,
      matchCount: matchCount,
      didWin: matchCount === 6,
      prizePool: prizePool,
    });
  } catch (error) {
    console.error("Błąd serwera:", error);
    return res
      .status(500)
      .json({ message: "Błąd serwera", error: error.message });
  }
});
export default router;
