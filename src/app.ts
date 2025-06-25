import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import config from "./config/config";

const app = express();

// Middlewares
const CORS_DEV = {
  origin: [config.app.url, "http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(CORS_DEV));
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", config.app.url], // Sin dependencias externas
      styleSrc: ["'self'", "'unsafe-inline'", config.app.url], // Swagger necesita estilos inline
      imgSrc: ["'self'", "data:", config.app.url], // Imágenes locales y embebidas
      connectSrc: ["'self'"], // Conexiones solo a tu servidor
    },
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
app.set("trust proxy", false);

// Rutas
import authRoutes from "./routes/authRoute";

app.use("/api/v1/auth", authRoutes);

// Puerto
app.set("port", config.app.port);

export default app;
