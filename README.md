# Proyecto de Node.js con TypeScript

## Descripción

Este proyecto es una aplicación de Node.js que se encarga de gestionar los usuarios de un sistema de gestión de datos. El objetivo es crear una API RESTful que permita a los usuarios registrarse, obtener información sobre los usuarios y realizar operaciones de manera segura y eficiente.

## Tecnologías

- Node.js
- Express.js
- TypeScript
- Prisma
- Swagger
- JWT
- PostgreSQL
- Bcrypt

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/Ross1736/ts-api.git
```

2. Instalar las dependencias:

```bash
npm install
```

3. Configurar las variables de entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido (puedes modificar los valores según tu entorno):

```env
# Base de datos
DATABASE_URL="postgresql://postgres:TU_CONTRASEÑA@localhost:5432/mi_base"

# Configuración general
PORT=4000
URL=http://localhost:5173
PROD=false
SECURE=false

# JWT
JWT_SECRET=123123
JWT_EXPIRES_IN=1d
JWT_REFRESH_EXPIRES_IN=7d

# Usuario
API_KEY=123123

# Swagger
PASSWORD_SWAGGER=123213
```

4. Generar el cliente Prisma:

```bash
npx prisma generate
```

5. Iniciar el servidor:

```bash
npm run dev
```

6. Abrir el explorador de navegador y acceder a la URL `http://localhost:8080/docs`.
