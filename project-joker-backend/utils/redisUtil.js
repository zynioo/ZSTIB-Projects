import { createClient } from "redis";

const DEFAULT_PRIZE_POOL = 1000000;

const redisClient = await createClient({
  url: process.env.REDIS_URI,
  socket: {
    tls: true,
    rejectUnauthorized: false,
  },
});

redisClient.on("error", (err) => console.error("Redis error:", err));

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log("Połączono z Redis");
  } catch (error) {
    console.error("Błąd połączenia z Redis:", error);
  }
  const exists = await redisClient.get("lotto-prize-pool");
  if (!exists) {
    await redisClient.set("lotto-prize-pool", DEFAULT_PRIZE_POOL);
    console.log("Zainizjalizowano pule nagrod:", DEFAULT_PRIZE_POOL);
  }
};

connectRedis();

const getPrizePool = async () => {
  const prizePool = await redisClient.get("lotto-prize-pool");
  return prizePool;
};

const setPrizePool = async (prizePool) => {
  await redisClient.set("lotto-prize-pool", prizePool);
};

const incrementToPrizePool = async () => {
  const prizePool = await getPrizePool();
  await setPrizePool(
    parseInt(prizePool) + Math.floor(Math.random() * 50000) + 1
  );
};

export { getPrizePool, setPrizePool, incrementToPrizePool };
