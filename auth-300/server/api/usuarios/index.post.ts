import bcrypt from "bcryptjs";

export default defineEventHandler(async (event) => {
  const { email, password, nombreCompleto, activo, rol } = await readBody(event);

  const hash = await bcrypt.hash(password, 12);

  await prisma.usuario.create({
    data: {
      email: email.trim(),
      password: hash,
      nombreCompleto: nombreCompleto.trim(),
      activo: activo,
      rol: rol,
    },
  });

  return { ok: true };
});
