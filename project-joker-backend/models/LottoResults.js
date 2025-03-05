import mongoose from "mongoose";

const lottoResultsSchema = new mongoose.Schema({
  SelectedNumbers: {
    type: [Number], // Tablica liczb
    required: true,
  },
  WiningNumbers: {
    type: [Number], // Tablica liczb
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  MatchCount: {
    type: Number,
    required: true,
  },
  PrizePool: {
    type: Number,
    default: 0,
  },
  DidWin: {
    type: Boolean,
    required: true,
  },
});

const LottoResults = mongoose.model("LottoResults", lottoResultsSchema);

export default LottoResults;
