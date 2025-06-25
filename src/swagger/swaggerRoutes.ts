import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swaggerConfig";
import basicAuth from "express-basic-auth";
import path from "path";
import config from "../config/config";

const router = express.Router();

// Ruta para servir Swagger UI
router.use(
  "/",
  basicAuth({
    users: { admin: config.swagger.password },
    challenge: true,
  }),
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    customCss: `.swagger-ui .topbar { display: none }`,
    customSiteTitle: "API de drive",
    swaggerOptions: {
      validatorUrl: null,
      // requestInterceptor: (req) => {
      //   req.headers["Authorization"] =
      //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjY0OTk2NmYtNGYxYS00OGYxLThlNmQtNzk1YmE5OTk5NTViIiwiZW1haWwiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlIjoiVVNVQVJJTyIsImlhdCI6MTczMjcwNjU2NCwiZXhwIjoxNzY0MjY0MTY0fQ.GdBaQ5abWr5dP-jeD1o7IU_s1PsQ91U0XxF5ETmbnz0";
      //   return req;
      // },
    },
  })
);

// Ruta para los archivos estáticos de Swagger
router.use(
  "/",
  express.static(path.join(__dirname, "../../node_modules/swagger-ui-dist"))
);

// Ruta para obtener el archivo JSON de Swagger
router.get("/docs.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

export default router;
