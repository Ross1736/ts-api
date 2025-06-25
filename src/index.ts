import app from "./app";
import { Request, Response } from "express";
import swaggerRoutes from "./swagger/swaggerRoutes";

const PORT = app.get("port");

// Ruta de Swagger
app.use("/docs", swaggerRoutes);

// Ruta de Bienvenida
app.get("/", (_req: Request, res: Response) => {
  res.json({
    status: 200,
    message: "Server is running",
  });
});

// Servidor
app
  .listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  })
  .on("error", (err: Error) => {
    console.error("Server error:", err.message);
  });
