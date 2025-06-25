import rateLimit from "express-rate-limit";

type TimeWindow = "15s" | "30s" | "1m" | "5m" | "1h";

export function limiterApi(limit: number, time: TimeWindow = "1m") {
  const windowMs = timeToMs(time);

  return rateLimit({
    windowMs,
    limit: limit, // Usar el parámetro limit
    standardHeaders: true,
    legacyHeaders: false,
    validate: { xForwardedForHeader: false },
    handler: (req, res) => {
      const resetTime = res.getHeader("RateLimit-Reset");

      return res.status(429).json({
        status: 429,
        message: `Has excedido el número máximo de solicitudes, vuelve a intentarlo en ${resetTime}s`,
      });
    },
  });
}

function timeToMs(time: TimeWindow): number {
  const unit = time.slice(-1);
  const value = parseInt(time.slice(0, -1), 10);

  switch (unit) {
    case "s":
      return value * 1000;
    case "m":
      return value * 60 * 1000;
    case "h":
      return value * 60 * 60 * 1000;
    default:
      throw new Error("Unidad de tiempo no válida. Usa 's', 'm' o 'h'.");
  }
}
