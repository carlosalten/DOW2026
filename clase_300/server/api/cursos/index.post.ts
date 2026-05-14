export default defineEventHandler(async (event) => {
    // extrae el contenido del body desde el mensaje recibido
    const body = await readBody(event)

    // extrae nombre, nivel y anio desde el body
    const { nombre, nivel, anio } = body
    
    // formatear datos antes de insertar en BD
    const nombreNormalizado = typeof nombre === 'string' ? nombre.trim() : ''
    const nivelNumero = Number(nivel)
    const anioNumero = Number(anio)

    // insertar en BD
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