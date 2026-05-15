export default defineEventHandler(async (event) => {
    // extrae el contenido del body desde el mensaje recibido
    const body = await readBody(event)

    // extrae datos desde el body
    const { run, nombres, apellidos, email, fechaNac, cursoId } = body
    
    // formatear datos antes de insertar en BD
    let fechaNacimiento: Date | null = null
    if (fechaNac) {
        fechaNacimiento = new Date(`${fechaNac}T00:00:00`)
    }

    // insertar en BD
    const estudiante = await prisma.estudiante.create({
        data: {
            run: run.trim(),
            nombres: nombres.trim(),
            apellidos: apellidos.trim(),
            email: email?.trim(),
            fechaNac: fechaNacimiento,
            cursoId: cursoId
        }
    })
    
    //enviar respuesta al cliente
    return {
        ok: true,
        estudiante
    }
})