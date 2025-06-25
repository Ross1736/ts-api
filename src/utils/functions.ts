export function getPrismaHttpError(code: string): {
  status: number;
  message: string;
} {
  const errors: Record<string, { status: number; message: string }> = {
    P1000: {
      status: 401,
      message:
        "Autenticación fallida. Verifica tus credenciales de base de datos.",
    },
    P1001: {
      status: 503,
      message:
        "No se pudo conectar con la base de datos. Verifica si está encendida.",
    },
    P1002: {
      status: 408,
      message: "La operación fue cancelada por un timeout.",
    },
    P1003: { status: 404, message: "La base de datos no existe." },
    P1004: {
      status: 500,
      message: "No se puede crear el archivo de base de datos.",
    },
    P1005: {
      status: 500,
      message: "Falta el archivo de configuración de la base de datos.",
    },
    P1006: {
      status: 400,
      message: "El proveedor de la base de datos no es compatible.",
    },
    P1007: {
      status: 500,
      message: "Error al abrir el archivo de base de datos.",
    },
    P1008: { status: 408, message: "Timeout alcanzado en una operación." },
    P1009: { status: 409, message: "La base de datos ya existe." },
    P1010: {
      status: 401,
      message: "Fallo en la autenticación con el servidor.",
    },
    P1011: { status: 500, message: "Error al abrir una conexión TLS." },
    P1012: {
      status: 400,
      message: "Fallo en la validación del proveedor de la base de datos.",
    },
    P1013: { status: 500, message: "No se puede abrir el archivo `.env`" },
    P1014: {
      status: 500,
      message: "No se pudo encontrar el archivo de esquema Prisma.",
    },
    P1015: { status: 403, message: "El certificado SSL no es válido." },
    P1016: {
      status: 500,
      message: "No se encontró el archivo de configuración.",
    },
    P1017: { status: 503, message: "No se pudo abrir la conexión TCP." },

    P2000: {
      status: 422,
      message: "El valor proporcionado es demasiado largo para el campo.",
    },
    P2001: { status: 404, message: "El registro requerido no fue encontrado." },
    P2002: {
      status: 409,
      message: "Violación de restricción única. El valor ya existe.",
    },
    P2003: { status: 409, message: "Violación de clave foránea." },
    P2004: { status: 409, message: "Violación de una restricción." },
    P2005: { status: 422, message: "Valor inválido para el campo." },
    P2006: { status: 422, message: "Valor inválido para el campo." },
    P2007: { status: 400, message: "Error de validación de datos." },
    P2008: { status: 400, message: "Error en la consulta del documento." },
    P2009: { status: 500, message: "Error en el motor de la base de datos." },
    P2010: { status: 400, message: "Consulta fallida por restricciones." },
    P2011: { status: 422, message: "Violación de restricción nula." },
    P2012: { status: 422, message: "Valor requerido ausente." },
    P2013: { status: 400, message: "Argumentos mal formateados." },
    P2014: { status: 409, message: "Violación de relación." },
    P2015: {
      status: 404,
      message: "Registro no encontrado para la operación.",
    },
    P2016: { status: 400, message: "Consulta no válida." },
    P2017: { status: 400, message: "Relación inválida." },
    P2018: {
      status: 404,
      message: "La relación referenciada no fue encontrada.",
    },
    P2019: { status: 400, message: "Input inválido." },
    P2020: { status: 400, message: "Índice de valor fuera de rango." },
    P2021: { status: 404, message: "Tabla no encontrada." },
    P2022: { status: 404, message: "Columna no encontrada." },
    P2023: {
      status: 422,
      message: "Valor nulo encontrado en un campo no nulo.",
    },
    P2024: { status: 503, message: "Error en la creación de la conexión." },
    P2025: { status: 404, message: "Registro no encontrado." },
    P2026: { status: 500, message: "Error al inicializar Prisma Client." },
    P2027: { status: 500, message: "Error al ejecutar una función." },
    P2028: { status: 500, message: "Transacción fallida." },
    P2030: {
      status: 422,
      message: "Datos binarios no válidos para tipo JSON.",
    },
    P2033: { status: 400, message: "Consulta SQL inválida." },
    P2034: {
      status: 400,
      message: "La versión del motor de la base de datos no es compatible.",
    },
    P3000: { status: 404, message: "No se puede encontrar la migración." },
    P3001: { status: 500, message: "Error al aplicar una migración." },
    P3002: { status: 409, message: "La base de datos ya contiene datos." },
    P3003: { status: 500, message: "La migración falló." },
    P3004: { status: 400, message: "Migración no válida." },
    P3005: { status: 500, message: "Fallo al crear la migración." },
    P3006: {
      status: 500,
      message: "Inconsistencia detectada en las migraciones.",
    },
  };

  return (
    errors[code] || { status: 500, message: "Error desconocido del servidor." }
  );
}
