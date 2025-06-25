import { Router } from "express";
import { getUsers, postRegister } from "../controllers/authController";
import { limiterApi } from "../middlewares/limiterMiddleware";

const router = Router();

// Middlewares

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     description: POST a ruta de Auth para registrar usuarios.
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: El correo electrónico del usuario.
 *                 example: user1@gmail.com
 *               password:
 *                 type: string
 *                 description: La contraseña del usuario.
 *                 example: "Asd@123"
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente.
 *       400:
 *         description: Necesitas un correo y una contraseña.
 *       409:
 *         description: El usuario ya existe.
 *       429:
 *         description: Has excedido el límite de solicitudes
 *       500:
 *         description: Error interno del servidor.
 */
router.post("/register", limiterApi(3, "30s"), postRegister);

/**
 * @swagger
 * /api/v1/auth/users:
 *   get:
 *     tags:
 *       - Auth
 *     description: GET a ruta de Auth para pedir los datos de los usuarios.
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Token de autenticación.
 *         required: true
 *         schema:
 *           type: string
 *           example: "Bearer eyJhbGciOi..."
 *     responses:
 *       200:
 *         description: Detalles de usuario.
 *       401:
 *         description: No autorizado.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/users", limiterApi(30, "1m"), getUsers);

export default router;
