export default defineEventHandler(async () => {
    return await prisma.curso.findMany({
        orderBy: [{ nivel: 'asc' }, {nombre: 'asc'}]
    })
})