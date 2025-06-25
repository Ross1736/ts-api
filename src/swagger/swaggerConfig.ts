import swaggerJSDoc from "swagger-jsdoc";
import path from "path";
import config from "../config/config";

const apisPath = config.app.prod
  ? path.resolve(__dirname, "../routes/*.js")
  : path.resolve(__dirname, "../routes/*.ts");

// Configuración de Swagger JSDoc
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API de ROSS",
      version: "1.0.0",
      description:
        "Esta API es una prueba de Swagger JSDoc con TypeScript. Está en desarrollo y no está lista para producción.",
      contact: {
        name: "Ticona Valencia Bryan Roselbet",
        url: "https://portafolio-gray-six.vercel.app/",
        email: "bryan1736b@gmail.com",
      },
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
        apiKeyAuth: {
          type: "apiKey",
          in: "query",
          name: "api_key",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
        apiKeyAuth: [],
      },
    ],
  },
  apis: [apisPath],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
