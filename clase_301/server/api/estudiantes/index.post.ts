export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { run, nombres, apellidos, email, fechaNac, cursoId } = body

    let fechaNacimiento: Date | null = null
    if (fechaNac) {
        fechaNacimiento = new Date(`${fechaNac}T00:00:00`)
    }        

    const estudiante = await prisma.estudiante.create({
        data: {
            run: run.trim(),
            nombres: nombres.trim(),
            apellidos: apellidos.trim(),
            email: email?.trim(),
            fechaNac:fechaNacimiento,
            cursoId 
        }
    })
})