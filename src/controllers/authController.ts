import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { Prisma, Role } from "@prisma/client";
import { getPrismaHttpError } from "../utils/functions";
import { prisma } from "../config/db";
import { validateEmail } from "../utils/validations";

export async function postRegister(req: Request, res: Response) {
  try {
    const { email, password, role } = req.body;

    if (!email || !password) {
      res
        .status(400)
        .json({ status: 400, message: "Necesitas un correo y una contraseña" });
      return;
    }

    // Validar email
    if (!validateEmail(email)) {
      res.status(400).json({ mensaje: "Correo electrónico no válido" });
      return;
    }

    // Validar password
    if (password.length < 6 || password.length > 50) {
      res.status(400).json({
        mensaje:
          "La contraseña debe tener entre 6 y un máximo de 50 caracteres",
      });
      return;
    }

    // Validar role
    if (role && !Object.values(Role).includes(role)) {
      res.status(400).json({ status: 400, message: "Rol inválido" });
      return;
    }

    const emailNormalized = email.trim().toLowerCase();

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email: emailNormalized,
        password: passwordHash,
        role,
      },
      omit: {
        password: true,
      },
    });

    const response = {
      status: 201,
      message: "Usuario creado exitosamente",
      user,
    };

    res.status(201).json(response);
    return;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      const { status, message } = getPrismaHttpError(error.code);
      res.status(status).json({ status, message });
    } else {
      res
        .status(500)
        .json({ status: 500, message: "Error interno del servidor" });
    }
  }
}

export async function getUsers(_req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany({
      select: {
        user_id: true,
        email: true,
        role: false,
      },
      orderBy: {
        created: "desc",
      },
    });

    res
      .status(200)
      .json({ status: 200, message: "Usuarios encontrados", users });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      const { status, message } = getPrismaHttpError(error.code);

      res.status(status).json({ status, message });
      return;
    } else {
      res
        .status(500)
        .json({ status: 500, message: "Error interno del servidor" });
    }
  }
}
