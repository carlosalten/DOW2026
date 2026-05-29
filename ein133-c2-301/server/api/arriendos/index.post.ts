export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { marca, modelo, patente, monto, inicio, termino } = body

    // inicioDate = new Date(`${inicio}T00:00:00`)
    // terminoDate = new Date(`${termino}T00:00:00`)
    
    const arriendo = await prisma.arriendo.create({
        data: {
            marca: marca.trim(),
            modelo: modelo.trim(),
            patente: patente.trim(),
            monto: Number(monto),
            inicio: new Date(`${inicio}T00:00:00`),
            termino: new Date(`${termino}T00:00:00`)
        }
    })

    return {
        ok: true,
        arriendo
    }
})