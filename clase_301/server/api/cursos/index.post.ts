export default defineEventHandler(async (event) => {
    //obtener el body desde el request que envía el cliente
    const body = await readBody(event)

    //obtener nombre, nivel y anio en variables separadas (desde el body)
    const { nombre, nivel, anio } = body

    //limpiar los datos recibidos antes de insertar
    const nombreNormalizado = typeof nombre === 'string' ? nombre.trim() : ''
    const nivelNumero = Number(nivel)
    const anioNumero = Number(anio)

    //insertar en la BD
    const curso = await prisma.curso.create({
        data: {
            nombre: nombreNormalizado,
            nivel: nivelNumero,
            anio: anioNumero
        }
    })

    //enviar respuesta al cliente
    return {
        ok: true,
        curso
    }
})